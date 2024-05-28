"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { Suspense, useState } from "react";
import GridLayout from "@/components/GridLayout";
import MainContent from "@/components/MainContent";
import webContext from "@/lib/context";
export default function Template({ children }: { children: React.ReactNode }) {
    const customTheme = "light"

    const [data, setDATA] = useState<object>({});
    return <ThemeProvider value={customTheme}>

        <webContext.Provider value={{ data, setDATA }}>
            <Navbar />
            <MainContent className="">{children}</MainContent>


        </webContext.Provider>

    </ThemeProvider>
}