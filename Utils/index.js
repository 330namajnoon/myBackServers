const createTokenController = require("./CreateToken.controller");
const unCodeTokenController = require("./UnCodeToken.controller");

const utilsControllers = [createTokenController, unCodeTokenController];

module.exports = utilsControllers;