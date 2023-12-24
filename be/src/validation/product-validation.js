import Joi from "joi";

export const getProductValidation = Joi.number().positive().required();

export const addProductValidation = Joi.object({
    name: Joi.string().min(3).required(),
    image: Joi.any().required(),
});

export const updateProductValidation = Joi.object({
    name: Joi.string().min(3),
    image: Joi.any(),
});
