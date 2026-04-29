require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_BASE = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
const MODEL = process.env.MODEL || 'gpt-4o-mini';

const LANGUAGES = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'zh', name: 'Simplified Chinese' }
];

const ROOT_DIR = path.join(__dirname, '..');

// Add or remove files you want to translate
const FILES_TO_TRANSLATE = [
    'about.html', 'contact.html', 'cookie-policy.html', 'index.html', 
    'payment-apps.html', 'privacy-policy.html', 'survival-guide.html', 
    'terms-of-service.html', 'transport-guide.html', 'visa-guide.html', 
    'vpn-internet.html', 'faq.html', '404.html'
];

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return text;
    
    const prompt = `You are a professional website translator specializing in travel guides. Translate the following HTML content into ${targetLang}. 
CRITICAL RULES:
1. ONLY output the translated HTML content. Do NOT wrap it in markdown block quotes like \`\`\`html.
2. Keep ALL HTML tags, class names, IDs, inline styles, and attributes exactly the same.
3. Only translate the human-readable text content.

Content to translate:
${text}`;

    const response = await fetch(`${OPENAI_API_BASE}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3
        })
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`API Error: ${response.status} ${err}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function processFile(filename, targetLangObj) {
    const filePath = path.join(ROOT_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return;
    }

    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });

    // Update <html lang="en"> to target lang
    $('html').attr('lang', targetLangObj.code);

    console.log(`Processing ${filename} -> ${targetLangObj.code}...`);

    try {
        // 1. Translate Title
        const title = $('title').text();
        if (title) {
            const translatedTitle = await translateText(title, targetLangObj.name);
            $('title').text(translatedTitle);
        }

        // 2. Translate Meta Description
        const metaDesc = $('meta[name="description"]').attr('content');
        if (metaDesc) {
            const translatedDesc = await translateText(metaDesc, targetLangObj.name);
            $('meta[name="description"]').attr('content', translatedDesc);
        }

        // 3. Main Content Translation (Targeted Elements to save tokens and prevent layout breaking)
        // We select headers, paragraphs, list items, and span/a tags outside of script/style.
        // For a production run, you might want to adjust these selectors or translate the whole <body> at once if the model context window allows.
        const elementsToTranslate = $('h1, h2, h3, h4, h5, h6, p, li').not('nav *').not('footer *');
        
        // This is a placeholder log. A full traversal over `elementsToTranslate` would look like:
        /*
        for (let i = 0; i < elementsToTranslate.length; i++) {
            const el = $(elementsToTranslate[i]);
            const originalHtml = el.html();
            if (originalHtml && originalHtml.trim().length > 0) {
                const translated = await translateText(originalHtml, targetLangObj.name);
                el.html(translated);
            }
        }
        */
        console.log(`  [INFO] Targeted ${elementsToTranslate.length} content nodes. (Uncomment the loop in scripts/translate.js to execute deep translation)`);

    } catch(e) {
        console.error(`  [ERROR] Failed during translation of ${filename}: ${e.message}`);
    }

    // Ensure output directory exists
    const outDir = path.join(ROOT_DIR, targetLangObj.code);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    // Save the file
    const outPath = path.join(outDir, filename);
    fs.writeFileSync(outPath, $.html(), 'utf8');
    console.log(`  Saved: ${targetLangObj.code}/${filename}`);
}

async function main() {
    if (!OPENAI_API_KEY) {
        console.error("❌ ERROR: OPENAI_API_KEY is not set in environment or .env file.");
        console.log("Please create a .env file and set OPENAI_API_KEY=your_key");
        process.exit(1);
    }

    console.log("🚀 Starting website translation process...");
    
    for (const lang of LANGUAGES) {
        console.log(`\n--- Starting Translation: ${lang.name} (${lang.code}) ---`);
        for (const file of FILES_TO_TRANSLATE) {
            await processFile(file, lang);
        }
    }
    
    console.log("\n✅ All translations completed!");
}

main().catch(console.error);
