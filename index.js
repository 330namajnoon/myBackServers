const {Server} = require("sm-express-server");
const {getWorld, updateWorld} = require("./My3DView/Controllers/world.js");
const controllers = require("./controllers.js");
const path = require("path");
const express = require("express");

const server = new Server(4001, "/");

server.app.use("/magicalHends", express.static(path.join(__dirname, "./magicalHends/dist/")));
server.app.get('/magicalHends/*', (req, res) => {
    res.sendFile(path.join(__dirname, './magicalHends/dist', 'index.html'));
});

server.addControllers(controllers);

server.start(() => {
    console.log("server is up on port 4001!");
})
