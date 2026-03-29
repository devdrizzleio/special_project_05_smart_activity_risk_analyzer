import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: process.env.SWAGGER_TITLE,
      version: process.env.SWAGGER_VERSION,
      description: process.env.SWAGGER_DESCRIPTION
    },
    servers: [
      {
        url: process.env.BASE_URL
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerDocs = (app) => {
  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export { swaggerDocs };