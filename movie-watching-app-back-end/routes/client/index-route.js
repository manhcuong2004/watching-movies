const systemConfig = require('../../config/system')


const movieRouter = require('./movie-route');
const tvseriesRouter = require('./tvseries-route');
const faqRouter = require('./faq-route');
const myProfileRouter = require('./my-profile-route');
const aboutUs = require('./about-us-route');
const category = require('./category-route');
const user = require('./user-route');

module.exports = (app) => {
    const PATH_API = systemConfig.prefixAPI;
    app.use(PATH_API + '/movie', movieRouter);
    app.use(PATH_API + '/tvseries', tvseriesRouter);
    app.use(PATH_API + '/faq', faqRouter);
    app.use(PATH_API + '/my-profile', myProfileRouter);
    app.use(PATH_API + '/about-us', aboutUs);
    app.use(PATH_API + '/category', category);
    app.use(PATH_API + '/user', user);

}