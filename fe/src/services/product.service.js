import axios from "axios";

export const addProduct = async (product, callback) => {
    try {
        await axios
            .post("http://localhost:4000/products", product, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                callback(res.data);
            });
    } catch (error) {
        console.log(error);
        callback(error);
    }
};
