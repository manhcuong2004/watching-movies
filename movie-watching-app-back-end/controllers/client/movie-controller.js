const Movie = require('../../models/movie-model');
const Category = require('../../models/category-model');

module.exports.movie = async (req, res) => {
    try {
        const movies = await Movie.find();
        const category = await Category.find();

        res.json({ movies, category });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
