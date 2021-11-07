const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerJsondoc = require("swagger-jsdoc");
const musicsRoutes = require('./routes/musicsRoutes.js');
require('dotenv').config();

const app = express();

//Set Port
let port = process.env.PORT || 3636;

//Set Swagger
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "18521123 - Assignment 4",
        version: "1.0.0",
        description:
          "Document for Music Management API",
        contact: {
          name: "Bao Nam",
          url: "https://github.com/T0nyBlue",
          email: "18521123@gm.uit.edu.vn"
        }
      },
      // servers: [
      //   {
      //     url: "http://localhost:3636/"
      //   }
      // ]
    },
    apis: ["./api-method-docs.js"]
}
const swaggerDocs = swaggerJsondoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Body Parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to music management API!');
});

musicsRoutes(app);

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connect to DB')
);

//Listen to the server
app.listen(port, () => console.log(`Server running on port: ${port}`));
