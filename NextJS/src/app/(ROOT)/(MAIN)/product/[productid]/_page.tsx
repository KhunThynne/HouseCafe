"use client"
import { ReactNode, useEffect, useState } from "react";
import getItemOne from "./lib/product_id";


export default function Page({ params }: { params: { productid: string } }) {

    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [load, setLoad] = useState<boolean>(false);
    useEffect(() => {
        async function prismaGet() {
            try {
                const item = await getItemOne(params.productid)
                console.log(item)

                setProductsData(item)
                setLoad(true)
            } catch (err: any) {
                setError(err)
            }

        }

        prismaGet()
    }, [])


    return (
        <div className="flex justify-center my-3">
            <span>ProductPage</span>
            <div>
                {/* Render the data here
                {data && JSON.stringify(data)} */}
            </div>
        </div>
    );
}