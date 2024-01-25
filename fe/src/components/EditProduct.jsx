import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { FormItem } from "./ui/form"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"
import { useParams } from "react-router-dom";
import { getProductById, updateProducts } from "../services/product.service"

export const EditProduct = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [failed, setFailed] = useState("")
    const { id } = useParams();

    useEffect(() => {
        getProductId()
    }, [])

    const getProductId = async () => {
        await getProductById(id, ((event) => {
            setName(event.payload.data.name)
            setImage(event.payload.data.image)
            setPreview(event.payload.data.url)
        }));
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image)
        setPreview(URL.createObjectURL(image))
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        try {
            await updateProducts(id, formData, ((res) => {
                console.log(res)
            }))
        } catch (error) {
            setFailed(error.response.data.errors)
        }
    }


    return (
        <div className="container mx-auto mt-6 font-mono font-light">
            <div className="w-[70%] mx-auto ">
                <h2 className="font-bold text-3xl my-6">Edit Product</h2>
                <div className="border p-3 rounded-lg">
                    <div className="h-10">
                        {failed && <p className="text-red-600">{failed}</p>}
                    </div>
                    <form className="space-y-8" onSubmit={updateProduct}>
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
                                    {preview && (
                                        <img src={preview} alt="preview image" className="w-full h-full object-cover" />
                                    )}
                                </div>
                            </div>
                        </FormItem>
                        <Button type="submit">Edit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}