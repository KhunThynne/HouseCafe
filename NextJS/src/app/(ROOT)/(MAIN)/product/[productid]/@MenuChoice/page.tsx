"use client"

import {webContext} from "@/lib/context"
import { useContext } from "react"


export default function MenuChoice(onClick: any) {
    const { setAddCart } = useContext(webContext)
    return (<>
        <div className="flex flex-col gap-2  p-5 text-sm ">
            <p>จำนวน</p>
            <p>ราคา</p>
        </div>
        <div className="">
            <button className="pointer border p-1 lg:p-3 rounded bg-primary w-full" onClick={() => setAddCart(true)}> เพิ่มสินค้า  </button>
        </div> </>
    )
}