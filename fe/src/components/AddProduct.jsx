import { useState } from "react"
import { Button } from "./ui/button"
import { FormItem } from "./ui/form"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"
import { addProduct } from "../services/product.service"
import { useNavigate } from "react-router-dom"

export const AddProduct = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [failed, setFailed] = useState("")

    const navigate = useNavigate()

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image))
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", image)
        try {
            addProduct(formData, (status, res) => {
                if (status === 404) {
                    console.log(res.data)
                } else {
                    navigate('/')
                }
            });
        } catch (error) {
            callback(error);
        }

    }

    return (
        <div className="container mx-auto mt-6 font-mono font-light">
            <div className="w-[70%] mx-auto ">
                <h2 className="font-bold text-3xl my-6">Add Product</h2>
                <p></p>
                <div className="border p-3 rounded-lg">
                    <form className="space-y-8" onSubmit={saveProduct}>
                        <FormItem>
                            <Label htmlFor="name">Product Name</Label>
                            <Input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <div className="flex gap-2">
                                <div className="grid w-full max-w-sm  gap-1.5">
                                    <Label htmlFor="picture">Picture</Label>
                                    <Input className="file:h-10 p-0 file:cursor-pointer text-center" id="picture" type="file" onChange={loadImage} />
                                    <br />
                                    <br />
                                </div>
                                <div className="grid border w-32 h-32">
                                    {preview ? (
                                        <img src={preview} alt="preview image" className="w-full h-full object-cover" loading="lazy" />
                                    ) : ("")}
                                </div>
                            </div>
                        </FormItem>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}