"use client"



import { useState, useEffect, Suspense, useContext } from "react";

import dynamic from "next/dynamic";
import { webContext } from "@/lib/context";
import { TestAPI, getItem } from "@/lib/express_prisma";






const ProductBox = dynamic(() => import('./ui/ProductBox'));
// const ProductBox = dynamic(() => delayForDemo(import('./ui/ProductBox')), {
//     suspense: true
// });



export default function ProductPage() {
    // const [productsData, setProductsData] = useState<products[]>([]);
    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<boolean | null>(null);
    const [load, setLoad] = useState<boolean>(false);
    // console.log(API)
    useEffect(() => {

        async function prismaGet() {

            await getItem("products", "findMany").then(item => {
                setProductsData(item)
                setLoad(true)
            }).catch(err => {

                setError(true)
            })




        }
    
        prismaGet()

    }, [])






    return (
        <div className="flex flex-col gap-2">
            <div className="flex py-5 px-3 lg:p-5 bg-white md:rounded justify-between flex-wrap">
                <p className="text-secondary font-bold text-2xl md:order-2">Product</p>
                <p className=" font-bold sm:text-xl text-secondary opacity-80 px-5 ">
                    Choose what you wish</p>

                <p className="opacity-50 font-bold text-2xl"></p>
            </div>
            <div className="p-1  bg-gray-200 ">
                <div className="flex gap-2  md:px-5 text-xs flex-wrap  lg:flex-row-reverse ">
                    <span className="border border-black p-2 px-5 text-center bg-secondary ">All</span>
                    <span className="border border-black p-2 px-5 text-center whitespace-nowrap">Today promotion</span>
                    <span className="border border-black p-2 px-5 text-center">Recommended</span>
                </div>

            </div>
            {/*    */}
            <div className=" Products  relative grid  grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-[20px] min-h-[55vh]  p-3   ">


                {!error && (
                    productsData.map((product: any) => (

                        product && <ProductBox key={product.id} product={product} />

                    ))
                )}

                {!load && <div className="absolute m-screen text-gray-300 ">
                    <h1 className="">{error ? "Error" : "Products layout. Load..."}</h1>
                </div>
                }

            </div></div>)
}


