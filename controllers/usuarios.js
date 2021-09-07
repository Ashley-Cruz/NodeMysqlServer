const db = require("../db/connection");

const getUsuarios = async(req, res) => {

    try {
        
        // db.query(sql, (err, result) => {
        //     res.send(result);
        // })

        const sql = "SELECT * FROM usuarios";
        const usuarios = await db.execute(sql);

        res.send(usuarios[0]);

    } catch (err) {
        res.status(500).send({message: err.message})
    }

}

const getUsuario = async(req, res) => {

    try {
        const {id} = req.params;
        const sql = `SELECT * FROM usuarios WHERE ID=${id}`;

        // db.query(sql, (err, result) => {
        //     res.send(result);
        // })
        const usuario = await db.execute(sql);

        if(!usuario[0].length){
            return res.send({
                msg: 'No existe ese usuario'
            })
        }

        res.send(usuario[0]);

        
    } catch (err) {
        res.status(500).send({message: err.message})
    }



}

module.exports = {
    getUsuarios,
    getUsuario
}