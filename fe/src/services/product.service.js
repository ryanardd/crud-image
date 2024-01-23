import axios from "axios";
import { useNavigate } from "react-router-dom";

export const addProduct = async (product, callback) => {
    const navigate = useNavigate();
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
        navigate("/");
    } catch (error) {
        console.log(error);
        callback(error);
    }
};
