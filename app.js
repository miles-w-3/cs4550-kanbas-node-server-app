import express from 'express';
import session from "express-session";
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors";

dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};


if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(
  session(sessionOptions)
);


ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app)
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);