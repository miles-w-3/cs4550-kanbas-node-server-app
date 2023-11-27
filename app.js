import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import dotenv from 'dotenv'

import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);



app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app)
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);