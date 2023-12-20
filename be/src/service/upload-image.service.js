import multer from "multer";
import { ResponseError } from "../error/response-error.js";
export const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/image");
    },

    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + "-" + file.originalname);
    },
});

export const fileFilter = (req, file, callback) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

// COBA

// const upload = multer({
//     storage: fileStorage,
//     fileFilter: fileFilter,
//     limits: {
//         fileSize: 5 * 1024 * 1024,
//     },
// }).single("image");

// export const handleImageUpload = async (req, res) => {
//     return new Promise((resolve, reject) => {
//         upload(req, res, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(err.file);
//             }
//         });
//     });
// };
