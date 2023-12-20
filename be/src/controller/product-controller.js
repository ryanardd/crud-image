import { ResponseError } from "../error/response-error.js";
import { response } from "../response/response.js";
import productService from "../service/product.service.js";

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

        const result = await productService.getProduct(id);

        response(200, result, "get all product by id", res);
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const name = req.body.name;
        const image = req.file.path;

        if (!name || !image) {
            throw new ResponseError(404, "please input data field");
        }

        const result = await productService.addProduct(name, image);

        response(200, result, "data success created", res);
    } catch (error) {
        next(error);
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
