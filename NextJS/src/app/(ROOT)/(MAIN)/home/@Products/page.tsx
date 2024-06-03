"use client"



import { useState, useEffect, Suspense, useContext } from "react";

import dynamic from "next/dynamic";
import {webContext} from "@/lib/context";
import { getItem } from "@/lib/express_prisma";






const ProductBox = dynamic(() => import('./ui/ProductBox'));
// const ProductBox = dynamic(() => delayForDemo(import('./ui/ProductBox')), {
//     suspense: true
// });



export default function ProductPage() {
    // const [productsData, setProductsData] = useState<products[]>([]);
    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {

        async function prismaGet() {
            try {
                const item = await getItem("products", "findMany")

                setProductsData(item)

            } catch (err: any) {
                setError(err)

            } finally {
                setLoad(true)
            }

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
            <div className="shadow Products relative p-2 grid xs:grid-cols-1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 min-h-[55vh]">


                {error ? (
                    <div className="flex justify-center" >
                        <span>Error: {error}</span>
                    </div>
                ) : (
                    productsData.map((product: any) => (

                        product && <ProductBox key={product.id} product={product} />

                    ))
                )}

                {!load && <div className="absolute m-screen text-gray-300 ">
                    <h1 className="">Products layout. Load...</h1>
                </div>
                }

            </div></div>)
}


