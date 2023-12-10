import { getProductValidation } from "../validation/product-validation.js";
import { validation } from "../validation/validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

const getProduct = async (request) => {
    request = validation(getProductValidation, request);

    return prismaClient.product.findMany();
};

const getProductId = async (request) => {
    const productId = validation(getProductValidation, request);

    const db = await prismaClient.product.findUnique({
        where: {
            id: productId,
        },
        select: {
            name: true,
            image: true,
        },
    });

    if (!db) {
        throw new ResponseError(404, "product is not found");
    }

    return db;
};

const saveProduct = async (request) => {};

const updateProduct = async (request) => {};

const deleteProduct = async (request) => {};

export default {
    getProduct,
    getProductId,
    saveProduct,
    updateProduct,
    deleteProduct,
};
