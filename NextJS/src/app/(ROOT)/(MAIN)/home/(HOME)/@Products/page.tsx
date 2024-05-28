"use client"



import { useState, useEffect, Suspense, useContext } from "react";

import dynamic from "next/dynamic";
import webContext from "@/lib/context";
import { getItem } from "@/lib/primamethod";






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
        <div className=" Products relative p-2 grid xs:grid-cols-1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 min-h-[55vh]">


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

        </div>)
}

