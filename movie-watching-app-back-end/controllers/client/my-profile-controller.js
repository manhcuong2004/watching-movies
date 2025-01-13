const Customer = require('../../models/customer-model');
// const FavouriteMV = require('../../models/favourite-movies-model');

module.exports.myProfile = async (req, res) => {
    try {
        // const favouriteMV = await FavouriteMV.find({
        //     deleted: false
        // })
        const customer = await Customer.find({
            deleted: false
        }).select("-password", "-username");
        res.json({ customer });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
