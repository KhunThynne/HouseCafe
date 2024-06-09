


import ImageProduct from "@/components/Products/ImageProduct";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface ProductBoxType {
    children?: ReactNode,
    product: {
        id: Number,
        name: String,
        price: String
    }
}


export default function ProductBox({ children, product }: ProductBoxType) {
    const [state, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (

        <div className=" w-full">
            <Link href={{
                pathname: `/product/${product.id}`,
                //  query: { name: 'test' },
            }}>
                <div className="relative">
                    <ImageProduct height="350px" />
                    <div className=" h-full  p-3">
                        <h3> {product.name} </h3>
                        <p> price <span className="text-xs"> {product.price} </span>  </p></div>
                </div>
            </Link>

        </div>
    )
}