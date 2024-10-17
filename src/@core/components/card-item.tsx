import Image from "next/image"
import { TProduct } from "../types/products/index.types"
import ProductsPage from "@/app/products/page"
import Link from "next/link";

const CardItem = ({ product }: { product: TProduct }) => {
    const truncatedDescription = product.description.length > 60 ? product.description.substring(0, 60) + '...' : product.description;
    const truncatedTitle = product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title;

    return (
        <div className="max-w-sm rounded-nhc overflow-hidden shadow-product-card bg-white p-2 pb-4 m-auto mb-6">
            <Image className="h-[150px] w-full object-cover" width={250} height={150} src={product.thumbnail} alt={product.thumbnail} />
            <div className="">
                <h2 className="font-semibold text-xl text-gray-800 my-3">{truncatedTitle}</h2>
                <p className="text-gray-500 mt-2">{truncatedDescription}</p>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-700">Price : <span className="text-blue-600">549$</span></p>
                    <Link href={'/products/'+product.id} className="bg-nhc text-white text-sm px-4 py-2 rounded-md">More</Link>
                </div>
            </div>
        </div>
    )
}


export default CardItem