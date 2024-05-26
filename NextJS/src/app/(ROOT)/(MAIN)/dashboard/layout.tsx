import Link from "next/link"
import { ReactNode, Suspense } from "react"

interface HomeLayoutType {
    children: ReactNode


}

function delayForDemo(promise: any) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}


// const ProductBox = dynamic(() => delayForDemo(import('./ui/ProductBox')), {
//     suspense: true
// });




export default function HomeLayout({ children }: HomeLayoutType) {

    return (

        <div className=" "  >
            

                {delayForDemo(children)}

                {/* {children} */}
   
        </div>)
}