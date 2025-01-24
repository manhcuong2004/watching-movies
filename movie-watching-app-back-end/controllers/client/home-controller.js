const Movie = require('../../models/movie-model');
const TVseries = require('../../models/tvseries-model');
const Category = require('../../models/category-model');


module.exports.home = async (req, res) => {
    try {
        const movies = await Movie.find();
        const tvseries = await TVseries.find();
        const category = await Category.find();
        res.json({ movies, tvseries, category });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
