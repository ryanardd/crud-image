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
        next();
    }
};

const getProductId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await productService.getProduct(id);

        response(200, result, "get all product by id", res);
    } catch (error) {
        next();
    }
};

const addProduct = async (req, res, next) => {
    try {
        // const name = req.body.name;
        // const image = req.file.image;

        const result = await productService.addProduct(req.file.image);
        if (!result) {
            response(404, result, "data kong", res);
        }
        console.log(result);
        response(200, result, "data success created", res);
    } catch (error) {
        next();
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
