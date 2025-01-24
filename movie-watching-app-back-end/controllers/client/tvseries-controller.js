const TVseries = require('../../models/tvseries-model');
const Category = require('../../models/category-model');
// const CategoryTvseries = require('../../models/category-tvseries-model');

module.exports.tvseries = async (req, res) => {
    try {
        const tvseries = await TVseries.find();
        const category = await Category.find();

        res.json({ tvseries, category });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
