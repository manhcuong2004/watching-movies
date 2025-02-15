const TVseries = require('../../models/tvseries-model');
// const CategoryTvseries = require('../../models/category-tvseries-model');

module.exports.tvseries = async (req, res) => {
    try {
        const tvseries = await TVseries.find().limit(100);

        res.json({ tvseries });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
