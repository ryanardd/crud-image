import Joi from "joi";

export const getProductValidation = Joi.number().positive().required();

export const addProductValidation = Joi.object({
    name: Joi.string().min(3).required(),
    image: Joi.any().required(),
});
