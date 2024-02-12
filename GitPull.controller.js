const { Controller, storage } = require("sm-express-server");
const { exec } = require("child_process");

const gitPullController = new Controller({method:"GET", name:"git pull", path:"/", storage: storage("./").none()}, (req, res, app) => {
    try {
        exec("git pull", (error, stdout, stderr) => {
            if (error || stderr)
                return res.send(`${error} : ${stderr}`);
            return res.send(stdout);
        })
    } catch (error) {
        res.send("Error!!");
    }
})

module.exports = gitPullController;