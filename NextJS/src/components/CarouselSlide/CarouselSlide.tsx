import { ReactNode, useRef } from "react"
import { createEventHandlers } from "./script";
// import { eventHandlers } from "./script"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface CarouselSlideType {
    children?: ReactNode
}


export default function CarouselSlide({ children }: CarouselSlideType) {

    const documentRef = useRef<HTMLDivElement>(null);
    const eventHandlers = createEventHandlers(documentRef);

    return (
        <div className="grid grid-cols-[50px,1fr,50px] h-full gap-x-5 " ref={documentRef}>
            <div className="order-1 self-center flex justify-end"><FaChevronLeft /></div>
            <div className="order-3 self-center flex justify-start"><FaChevronRight /></div>
            <div className="order-2 h-full flex gap-2 overflow-hidden carousel-container "  {...eventHandlers}
            
            >

                {children}

            </div>
        </div>)
}