const {Server} = require("sm-express-server");
const {getWorld, updateWorld} = require("./My3DView/Controllers/world.js");
const controllers = require("./controllers.js");
const path = require("path");
const express = require("express");
const hostName = "calimocho.duckdns.org";
const bodyParser = require("body-parser");
const fs = require("fs");

const server = new Server(4003, "/", [], {
    key: fs.readFileSync("ssl/private.key"),
    cert: fs.readFileSync("ssl/certificate.crt"),
    ca: fs.readFileSync("ssl/ca_bundle.crt"),
});

server.app.use(bodyParser.urlencoded({extended: false}));
server.app.use(bodyParser.json());

server.app.use("/magicalHends", express.static(path.join(__dirname, "./magicalHends/dist/")));
server.app.get('/magicalHends/*', (req, res) => {
    res.sendFile(path.join(__dirname, './magicalHends/dist', 'index.html'));
});

server.addControllers(controllers);

server.start(() => {
    console.log("server is up on port 4001!");
})
