const Movie = require('../../models/movie-model');
const TVseries = require('../../models/tvseries-model');
const Category = require('../../models/category-model');


module.exports.home = async (req, res) => {
    try {
        const movies = await Movie.find({
            deleted: false
        });
        const tvseries = await TVseries.find({
            deleted: false
        });
        const category = await Category.find({
            deleted: false
        });

        res.json({ movies, tvseries, category });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
