import { Button } from "./ui/button"
import { FormItem } from "./ui/form"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"

export const AddProduct = () => {
    return (
        <div className="container mx-auto mt-6 font-mono font-light">
            <div className="w-[70%] mx-auto ">
                <h2 className="font-bold text-3xl my-6">Add Product</h2>
                <div className="border p-3 rounded-lg">
                    <form className="space-y-8">
                        <FormItem>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" placeholder="Name" />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Picture</Label>
                                <Input className="file:h-10 p-0 file:cursor-pointer text-center" id="picture" type="file" />
                            </div>
                        </FormItem>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}