const {Server} = require("sm-express-server");
const {getWorld, updateWorld} = require("./My3DView/Controllers/world.js");
const controllers = require("./controllers.js");

const server = new Server(4000, "./");

server.addControllers(controllers);

server.start(() => {
	
})

server.app.get("/word/:id", (req,res) => {
    console.log("server is up on port 4000!");
})