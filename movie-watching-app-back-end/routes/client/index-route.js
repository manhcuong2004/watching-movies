const homeRouter = require('./home-route');
const movieRouter = require('./movie-route');

module.exports = (app) => {
    app.use('/', homeRouter);
    app.use('/movie', movieRouter);
}