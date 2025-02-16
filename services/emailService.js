const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendReferralEmail = async (referrerName, refereeName, refereeEmail) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: refereeEmail,
        subject: 'Referral Invitation',
        text: `Hello ${refereeName},\n\n${referrerName} has referred you to our platform! Join now to take advantage of exclusive benefits.\n\nBest regards,\nTeam`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Referral email sent successfully');
    } catch (error) {
        console.error('Error sending referral email:', error);
    }
};

module.exports = { sendReferralEmail };