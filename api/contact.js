// Vercel Serverless Function - 联系表单处理
export default async function handler(req, res) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // 验证必填字段
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // 检查是否有 Resend API Key
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'jueming2025@protonmail.com';

    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured');
      return res.status(200).json({ 
        success: true, 
        message: 'Message received (email not sent - API key not configured)',
        data: { name, email, subject, message }
      });
    }

    // 发送邮件
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'ChinaHub Contact <onboarding@resend.dev>',
        to: [ADMIN_EMAIL],
        reply_to: email,
        subject: `[Contact] ${subject || 'New Message from ' + name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background: #f8fafc;">
                <td style="padding: 12px; font-weight: bold; width: 100px;">Name:</td>
                <td style="padding: 12px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold;">Email:</td>
                <td style="padding: 12px;">${email}</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px; font-weight: bold;">Subject:</td>
                <td style="padding: 12px;">${subject || 'N/A'}</td>
              </tr>
            </table>
            <h3 style="color: #1e293b;">Message:</h3>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px;">
              Sent from ChinaHub.travel contact form
            </p>
          </div>
        `
      })
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend error:', errorData);
      return res.status(500).json({ 
        error: 'Failed to send email', 
        details: errorData 
      });
    }

    const result = await emailResponse.json();
    console.log('Email sent successfully:', result.id);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
}
