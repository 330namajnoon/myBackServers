const { Server } = require("sm-express-server");


class Controller {
    name = "getApp";
    path = "/app";
    method = "GET";
    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    callback = null;
    constructor(
        propertise = { name: "", path: "", method: "GET" || "POST" || "PUT" || "UPDATE" || "DELETE" },
        /**
        * 
        * @param {import("express").Request} req 
        * @param {import("express").Response} res 
        */
        callback = (req, res) => { }) {
        propertise.name && (this.name = propertise.name);
        propertise.path && (this.path = propertise.path);
        propertise.method && (this.method = propertise.method);
        this.callback = callback;
    }
}

module.exports = Controller;