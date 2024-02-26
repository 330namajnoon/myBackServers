const { Controller, storage } = require("sm-express-server");
const { createToken, unCodeToken } = require("./createTokenWithBase");

const unCodeTokenController = new Controller({method:"GET", name:"Un code token", path:"/decode", storage: storage("./").none()}, (req, res, app) => {
    res.send(unCodeToken(req.query.text, req.query.base));
})

module.exports = unCodeTokenController;