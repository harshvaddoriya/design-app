export const getContactEmailTemplate = (name: string, email: string, message: string) => {
    const date = new Date().toLocaleString('en-US', {
        timeZone: 'UTC',
        dateStyle: 'full',
        timeStyle: 'short',
    });

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>New Inquiry from ${name}</title>
    <style>
        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f5;
            color: #18181b;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            padding: 40px;
            background-color: #f4f4f5;
        }
        .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            color: #18181b;
            border-radius: 16px;
            border: 1px solid #e4e4e7;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
            padding: 32px;
            background-color: #fafafa;
            border-bottom: 1px solid #e4e4e7;
        }
        .content {
            padding: 32px;
        }
        .field-group {
            margin-bottom: 24px;
            padding: 20px;
            background-color: #f9fafb;
            border: 1px solid #f3f4f6;
            border-radius: 12px;
        }
        .label {
            color: #71717a;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 8px;
        }
        .value {
            font-size: 15px;
            line-height: 1.6;
            color: #27272a;
        }
        .message {
            color: #18181b;
            white-space: pre-wrap;
        }
        .footer {
            padding: 0 32px 32px 32px;
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #18181b;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 13px;
        }
        .meta {
            margin-top: 24px;
            font-size: 11px;
            color: #a1a1aa;
        }

        /* Dark Mode Overrides */
        @media (prefers-color-scheme: dark) {
            body, .wrapper { background-color: #030303 !important; }
            .main { background-color: #0a0a0a !important; border-color: #1f1f1f !important; color: #fafafa !important; }
            .header { background-color: #111111 !important; border-color: #1f1f1f !important; }
            .field-group { background-color: #030303 !important; border-color: #1f1f1f !important; }
            .label { color: #52525b !important; }
            .value, .message { color: #f4f4f5 !important; }
            .button { background-color: #ffffff !important; color: #000000 !important; }
            .meta { color: #3f3f46 !important; }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <table class="main">
            <tr>
                <td class="header">
                    <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">New Inquiry</h1>
                </td>
            </tr>
            <tr>
                <td class="content">
                    <div class="field-group">
                        <div class="label">From</div>
                        <div class="value">
                            <strong style="font-weight: 700;">${name}</strong><br/>
                            <span style="font-size: 13px;">${email}</span>
                        </div>
                    </div>
                    <div class="field-group">
                        <div class="label">Message</div>
                        <div class="value message">${message}</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <a href="mailto:${email}" class="button">Reply to ${name}</a>
                    <div class="meta">
                        Received on ${date}
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
  `;
};

export const getConfirmationEmailTemplate = (name: string) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style>
        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }
        body { 
            margin: 0; 
            padding: 0; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
            background-color: #f4f4f5; 
            color: #18181b; 
        }
        .container { 
            max-width: 600px; 
            margin: 40px auto; 
            background-color: #ffffff; 
            border-radius: 24px; 
            border: 1px solid #e4e4e7; 
            overflow: hidden; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header { 
            padding: 60px 40px; 
            text-align: center; 
            background-color: #fafafa;
            border-bottom: 1px solid #e4e4e7;
        }
        .content { 
            padding: 40px; 
            text-align: center; 
        }
        h1 { 
            font-size: 32px; 
            margin: 0; 
            letter-spacing: -0.03em; 
            color: #18181b; 
        }
        p { 
            color: #52525b; 
            line-height: 1.8; 
            font-size: 16px; 
            margin-top: 20px; 
        }
        .divider { 
            height: 1px; 
            background: #e4e4e7; 
            margin: 40px 0; 
        }
        .footer { 
            padding: 40px; 
            text-align: center; 
            font-size: 12px; 
            color: #a1a1aa; 
        }

        /* Dark Mode Overrides */
        @media (prefers-color-scheme: dark) {
            body { background-color: #030303 !important; }
            .container { background-color: #0a0a0a !important; border-color: #1f1f1f !important; }
            .header { background-color: #111111 !important; border-color: #1f1f1f !important; }
            h1 { color: #ffffff !important; }
            p { color: #a1a1aa !important; }
            .divider { background-color: #1f1f1f !important; }
            .footer { color: #3f3f46 !important; }
            strong { color: #ffffff !important; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div style="font-size: 40px; margin-bottom: 20px;">✉️</div>
            <h1 style="color: inherit;">Message Received</h1>
        </div>
        <div class="content">
            <p>Hi ${name},</p>
            <p>Thanks for reaching out! I've received your message and will review it shortly. I typically respond to all work inquiries within 24 hours.</p>
            <div class="divider"></div>
            <p style="font-size: 14px;">Looking forward to connecting,<br/><strong style="color: inherit; font-weight: 700;">Harsh Vaddoriya</strong></p>
        </div>
        <div class="footer">
            Automated confirmation from harshvaddoriya0319@gmail.com
        </div>
    </div>
</body>
</html>
    `;
};
