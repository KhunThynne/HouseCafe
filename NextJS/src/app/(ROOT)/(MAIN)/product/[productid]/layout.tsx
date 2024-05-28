"use client"


import { ReactNode, Suspense, useContext, useEffect, useState } from "react"


import { getItem } from "@/lib/primamethod"

interface MainLayoutType {
    children: ReactNode
    ImageGallery: ReactNode,
    MenuChoice: ReactNode,
    params: { productid: string }

}



// const ProductBox = dynamic(() => delayForDemo(import('./ui/ProductBox')), {
//     suspense: true
// });




export default function ProductLayout({ params, children, ImageGallery, MenuChoice }: MainLayoutType) {

    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [load, setLoad] = useState<boolean>(false);
    useEffect(() => {
        async function prismaGet() {
            try {
                const item = await getItem("products", "findUnique", `{where:{id:${params.productid}}}`)
              
                setProductsData(item)
                setLoad(true)
            } catch (err: any) {
                setError(err)
            }

        }

        prismaGet()
    }, [params.productid])
    // console.log(productsData)
    return (

        <div className="container mx-auto  py-5 h-full">
            <div className="grid  gap-4 grid-cols-[1fr,25%]  h-full border-primary">



                <div className="col-span-1 border flex  flex-col items-end">
                    {ImageGallery}
                    {params.productid}
                    {/* {data} */}
                    {/* {error ? (
                        <div className="flex justify-center" >
                            <span>Error: {error}</span>
                        </div>
                    ) : (
                        productsData.map((product: any) => (
                            <div key={product.id}>
                                {product}
                            </div>
                        ))
                    )} */}
                </div>

                {/* {children} */}
                <div className="border flex  ">
                    {MenuChoice}
                </div>

            </div></div>

    )
}