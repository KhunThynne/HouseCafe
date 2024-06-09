import { useEffect, useState } from "react"





interface Image {
    height?: string,
    width?: string
}

export default function ImageProduct({ height = "100%", width = "100%" }: Image) {
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)

    }, [])
    const style = {
        minWidth: width,
        minHeight: height,

    };

    return load ? (
        <div className={` rounded-lg bg-gray-300 shadow-md `} style={style}>

        </div>


    ) : ""
}