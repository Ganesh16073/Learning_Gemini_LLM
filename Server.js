const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.on("listening", () => {
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
