const Admin = require('../../models/admin-model');


module.exports.aboutUs = async (req, res) => {
    try {
        const admin = await Admin.find({
            deleted: false
        });
        res.json({ admin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
