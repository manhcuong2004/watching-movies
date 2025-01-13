const Movie = require('../../models/movie-model');
const Category = require('../../models/category-model');
const CategoryMovie = require('../../models/category-movie-model');

module.exports.movie = async (req, res) => {
    try {
        const movies = await Movie.find({
            deleted: false
        });
        const category = await Category.find({
            deleted: false
        });
        const categoryMv = await CategoryMovie.find({
            deleted: false
        });
        res.json({ movies, category, categoryMv });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
