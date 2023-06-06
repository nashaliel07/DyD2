const swaggerJsDoc = require("swagger-jsdoc");
const port = process.env.PORT || 8080;

const options = {
  openapi: "3.0.0",
  swaggerDefinition: {
    info: {
      title: "Article Api - CERTUS",
      version: "0.0.1",
      description: "Demo Api for sales",
    },
    servers: [
      {
        url: "http://localhost:" + port,
      },
    ],
  },
  apis: ["../routes/articles.js"],
};

const specs = swaggerJsDoc(options);

module.exports = specs;
