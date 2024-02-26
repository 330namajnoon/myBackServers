const getCategoriesController = require("./GetCategories.controller");
const getImagesController = require("./GetImages.controller");
const getReservationesByDateController = require("./GetReservationesByDate.controller");
const getServicesController = require("./GetServices.controller");
const getStripeSessionController = require("./GetStripeSesion.controller");
const postReservationController = require("./PostReservation.controller copy");

const magicalHendsControllers = [
    getServicesController,
    getCategoriesController,
    getImagesController,
    getReservationesByDateController,
    postReservationController,
    getStripeSessionController
];

module.exports = magicalHendsControllers