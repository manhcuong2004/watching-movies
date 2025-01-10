const Movie = require('../../models/movie-model')
const TVseries = require('../../models/tvseries-model')
const FAQ = require('../../models/faq-model')

module.exports.landing = async (req, res) => {
    try {
        const movie = await Movie.find({
            delete: false
        })
        const tvseries = await TVseries.find({
            delete: false
        })
        const faq = await FAQ.find({
            delete: false
        })
        res.json({ movie, tvseries, faq })
    } catch (error) {
        res.status(500).json({ message: err.message });
    }

}