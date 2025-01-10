const FAQ = require('../../models/faq-model');


module.exports.faq = async (req, res) => {
    try {
        const faq = await FAQ.find({
            deleted: false
        });

        res.json({ faq });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
