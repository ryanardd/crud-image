import { ResponseError } from "../error/response-error.js";
import { response } from "../response/response.js";
import productService from "../service/product.service.js";
import fs from "fs";

const getProduct = async (req, res, next) => {
    try {
        const result = await productService.getProduct();
        if (result.length === 0) {
            response(404, result, "product is null", res);
        }

        response(200, result, "get all product", res);
    } catch (error) {
        next(error);
    }
};

const getProductId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await productService.getProductId(id);

        response(200, result, "get all product by id", res);
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new ResponseError(404, "please, input field image");
        }

        const name = req.body.name;
        const image = req.file.path;

        if (!name) {
            throw new ResponseError(404, "please, input field name");
        }

        const result = await productService.addProduct({ name, image });

        response(200, result, "data success created", res);
    } catch (error) {
        next(error);
        // untuk menghapus file image dalam directory ketika inputan tidak lengkap
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
    }
};

const updateProduct = async (req, res, next) => {
    try {
    } catch (error) {
        next();
    }
};

const deleteProduct = async (req, res, next) => {
    try {
    } catch (error) {
        next();
    }
};

export default {
    getProduct,
    getProductId,
    addProduct,
    updateProduct,
    deleteProduct,
};
