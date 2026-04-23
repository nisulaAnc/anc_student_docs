require('dotenv').config();
const path = require('path');

module.export = {
    port: parseInt(process.env.PORT, 10) || 5000,

    email: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
    },

    google: {
        sheetId: process.env.GOOGLE_SHEET_ID || '',
        clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
        privateKey: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\/g, '\n'),
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'fallback_secret_change_me',
        expiresIn: '3h',
    },

    otp: {
        expiryMs: (parseInt(process.env.OTP_EXPIRY_MINUTES, 10) || 10) * 60 * 1000,
    },

    upload: {
        dir: path.resolve(__dirname, 'uploads'),
        maxSizeBytes: 10 * 1024 * 1024, // 10MB
        allowedMimeTypes: [
            'image/jpeg', 'image/jpg', 'image/png',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
    },
};