

import { ReactNode, Suspense } from "react"

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

    return (

        <div className="container mx-auto h-full ">
            <div className="grid  gap-4 grid-cols-2  h-full border-primary">



                <div className="col-span-1 border ">
                    {ImageGallery}
                    {params.productid}
                </div>

                {/* {children} */}
                <div className="border flex justify-center ">
                    {MenuChoice}
                </div>

            </div></div>

    )
}