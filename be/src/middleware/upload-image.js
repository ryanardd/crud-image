import multer from "multer";

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
