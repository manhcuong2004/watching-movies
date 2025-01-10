const Movie = require('../../models/movie-model');
const TVseries = require('../../models/tvseries-model');


module.exports.home = async (req, res) => {
    try {
        const movies = await Movie.find({
            deleted: false
        });
        const tvseries = await TVseries.find({
            deleted: false
        });

        res.json({ movies, tvseries });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
