"use client"

import CarouselSlide from "@/components/CarouselSlide/CarouselSlide";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation"


// interface Abverties {
//     children: ReactNode

// }




export default function Abverties() {

    const router = useRouter();
    return <div className=" gap-2  Abverties border p-2 relative">

        <CarouselSlide>
            <div className="box-rectangle" ></div>
            <div className="box-rectangle" onClick={() => { alert(50)}}></div>
            <div className="box-rectangle"></div>
            <div className="box-rectangle"></div>
            <div className="box-rectangle"></div>
            <div className="box-rectangle"></div>
            <div className="box-rectangle"></div>
        </CarouselSlide>
        <div className="absolute m-screen text-gray-300 z-[-9]"><h1 className="">Abverties layout.</h1>  </div>


    </div>
}