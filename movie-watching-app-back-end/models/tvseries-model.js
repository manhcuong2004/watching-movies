const mongoose = require("mongoose");

const TVseriesSchema = mongoose.Schema({
    tmdb: {
        type: { type: String, required: true },
        id: { type: String, required: true },
        season: { type: Number, required: true },
        vote_average: { type: Number, default: 0 },
        vote_count: { type: Number, default: 0 },
    },
    imdb: {
        id: { type: String, default: null },
    },
    created: {
        time: { type: Date, required: true },
    },
    modified: {
        time: { type: Date, required: true },
    },
    _id: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    origin_name: { type: String, required: true },
    content: { type: String },
    type: { type: String, required: true },
    status: { type: String, required: true },
    poster_url: { type: String, required: true },
    thumb_url: { type: String, required: true },
    is_copyright: { type: Boolean, default: false },
    sub_docquyen: { type: Boolean, default: false },
    chieurap: { type: Boolean, default: false },
    trailer_url: { type: String, default: null },
    time: { type: String, required: true },
    episode_current: { type: String, required: true },
    episode_total: { type: String },
    quality: { type: String },
    lang: { type: String, required: true },
    notify: { type: String, default: null },
    showtimes: { type: String, default: null },
    year: { type: Number, required: true },
    view: { type: Number, default: 0 },
    actor: [{ type: String }],
    director: [{ type: String }],
    category: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            slug: { type: String, required: true },
        },
    ],
    country: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            slug: { type: String, required: true },
        },
    ],
    episodes: [
        {
            server_name: { type: String, required: true },
            server_data: [
                {
                    name: { type: String, required: true },
                    slug: { type: String, required: true },
                    filename: { type: String, required: true },
                    link_embed: { type: String, required: true },
                    link_m3u8: { type: String, required: true },
                },
            ],
        },
    ],
});

const TVseries = mongoose.model('TVseries', TVseriesSchema, 'tvSeries');

module.exports = TVseries;