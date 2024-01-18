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


const ProductList = () => {
    return (

        <div className="container mx-auto mt-6">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-slate-400 hover:bg-slate-400">
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">001</TableCell>
                        <TableCell>Barang Jasa</TableCell>
                        <TableCell >
                            <div className="w-56 h-36">
                                <img src="src/assets/php.jpg" alt="gambar" className="w-full h-full object-contain" loading="lazy" />
                            </div>
                        </TableCell>
                        <TableCell className="text-center w-1/6 ">
                            <div className="flex justify-evenly">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">002</TableCell>
                        <TableCell>Barang Baru</TableCell>
                        <TableCell >
                            <div className="w-56 h-36">
                                <img src="src/assets/live-your-dream.jpg" alt="gambar" className="w-full h-full object-contain" loading="lazy" />
                            </div>
                        </TableCell>
                        <TableCell className="text-center w-1/6 ">
                            <div className="flex justify-evenly">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">003</TableCell>
                        <TableCell>Barang Lama</TableCell>
                        <TableCell>
                            <div className="w-56 h-36">
                                <img src="src/assets/coding.jpg" alt="gambar" className="w-full h-full object-contain" loading="lazy" />
                            </div>
                        </TableCell>
                        <TableCell className="text-center w-1/6 ">
                            <div className="flex justify-evenly">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">004</TableCell>
                        <TableCell>Barang Baru</TableCell>
                        <TableCell >
                            <div className="w-56 h-36">
                                <img src="src/assets/live-your-dream.jpg" alt="gambar" className="w-full h-full object-contain" loading="lazy" />
                            </div>
                        </TableCell>
                        <TableCell className="text-center w-1/6 ">
                            <div className="flex justify-evenly">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">005</TableCell>
                        <TableCell>Barang Baru</TableCell>
                        <TableCell >
                            <div className="w-56 h-36">
                                <img src="src/assets/live-your-dream.jpg" alt="gambar" className="w-full h-full object-contain" loading="lazy" />
                            </div>
                        </TableCell>
                        <TableCell className="text-center w-1/6 ">
                            <div className="flex justify-evenly">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
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