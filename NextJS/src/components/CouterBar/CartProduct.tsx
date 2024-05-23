

import { AiFillDelete } from "react-icons/ai";
import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface CardProductType {
    children?: ReactNode,
    order?: Number
}


export default function CardProduct({ children, order }: CardProductType) {

    return (



        <div className={`border p-3 flex gap-2 items-center order-${order} relative`}>

            <div className="flex left-0 top-0 absolute m-2 p-2  cursor-pointer  z-20 items-center gap-1">
                <sub>  {children}</sub>
                <AiFillDelete className="text-danger" />

            </div>
            <div className="border h-[150px] basis-2/5 ">


            </div>

            <div className="flex-1 relative  ">

                <div className="">
                    <p> : Head </p>
                    <p> : Price </p>

                </div>

            </div>
        </div>

    )
}