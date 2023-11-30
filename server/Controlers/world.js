const fs = require("fs");

function getWorld(req, res) {
	fs.readFile("./World/data.json", "utf8", (err, data) => {
		if (err)
			throw err;
		let scene = JSON.parse(data.toString()).find(sc => sc.sceneID == req.params.id);
		if (scene)
			res.send({ data: scene });
		else
			res.send(JSON.stringify({ error: true }))
	})
}

function updateWorld(req, res) {
	fs.readFile("./World/data.json", "utf8", (err, data) => {
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
}
module.exports = { getWorld,updateWorld };