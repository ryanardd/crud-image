import express from "express";
import cors from "cors";
import { route } from "../router/route.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import multer from "multer";
import { fileFilter, fileStorage } from "../service/upload-image.service.js";
import bodyParser from "body-parser";

export const web = express();
web.use(cors());
web.use(express.json());
web.use(bodyParser.json());
web.use(
    multer({
        storage: fileStorage,
        fileFilter: fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 },
    }).single("image")
);
web.use(express.static("public"));
web.use(route);
web.use(errorMiddleware);
