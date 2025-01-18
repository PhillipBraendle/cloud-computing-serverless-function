module.exports = async function (context, req) {
    context.log('Processing QR code generation request.');


    // Extract query parameters
    const targetUrl = req.query.target_url || (req.body && req.body.target_url);
    const darkColor = req.query.dark_colour || (req.body && req.body.dark_colour) || '000000';
    const brightColor = req.query.bright_colour || (req.body && req.body.bright_colour) || 'ffffff';

    if (!targetUrl) {
        context.res = {
            status: 400,
            body: "Please provide a valid 'target_url' parameter."
        };
        return;
    }

    // HTML content with QRCode.js
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        #qrcode {
            margin: 20px auto;
            padding: 10px;
            border: 5px solid #000; /* Frame color */
            border-radius: 10px; /* Rounded corners (optional) */
            display: inline-block;
        }
    </style>
</head>
<body>
    <h1>QR Code Generator</h1>
    <p>Scan the QR code below to visit: <strong>${targetUrl}</strong></p>
    <center><div id="qrcode"></div></center>
    <script>
        let qrcode = new QRCode("qrcode",
        {
            text: "${targetUrl}",
            width: 128,
            height: 128,
            colorDark : "#${darkColor}",
            colorLight : "#${brightColor}",
            correctLevel : QRCode.CorrectLevel.H
        }
        );
    </script>
</body>
</html>
    `;

    // Respond with the HTML page
    context.res = {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
        body: htmlContent
    };
};
