const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv").config();
const UserRoute= require('./routes/UserRoute');

class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(cors({
      origin: 'http://localhost:5173'  // Only allow requests from this frontend
    }));
    UserRoute.enableroutes(this.app);
    this.app.on("listen", () => {
      console.log("Server is running and listening for requests..... ");
    });
  }

  start() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
}
const mainServer = new Server();
mainServer.start();
