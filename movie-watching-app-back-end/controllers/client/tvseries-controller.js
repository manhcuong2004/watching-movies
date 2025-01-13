const TVseries = require('../../models/tvseries-model');
const Category = require('../../models/category-model');
const CategoryTvseries = require('../../models/category-tvseries-model');

module.exports.tvseries = async (req, res) => {
    try {
        const tvseries = await TVseries.find({
            deleted: false
        });
        const categories = await Category.find({
            deleted: false
        });
        const categoryTv = await CategoryTvseries.find({
            deleted: false
        });
        res.json(tvseries, categories, categoryTv);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
