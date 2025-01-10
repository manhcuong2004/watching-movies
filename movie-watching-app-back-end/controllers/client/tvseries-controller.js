const TVseries = require('../../models/tvseries-model');
const Category = require('../../models/category-model');

module.exports.tvseries = async (req, res) => {
    try {
        const tvseries = await TVseries.find({
            deleted: false
        });
        const categories = await Category.find({
            deleted: false
        });
        res.json(tvseries, categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
