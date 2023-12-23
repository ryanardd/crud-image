import { addProductValidation, getProductValidation } from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

const getProduct = async (request) => {
    return prismaClient.product.findMany({
        select: {
            name: true,
            id: true,
        },
    });
};

const getProductId = async (request) => {
    const productId = validate(getProductValidation, request);

    const db = await prismaClient.product.findUnique({
        where: {
            id: productId,
        },
        select: {
            name: true,
            // image: true,
        },
    });

    if (!db) {
        throw new ResponseError(404, "product is not found");
    }

    return db;
};

const addProduct = async (data) => {
    const request = validate(addProductValidation, data);

    const created = await prismaClient.product.create({
        data: {
            name: data.name,
            image: data.image,
            url: data.image,
        },
        select: {
            name: true,
            url: true,
        },
    });

    return created;
};

const updateProduct = async (request) => {};

const deleteProduct = async (request) => {};

export default {
    getProduct,
    getProductId,
    addProduct,
    updateProduct,
    deleteProduct,
};
