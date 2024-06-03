"use client"


import { ReactNode, Suspense, useContext, useEffect, useState } from "react"


import { getItem } from "@/lib/express_prisma"
import { useRouter } from "next/navigation"

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
        return (() => {


        })
    }, [params.productid])
    // console.log(productsData)
    return (

        <div className="container mx-auto relative py-5" >
            <div className={` lg:grid gap-4 lg:grid-cols-[1fr,25%]  h-full border-primary`}>



                <div className="     
                 col-span-1 border ">

                    <div className=" rounded px-5  w-full sticky top-[80px] lg:hidden bg-white rounded p-5">
                        {MenuChoice}
                    </div>
                    <div className=" p-8 flex  flex-col items-end  bg-white
               border min-h-screen">

                        {ImageGallery}


                        <div className="content">


                        </div>
                    </div>
                </div>
                {/* {children} */}
                <div className="    h-full">
                    <div className=" bg-white 
                lg:sticky      top-[80px] lg:flex flex-col
                lg:h-[88vh] hidden  justify-between
                    ">

                        {MenuChoice}
                    </div>
                </div>
            </div></div>

    )
}