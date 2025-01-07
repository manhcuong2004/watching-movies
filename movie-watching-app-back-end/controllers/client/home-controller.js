const Movie = require('../../models/movie-model');
const TVseries = require('../../models/tvseries-model');
const Customer = require('../../models/customer-model');
const Faq = require('../../models/faq-model');
const Category = require('../../models/category-model');
const FavouriteMV = require('../../models/favourite-movies.model');


module.exports.home = async (req, res) => {
    try {
        const movies = await Movie.find();
        const tvseries = await TVseries.find();
        const customers = await Customer.find();
        const faq = await Faq.find();
        const categories = await Category.find();
        const favouritemv = await FavouriteMV.find();
        res.json({ movies, tvseries, customers, faq, categories, favouritemv });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};
