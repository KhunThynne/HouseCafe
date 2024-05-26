"use client";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { Suspense } from "react";
import GridLayout from "@/components/GridLayout";
import MainContent from "@/components/MainContent";

export default function Template({ children }: { children: React.ReactNode }) {
    const customTheme = "light"
    return <ThemeProvider value={customTheme}>
        <Navbar />
        <MainContent className="">{children}</MainContent>
    </ThemeProvider>
}