import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { route } from "../router/route.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

const web = express();

web.use(express.json());
web.use(cors());
web.use(fileUpload());
web.use(route);

web.use(errorMiddleware);

export { web };
