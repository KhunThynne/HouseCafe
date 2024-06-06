

"use client"
import { useEffect, useState } from "react";
import CartLayOut from "./CouterBar/CartLayOut";
import { getItem } from "@/lib/express_prisma";


export default function Navbar() {
    const [productsData, setProductsData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [load, setLoad] = useState<boolean>(false);
    const [vertion, setVertion] = useState<any>()
    useEffect(() => {

        setVertion(process.env.VERSION)
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
    }, [])


    return (
        <div className="sticky h-full  top-0  bg-white shadow z-20 " style={{ position: "-webkit-sticky" }}>
            <nav className=" relative flex justify-between items-center  container mx-auto   px-3  h-[80px]">
                <div>Manu</div>
                <div>0.0.1</div>

                <CartLayOut Count={productsData.length} />


                {/* <div className="absolute m-screen text-gray-300 z-[-99]"><h2 className="">Navbar layout.</h2>  </div> */}
            </nav> </div>
    );
}
