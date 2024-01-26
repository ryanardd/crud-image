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
    return prismaClient.product.findMany({});
};

const getProductId = async (request) => {
    const productId = validate(getProductValidation, request);

    const db = await prismaClient.product.findUnique({
        where: {
            id: productId,
        },
        select: {
            name: true,
            image: true,
            url: true,
        },
    });

    if (!db) {
        throw new ResponseError(404, "product is not found");
    }

    return db;
};

const addProduct = async (data, req) => {
    const request = validate(addProductValidation, data);

    const created = await prismaClient.product.create({
        data: {
            name: data.name,
            image: data.image,
            url: req ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}` : null,
        },
        select: {
            name: true,
            image: true,
            url: true,
        },
    });

    return created;
};

const updateProduct = async (id, request, req) => {
    const user = validate(getProductValidation, id);

    const data = await prismaClient.product.findFirst({
        where: {
            id: user,
        },
    });

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
        update.url = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        if (data.image !== update.image) {
            fs.unlinkSync(data.image);
        }
    } else {
        update.url = data.url;
        update.image = data.image;
    }

    return prismaClient.product.update({
        where: {
            id: user,
        },
        data: {
            name: update.name,
            image: update.image,
            url: update.url,
            updatedAt: new Date(),
        },
        select: {
            name: true,
            image: true,
            url: true,
        },
    });
};

const deleteProduct = async (request) => {
    request = validate(getProductValidation, request);

    const id = await prismaClient.product.findFirst({
        where: {
            id: request,
        },
    });

    if (!id) {
        throw new ResponseError(404, "id is not found");
    }

    fs.unlinkSync(id.image);

    return prismaClient.product.delete({
        where: {
            id: request,
        },
    });
};

export default {
    getProduct,
    getProductId,
    addProduct,
    updateProduct,
    deleteProduct,
};
