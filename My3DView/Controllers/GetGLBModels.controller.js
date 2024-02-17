const { Controller, storage } = require("sm-express-server");
const path = require("path");
const getGLBModel = new Controller({method:"", path: "/3DModels/*", storage: storage("./").none()}, (req, res, app) => {
    res.sendFile(path.join(__dirname, "../assets/3DModels/" + req.params["0"]));
})

module.exports = getGLBModel;