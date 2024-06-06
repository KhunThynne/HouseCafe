


import { ReactNode, useContext, useEffect, useState } from "react"
import CardProduct from "./CartProduct";
import { CiShoppingBasket } from "react-icons/ci";
import { webContext } from "@/lib/context";
// import { eventHandlers } from "./script"

interface CartLayOutType {
    children?: ReactNode,
    Count?: String,
}


export default function CartLayOut({ children, Count }: CartLayOutType) {
    const [state, setState] = useState("")
    const [logLoad, setLogLoad] = useState<string>("...")
    const { addCart} = useContext(webContext)

    useEffect(() => {

        const load_set = setTimeout(() => {
            setLogLoad("null")
        }, (5 * 1000))


        return (() => {
            // 

            clearTimeout(load_set)
        })
    }, [
        addCart
    ])
    return (
        <div>

            <div className=" relative cursor-pointer p-2  px-5   opacity-80  hover:opacity-100 btn bag" onClick={() => { setState(state === "show" ? "hide" : "show") }}>

                <div className="">
                    <CiShoppingBasket className={`text-2xl ${addCart ? "add" : ""}`} />
                    <div className="absolute flex justify-center px-1  w-full  left-0 ">
                        <div className={`fixed top-1  text-xs ${addCart ? "item-add " : "hidden"}  `}> 0</div>
                        <sub className={` ${addCart ? "add" : ""} text-[8px] border p-[5.8px] rounded   w-[25px] text-center overflow-hidden  nowrap ${Count ? "text-ellipsis bg-primary" : "bg-danger"}`}>
                            {Count ? Count : logLoad}
                        </sub>
                    </div>
                </div>
            </div>
            <div className={`${state} fixed  top-0 right-0 border rounded bg-white w-[100%] md:w-[500px] h-[100%] CartLayout `}>

                <div className="relative grid grid-rows-[100px,75vh,auto]">
                    <div className="head flex items-center justify-center text-secondary"> <h2> Your cargo </h2>  </div>
                    <div className="flex flex-col gap-2  w-full p-5 border overflow-y-scroll scrollable-container">
                        <CardProduct order={3}> 1</CardProduct>
                        <CardProduct order={0}> 2</CardProduct>
                        <CardProduct order={2}> 3</CardProduct>
                        <CardProduct order={1}> 4</CardProduct>
                    </div>
                    <div className="menu flex text-secondary p-2 lg:p-5 gap-2 fixed w-full justify-center
                    
                    bottom-0 ">

                        <div className="btn p-2 px-5 border rounded bg-warning cursor-pointer ">
                            Paying
                        </div>
                        <div className="btn p-2 px-5 border rounded bg-danger cursor-pointer " onClick={() => { setState("hide") }}>
                            Close
                        </div>

                    </div>
                </div>
                <div className="absolute m-screen text-gray-100 "><h1 className="">Cart layout.</h1>  </div>


            </div>
        </div >
    )
}