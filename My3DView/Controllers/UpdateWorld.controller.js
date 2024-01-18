const { Controller, storage } = require("sm-express-server");

const updateWorld = new Controller({method: "POST", name: "get_world", path: "/world/:id", storage: storage().none()}, (req, res, app) => {
    fs.readFile("./My3DView/World/data.json", "utf8", (err, data) => {
		if (err)
			throw err;
		let scene = JSON.parse(req.body.scene);
		let scenes = JSON.parse(data.toString());
		let newscenes = scenes.map(scn => {
			if (scn.sceneID == scene.sceneID) {
				scn = scene;
			}
			return scn;
		})
		fs.writeFile("./World/data.json",JSON.stringify(newscenes) ,(err) => {
			if (err)
				throw err
			res.send({error: null});
		})
		
	})
})

module.exports = updateWorld;