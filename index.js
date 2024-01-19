const {Server} = require("sm-express-server");
const {getWorld, updateWorld} = require("./My3DView/Controllers/world.js");
const controllers = require("./controllers.js");

const server = new Server(4001, "/");

server.addControllers(controllers);

server.start(() => {
    console.log("server is up on port 4000!");
})
