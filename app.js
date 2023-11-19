import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import dotenv from 'dotenv';



const app = express()
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);