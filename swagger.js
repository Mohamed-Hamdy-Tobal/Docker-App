import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book API",
      version: "1.0.0",
      description: "API for managing books",
    },
    servers: [
      {
        url: "http://localhost:4000/api",
        description: "Local Server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/docs/schemas.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
