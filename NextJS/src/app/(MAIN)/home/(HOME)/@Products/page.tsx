"use client"
import ProductBox from "./components/ProductBox"
// interface ProductType {
//     children: ReactNode

// import { Button } from "@material-tailwind/react"

import { useState } from "react"

// }




export default function ProductPage() {
    const [state, setState] = useState(true)

    return <div className="border Products relative p-2 
   
    grid    
     grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">

        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />

        <ProductBox />

        <ProductBox />
        <ProductBox />
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        
        <ProductBox />
        <ProductBox />
        <div className="absolute m-screen text-gray-300 ">
            <h1 className="">Products layout.</h1>
        </div>


    </div>
}