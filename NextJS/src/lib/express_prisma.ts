"use server"

import { cache } from 'react'
const model = {
    users: "users",
    products: "porducts",
    carts: "carts",
    cart_items: "cart_items",
}

// const getItem = async (model: string, method: string, query: string = "") => {

//     const Host = process.env.FRONTEND_API;

//     const api = `${Host}/prisma/${model}/${method}${query !== "" ? '?condition=' + query : ""}`
//     console.log(api)
//     const res = await fetch(api, {
//         method: 'GET', // ระบุวิธีการ (GET, POST, PUT, DELETE, ฯลฯ)
//         headers: {
//             'Content-Type': 'application/json',
//             'Secret-Key': '15151515'
//         }
//     });

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();
// }

const getItem = cache(async (model: string, method: string, query: string = "") => {

    const Host = process.env.FRONTEND_API;

    const api = `${Host}/prisma/${model}/${method}${query !== "" ? '?condition=' + query : ""}`
    console.log(api)
    const res = await fetch(api, {
        method: 'GET', // ระบุวิธีการ (GET, POST, PUT, DELETE, ฯลฯ)
        headers: {
            'Content-Type': 'application/json',
            'Secret-Key': '15151515'
        }, next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
})

const getItems = async (model: string, method: string, query: string = "") => {

    const Host = process.env.FRONTEND_API;

    const api = `${Host}/prisma/${model}/${method}${query !== "" ? '?condition=' + query : ""}`
    console.log(api)
    const res = await fetch(api, {
        method: 'GET', // ระบุวิธีการ (GET, POST, PUT, DELETE, ฯลฯ)
        headers: {
            'Content-Type': 'application/json',
            'Secret-Key': '15151515'
        }, next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}








export const nontest = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)


    })


    return { id: 0, name: "Thynne" }
}

export const test = cache(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)


    })

    return { id: 0, name: "Thynne" }
})




export { getItem }