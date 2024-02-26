const { Controller, storage } = require("sm-express-server");
const fs = require ("fs");
const Response = require("../Modules/Response");

const getReservationesByDateController = new Controller({method:"GET", name:"Git reservationes by date", path:"/magical-hends/reservationes/:date", storage: storage("./").none()}, (req, res, app) => {
    fs.readFile("./magicalHends/Database/reservationes.json", (err, data) => {
        if(err)
            res.status(5000).send("Error");
        /**
         * @type {{client_id: number,date: string, startTime: string, endTime:string}[]} reservationes
         */
        const reservationes = JSON.parse(data.toString());
        const reservationesFilter = reservationes.filter(res => res.date == req.params.date);
        res.send(new Response(JSON.stringify(reservationesFilter.map(res => ({startTime: res.startTime, endTime: res.endTime})))));
    })    
})

module.exports = getReservationesByDateController;