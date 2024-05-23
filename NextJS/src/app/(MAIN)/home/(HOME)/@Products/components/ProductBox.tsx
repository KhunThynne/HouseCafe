


import { ReactNode, useRef, useState } from "react"

// import { eventHandlers } from "./script"

interface ProductBoxType {
    children?: ReactNode
}


export default function ProductBox({ children }: ProductBoxType) {
    const [state, setState] = useState(false)
    const documentRef = useRef<HTMLDivElement>(null);
    return (
        <div className="border p-2  bg-white h-[350px] w-full content-center">

            <div className="relative">
                <div className="border h-[250px]"> </div>
                <h3> Product </h3>
                <p> price</p>
            </div>
        </div>
    )
}