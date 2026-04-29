// Edge Function: 订阅通知邮件
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = 'jueming2025@protonmail.com';

Deno.serve(async (req) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
      } 
    });
  }

  try {
    const { email, name, source } = await req.json();
    console.log('Received:', email, RESEND_API_KEY ? 'API key exists' : 'NO API key');

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ 
        message: 'No API key configured',
        key_exists: false
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Chinahub <notify@resend.dev>',
        to: [ADMIN_EMAIL],
        subject: `New subscriber: ${email}`,
        html: `<p>New subscriber: ${email}</p><p>Source: ${source || 'website'}</p>`
      })
    });

    const result = await resendRes.text();
    console.log('Resend result:', result);

    return new Response(JSON.stringify({ 
      success: true, 
      result: result 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (e) {
    console.error('Error:', e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
