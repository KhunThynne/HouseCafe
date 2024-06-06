


import Link from "next/link";
import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface ProductBoxType {
    children?: ReactNode,
    product: {
        id: string,
        name: String,
        price: String
    }
}


export default function ProductBox({ children, product }: ProductBoxType) {
    const [state, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (

        <div className="border p-2  bg-white h-[350px] w-full content-center">
            <Link href={{
                pathname: `/product/${product.id}`,
                //  query: { name: 'test' },
            }}>
                <div className="relative">
                    <div className="border h-[250px] "> </div>
                    <div className="my-2 text-center">
                        <h3> {product.name} </h3>
                        <h3> {product.id} </h3>
                        <p> price <span className="text-xs"> {product.price} </span>  </p></div>
                </div>
            </Link>

        </div>
    )
}