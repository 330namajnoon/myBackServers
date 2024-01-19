const { Controller, storage } = require("sm-express-server");
const path = require("path");
const getGLBModel = new Controller({method:"", path: "/My3DView/*", storage: storage("./").none()}, (req, res, app) => {
    res.sendFile(path.join(__dirname, "../" + req.params["0"]));
})

module.exports = getGLBModel;