const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const specs = require("../configs/swagger");
const { dbConnectDB } = require("../db/db");
const articlesRoutes = require("../routes/articles-local");

class Server {
  constructor() {
    //Set port
    this.port = process.env.PORT || 8080;
    this.app = express();
    this.articlesPath = "/api/articles";

    this.middlewares();
    this.connectDB();
    this.configDocs();
    this.setRuoters();
  }

  async connectDB() {
    await dbConnectDB();
  }
  middlewares() {
    console.log("midd");
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  configDocs() {
    this.app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
  }

  setRuoters() {
    this.app.use(this.articlesPath, articlesRoutes);
  }

  initalize() {
    this.app.listen(this.port, () =>
      console.log("NCD: listening on port " + this.port)
    );
  }
}

module.exports = Server;
