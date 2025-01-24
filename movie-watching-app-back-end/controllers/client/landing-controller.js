const Movie = require('../../models/movie-model')
const TVseries = require('../../models/tvseries-model')
const FAQ = require('../../models/faq-model')

module.exports.landing = async (req, res) => {
    try {
        const movie = await Movie.find();
        const tvseries = await TVseries.find();
        const faq = await FAQ.find();
        res.json({ movie, tvseries, faq })
    } catch (error) {
        res.status(500).json({ message: err.message });
    }

}