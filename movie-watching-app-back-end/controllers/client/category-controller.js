const Category = require('../../models/category-model');


module.exports.category = async (req, res) => {
    try {
        const category = await Category.find();

        res.json({ category });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
