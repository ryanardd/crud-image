export const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        status: statusCode,
        payload: {
            data,
        },
        message: message,
    });
};
