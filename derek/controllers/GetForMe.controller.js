const { Controller, storage } = require("sm-express-server");

const getForMeController = new Controller({ method: "GET", name: "", path: "/derek/forme", storage: storage("/").none() }, (req, res, app) => {
	res.send("kir khar");
});

module.exports = getForMeController;
