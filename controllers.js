const getGLBModel = require("./My3DView/Controllers/GetGLBModels.controller.js");
const getWorld = require("./My3DView/Controllers/GetWorld.controller.js");
const updateWorld = require("./My3DView/Controllers/UpdateWorld.controller.js");

const controllers = [
    getWorld,
    updateWorld,
    getGLBModel
]

module.exports = controllers;