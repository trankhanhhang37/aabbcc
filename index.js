const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors')
// const { initRedis } = require('./config/redis');

const Server = async () => {
    dotenv.config();
    port = process.env.PORT || 3001;
    // initRedis()
    const app = express();
    app.use(cors())
    app.use(bodyParser.json())
    app.use(morgan('dev'))

    mongoose.connect(`${process.env.MONGO_DB}`)
        .then(() => {
            console.log('Connect success!')
        })
        .catch((err) => {
            console.log(err)
        })


    routes(app);
    app.use((error, req, res, next) => {

        const statusCode = error.status || 500
        return res.status(statusCode).json(
            {
                status: 'error',
                code: statusCode,
                message: error.message || 'Internal Server Error'
            }
        )

    })

    app.listen(port, () => {
        console.log('Server is running in port', + port)
    })
}

Server()

