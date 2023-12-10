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

const saveProduct = async (req, res, next) => {
    try {
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
    saveProduct,
    updateProduct,
    deleteProduct,
};
