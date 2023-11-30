const {Server} = require("./Server.js");
const {getWorld, updateWorld} = require("./Controlers/world.js");

const server = new Server(4000, "./");

server.setControls([
    [
        "GET",
        "/world/:id",
        getWorld,
        null
    ],
    [
        "POST",
        "/update_world",
        updateWorld,
        null
    ]

])

server.start(() => {
	
})

server.app.get("/word/:id", (req,res) => {
    
})