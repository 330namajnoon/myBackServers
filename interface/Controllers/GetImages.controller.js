const { Controller, storage } = require("sm-express-server");
const { exec } = require("child_process");

const getImagesController = new Controller({method:"GET", name: "Get Images", path: "/images", storage: storage("./").none()}, (req, res, app) => {
    let path = "./images";
    try {
        exec(`find ${path} -type f \\( -iname "*.jpg" -o -iname "*.png" \\)`, (error, stdout, stderr) => {
            if (error || stderr)
                return res.send(`${error} ${stderr}`);
            res.send(stdout.split("\n").filter(list => list).join(" , "));
        })
    } catch (error) {
        res.send(error);
    }
})

module.exports = getImagesController;