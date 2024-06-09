"use client"

import { useEffect, useState } from "react";
import CartLayOut from "./CouterBar/CartLayOut";
import { getItem } from "@/lib/express_prisma";


export default function Navbar() {
    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [load, setLoad] = useState<boolean>(false);
    const [navOn, setNavOn] = useState<string>("");
    useEffect(() => {
        async function prismaGet() {
            try {
                const item = await getItem("users", "findMany")

                setProductsData(item)

                setLoad(true)
            } catch (err: any) {
                setError(err)
            }

        }
        prismaGet()

        function handleScroll() {
           
            if (window.scrollY > lastScrollY) {
               
                setNavOn("down")
            }
            else if(window.scrollY === 0){

                setNavOn("")
            
            } else {
                
                
               setNavOn("up")
            }
            lastScrollY = window.scrollY;
        }

        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, [])


    return (
        <div className={`h-full  top-0   z-20  NavLayOut ${navOn}`}
        // style={{ position: "-webkit-sticky" }}

        >
         
            <nav className=" relative flex justify-between items-center  container mx-auto   px-3  h-[80px]">
                <div>Manu</div>

                <CartLayOut Count={productsData.length} />


                {/* <div className="absolute m-screen text-gray-300 z-[-99]"><h2 className="">Navbar layout.</h2>  </div> */}
            </nav> </div>
    );
}
