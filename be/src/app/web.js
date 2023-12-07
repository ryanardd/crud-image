import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { route } from "../router/route.js";

const web = express();

web.use(express.json());
web.use(cors());
web.use(fileUpload());
web.use(route);

export { web };
