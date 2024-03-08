const gitPullController = require("./GitPull.controller.js");
const getGLBModel = require("./My3DView/Controllers/GetGLBModels.controller.js");
const getWorld = require("./My3DView/Controllers/GetWorld.controller.js");
const updateWorld = require("./My3DView/Controllers/UpdateWorld.controller.js");
const utilsControllers = require("./Utils/index.js");
const derekControllers = require("./derek/controllers/index.js");
const getImagesController = require("./interface/Controllers/GetImages.controller.js");
const magicalHendsControllers = require("./magicalHends/Controllers/index.js");

const controllers = [
    getWorld,
    updateWorld,
    getGLBModel,
    gitPullController,

    getImagesController,
    ...magicalHendsControllers,
    ...utilsControllers,
    ...derekControllers,
]

module.exports = controllers;
