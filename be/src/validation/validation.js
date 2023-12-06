import { ResponseError } from "../error/response-error.js";

export const validation = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: true,
        allowUnknown: true,
    });

    if (result.error) {
        throw new ResponseError(400, result.error.message);
    } else {
        return result.value;
    }
};
