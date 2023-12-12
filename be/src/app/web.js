import express from "express";
// import fileUpload from "express-fileupload";
import cors from "cors";
import { route } from "../router/route.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import multer from "multer";
import { fileFilter, fileStorage } from "../middleware/upload-image.js";
import bodyParser from "body-parser";

const web = express();

web.use(express.json());
web.use(cors());
// web.use(fileUpload());
web.use(bodyParser.json());
web.use(route);
web.use(errorMiddleware);
web.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));

export { web };
