const { Router } = require("express");
const { getUsuarios, getUsuario } = require("../controllers/usuarios");
const db = require("../db/connection");
// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);

// router.get('/', (req, res) => {
//     const sql = "SELECT * FROM usuarios";
//     db.query(sql, (err, result) => {
//         res.send(result);
//     })
// });

module.exports = router;