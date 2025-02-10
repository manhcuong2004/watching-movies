const Customer = require('../../models/customer-model');

module.exports.myProfile = async (req, res) => {
    try {

        const customer = await Customer.find({
            deleted: false
        }).select("-password", "-username");
        res.json({ customer });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
