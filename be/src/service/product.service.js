import {
    addProductValidation,
    getProductValidation,
    updateProductValidation,
} from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import fs from "fs";

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

const updateProduct = async (id, request) => {
    const user = validate(getProductValidation, id);

    const data = await prismaClient.product.findFirst({
        where: {
            id: user,
        },
    });

    // console.log(data.image);

    if (!data) {
        throw new ResponseError(404, "id is not found");
    }

    request = validate(updateProductValidation, request);

    const update = {};

    if (request.name) {
        update.name = request.name;
    }

    if (request.image) {
        update.image = request.image;
    }

    // hapus gambar lama ketika akan di upadate
    if (data.image !== update.image) {
        fs.unlinkSync(data.image);
    }

    return prismaClient.product.update({
        where: {
            id: user,
        },
        data: {
            name: update.name,
            image: update.image,
            url: update.image,
            updatedAt: new Date(),
        },
        select: {
            name: true,
            url: true,
        },
    });
};

const deleteProduct = async (request) => {};

export default {
    getProduct,
    getProductId,
    addProduct,
    updateProduct,
    deleteProduct,
};
