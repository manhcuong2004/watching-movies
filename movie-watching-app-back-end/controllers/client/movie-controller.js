const Movie = require('../../models/movie-model');

module.exports.movie = async (req, res) => {
    try {
        const movies = await Movie.find().limit(100);

        res.json({ movies });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
