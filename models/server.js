const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require ('../db/connection');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            usuarios: '/api/get',
        }

        //Métodos iniciales
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        //Carpeta pública
        // this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.paths.usuarios, require('../routes/usuarios'));

        // this.app.use(this.paths.usuarios, (req, res) => {
        //         const sql = "SELECT * FROM usuarios";
        //         db.query(sql, (err, result) => {
        //             res.send(result);
        //         })
        // });

        // this.app.get('/api/get', (req, res) => {
        //     const sql = "SELECT * FROM usuarios";
        //     db.query(sql, (err, result) => {
        //         res.send(result);
        //     })
        // })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        })
    }

}

module.exports = Server;