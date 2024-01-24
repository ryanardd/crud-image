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
import { deleteProduct, getProduct } from "../services/product.service";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        await getProduct((e) => {
            setProducts(e.payload.data)
        })
    }

    const deleteProducts = async (id) => {
        await deleteProduct(id, () => {
            getProducts();
        })
    }

    return (

        <div className="container w-[85%] mx-auto mt-6 font-mono">
            <h2 className="font-sans font-bold text-3xl my-6">Product List</h2>
            <div className="my-3">
                <Link to="/add">
                    <Button className="bg-blue-600">Add Product</Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="bg-slate-400 hover:bg-slate-400 ">
                        <TableHead className="w-[5%] text-center">No.</TableHead>
                        <TableHead className="w-[40%] text-center">Name</TableHead>
                        <TableHead className="w-[30%]">Image</TableHead>
                        <TableHead className="text-center w-[15%]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium text-center">{index + 1}</TableCell>
                            <TableCell className="text-center">{product.name}</TableCell>
                            <TableCell >
                                <div className="w-36 h-16">
                                    <Link to={product.url} target="_blank">
                                        <img src={product.url} alt="image" className="w-full h-full object-contain" loading="lazy" />
                                    </Link>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex justify-evenly">
                                    <Button>Edit</Button>
                                    <Button onClick={() => deleteProducts(product.id)}>Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export { ProductList }