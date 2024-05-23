import Link from "next/link"
import { ReactNode } from "react"

interface HomeLayoutType {
    children: ReactNode

}




export default function HomeLayout({ children }: HomeLayoutType) {

    return (

        <div className=" "  >

            {children}



         

        </div>)
}