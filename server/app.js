import express from "express";
import path from "path";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import multer from "multer";

import { isProduction } from "./config";
import * as routers from "./routes";

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'The News Paper License API', // Title (required)
          version: '1.0.0' // Version (required)
      },
      securityDefinitions: {
          jwt: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header'
          }
      },
      security: [
          { jwt: [] }
      ]
  },
  apis: [  // Path to the API docs
      path.join(__dirname, 'routes/*.js')
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use(path.join(process.env.API_BASE,'/api-docs'), swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(path.join(process.env.API_BASE,'/auth'),  routers.auth);
app.use(path.join(process.env.API_BASE,'/users'),  routers.users);
app.use(path.join(process.env.API_BASE,'/upload'),  routers.upload);

// default
app.get("*", (req, res) => {
  res.send("hello");
});

// error 404
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// error 500
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render("error", {
    message: error.message,
    error: !isProduction ? error : {},
    title: "Oops... error 500",
  });
});

export default app;
