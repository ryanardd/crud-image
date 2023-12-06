import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

const web = express();

web.use(express.json());
web.use(cors());
web.use(fileUpload());

export { web };
