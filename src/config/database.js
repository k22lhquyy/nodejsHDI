require('dotenv').config()
const mongoose = require("mongoose")

// const mysql = require("mysql2/promise")

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   });

const connection = async () => {
    try {
        console.log("connection success")
        await mongoose.connect('mongodb://root:123456@localhost:27017', {
            dbName: "HoiDanIT"
        });
    } catch (error) {
        handleError(error);
    }
}

module.exports = connection;