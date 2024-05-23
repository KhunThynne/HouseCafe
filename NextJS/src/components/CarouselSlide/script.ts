

import React, { RefObject } from 'react';




const handleDrag = (e: React.DragEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log('Dragging', e.pageX);
    // console.log(documentRef)
    documentRef.current?.classList.add("scale-105");
};
const handleDragStart = (e: React.DragEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log('Drag started', e.pageX);
    // console.log(documentRef)
    

};
const handleDragEnd = (e: React.DragEvent<HTMLDivElement> | React.PointerEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log('Drag ended', e.pageX);

    documentRef.current?.classList.remove("scale-105");
};
const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log(e);
    // console.log('Mouse down', e.pageX);

    documentRef.current?.classList.add("scale-105");
};

const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log('Mouse up', e.pageX);
    documentRef.current?.classList.remove("scale-105");
    console.log('handleMouseUp')
};
const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // console.log('Mouse up', e.pageX);
    documentRef.current?.classList.remove("scale-105");
    console.log('handleMouseOut')
};
const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // const pageX = e.touches[0].pageX;
    // console.log('Touch start', pageX);
    documentRef.current?.classList.add("scale-105");
}

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    const pageX = e.touches[0].pageX;
    // console.log('Touch move', pageX);
    // console.log(documentRef);
}

const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>, documentRef: RefObject<HTMLDivElement>) => {
    // เนื่องจาก touchend ไม่สามารถเข้าถึง touches[0] ได้โดยตรง
    // console.log('Touch end');
    // console.log(documentRef);
    documentRef.current?.classList.remove("scale-105");
    console.log('end')
}


export const createEventHandlers = (documentRef: RefObject<HTMLDivElement>) => ({
    onDrag: (e: React.DragEvent<HTMLDivElement>) => handleDrag(e, documentRef),
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, documentRef),
    onDragEnd: (e: React.DragEvent<HTMLDivElement>) => handleDragEnd(e, documentRef),
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => handleMouseDown(e, documentRef),
    onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => handleMouseUp(e, documentRef),
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => handleTouchStart(e, documentRef),
    onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => handleTouchMove(e, documentRef),
    onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => handleTouchEnd(e, documentRef),
    // onPointerOut: (e: React.PointerEvent<HTMLDivElement>) => handleMouseUp(e, documentRef),
    onMouseOut: (e: React.MouseEvent<HTMLDivElement>) => handleMouseOut(e, documentRef)
});





// const eventHandlers = {
//     onDrag: handleDrag,
//     onDragStart: (e: React.DragEvent<HTMLDivElement>) => console.log('Drag started', e.pageX),
//     onDragEnd: (e: React.DragEvent<HTMLDivElement>) => console.log('Drag ended', e.pageX),
//     onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => console.log('Mouse down', e.pageX),
//     onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => console.log('Mouse up', e.pageX),
// };