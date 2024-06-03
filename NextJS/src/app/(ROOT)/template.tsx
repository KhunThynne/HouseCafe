"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { Suspense, useCallback, useEffect, useState } from "react";

import MainContent from "@/components/MainContent";
import { webContext, alertContext } from "@/lib/context";
import { time } from "console";
export default function Template({ children }: { children: React.ReactNode }) {
    const customTheme = "light"

    const [data, setDATA] = useState<object>({});

    const [addCart, setCart] = useState<boolean>(false)
    const setAddCart = useCallback((item: any) => {

        setCart(item);

    }, [addCart]);

  


    const Test = useCallback((item: any) => {

        alert("HI")

    }, [addCart]);

    useEffect(() => {

        setTimeout(() => {
            console.log(addCart)
            setCart(false)
        }, 1000)
    }, [setAddCart])


    useEffect(() => {

 console.log("Hi")
    }, [])




    return <ThemeProvider value={customTheme}>

        <webContext.Provider value={{ data, setDATA, addCart, setAddCart }}>
            <alertContext.Provider value={{}}>


                <Navbar />
                <MainContent className="">{children}</MainContent>

            </alertContext.Provider>
        </webContext.Provider>

    </ThemeProvider>
}