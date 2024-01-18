const fs = require("fs");
const {Controller, storage} = require("sm-express-server");

const getWorld = new Controller({method: "GET", name: "get_world", path: "/world/:id", storage: storage().single("file")}, (req, res, app) => {
    fs.readFile("./My3DView/World/data.json", "utf8", (err, data) => {
		if (err)
			throw err;
		let scene = JSON.parse(data.toString()).find(sc => sc.sceneID == req.params.id);
		if (scene)
			res.send({ data: scene });
		else
			res.send(JSON.stringify({ error: true }))
	})
})

module.exports = getWorld;