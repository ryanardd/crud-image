import axios from "axios";

export const getProduct = async (callback) => {
    await axios
        .get("http://localhost:4000/products")
        .then((res) => {
            callback(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProductById = async (id, callback) => {
    await axios.get(`http://localhost:4000/products/${id}`).then((res) => {
        callback(res.data);
    });
};

export const addProduct = async (product) => {
    await axios.post("http://localhost:4000/products", product, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateProducts = async (id, update, callback) => {
    await axios
        .patch(`http://localhost:4000/products/${id}`, update, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            callback(res.data);
        });
};

export const deleteProduct = async (id, callback) => {
    await axios
        .delete(`http://localhost:4000/products/${id}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
