const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const analyticsScript = `
    <!-- Vercel Web Analytics -->
    <script>
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>`;

async function addAnalyticsToHtmlFiles() {
    try {
        // Find all HTML files
        const files = await glob('**/*.html', {
            ignore: ['node_modules/**', '.git/**'],
            cwd: process.cwd()
        });

        console.log(`Found ${files.length} HTML files`);

        let updatedCount = 0;
        let skippedCount = 0;

        for (const file of files) {
            const filePath = path.join(process.cwd(), file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Check if analytics is already added
            if (content.includes('/_vercel/insights/script.js')) {
                console.log(`Skipping ${file} - analytics already present`);
                skippedCount++;
                continue;
            }

            // Find the closing </head> tag and insert analytics before it
            if (content.includes('</head>')) {
                content = content.replace('</head>', `${analyticsScript}\n</head>`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file}`);
                updatedCount++;
            } else {
                console.log(`Warning: No </head> tag found in ${file}`);
            }
        }

        console.log(`\nCompleted: ${updatedCount} files updated, ${skippedCount} files skipped`);
    } catch (error) {
        console.error('Error adding analytics:', error);
        process.exit(1);
    }
}

addAnalyticsToHtmlFiles();
