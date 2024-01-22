import { useEffect, useState } from "react";
import { Button } from "./ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:4000/products')
        console.log(response.data.payload.data)
        setProducts(response.data.payload.data)
    }

    return (

        <div className="container mx-auto mt-6">
            <h2 className="font-sans font-bold text-3xl my-6">Product List</h2>
            <div className="my-3">
                <Button className="bg-blue-600">Add Product</Button>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-slate-400 hover:bg-slate-400">
                        <TableHead className="w-[5%] text-center">No.</TableHead>
                        <TableHead className="w-[40%] text-center">Name</TableHead>
                        <TableHead className="w-[30%]">Image</TableHead>
                        <TableHead className="text-center w-[15%]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium text-center">001</TableCell>
                            <TableCell className="text-center">{product.name}</TableCell>
                            <TableCell >
                                <div className="w-56 h-36">
                                    {console.info(product.image)}
                                    <img src={product.url} alt="image" className="w-full h-full object-contain" loading="lazy" />
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex justify-evenly">
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        /* <form class="w-56 font-sans p-3 rounded-lg" style={{ background: "#1E293B" }}>
                <div className="  ">
                    <img src="src/assets/php.jpg" alt="gambar" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className=" items-baseline mb-4 pb-4 border-b border-slate-200">
                </div>
                <div className=" space-x-4 text-sm font-medium">
                    <div className="flex-auto flex justify-between">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Edit
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Delete
                        </button>
                    </div>
                </div>
            </form> */

    )
}

export { ProductList }