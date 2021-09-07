const dotenv = require('dotenv');
const Server = require('./models/server');

dotenv.config();

const server = new Server();
server.listen();



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const mysql = require('mysql2');
// const cors = require('cors');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'node'
// });

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
// app.use(cors());

// app.get('/api/get', (req, res) => {
//     const sql = "SELECT * FROM usuarios";
//     db.query(sql, (err, result) => {
//         res.send(result);
//     })
// })

// app.listen(8000, () => {
//     console.log('Live')
// })

