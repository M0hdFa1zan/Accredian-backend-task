const Referral = require('../models/Referral');
const { sendReferralEmail } = require('../services/emailService');

const createReferral = async (req, res) => {
    try {
        const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;
        if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const referral = new Referral({ referrerName, referrerEmail, refereeName, refereeEmail });
        await referral.save();
        await sendReferralEmail(referrerName, refereeName, refereeEmail);
        res.status(201).json({ message: 'Referral submitted successfully', referral });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createReferral };