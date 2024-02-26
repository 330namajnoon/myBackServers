const { Controller, storage } = require("sm-express-server");
const { createToken } = require("./createTokenWithBase");

const createTokenController = new Controller({method:"GET", name:"Create token", path:"/encode", storage: storage("./").none()}, (req, res, app) => {
    res.send(createToken(req.query.text, req.query.base));
})

module.exports = createTokenController;