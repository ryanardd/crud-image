import Joi from "joi";

export const getProductValidation = Joi.number().positive().required();
