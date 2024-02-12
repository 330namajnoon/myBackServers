const { Controller, storage } = require("sm-express-server");
const { exec } = require("child_process");

const gitPullController = new Controller({method:"GET", name:"git pull", path:"/", storage: storage("./").none()}, (req, res, app) => {
    try {
        exec("git pull", (error1, stdout1, stderr1) => {
            if (error1 || stderr1)
                return res.send(`${error1} : ${stderr1}`);
            exec("sudo pm2 restart index.js", (error2, stdout2, stderr2) => {
                if (error2 || stderr2)
                    return res.send(`${error2} : ${stderr2}`);
                return res.send(`${stdout1} \n:\n ${stdout2}`);
            })
        })
    } catch (error) {
        res.send("Error!!");
    }
})

module.exports = gitPullController;