const { Controller, storage } = require("sm-express-server");
const { exec } = require("child_process");

const gitPullController = new Controller({method:"GET", name:"git pull", path:"/", storage: storage("./").none()}, (req, res, app) => {
    try {
        exec("sudo git pull", (error1, stdout1, stderr1) => {
            if (error1 || stderr1)
                return res.send(`${error1} : ${stderr1}!!!`);
            return res.send(`${stdout1}`);
        })
    } catch (error) {
        res.send("Error!!");
    }
})

module.exports = gitPullController;