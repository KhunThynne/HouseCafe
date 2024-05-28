"use server"
export async function getItem(model: string, method: string, query: string = "") {
    const api = `http://localhost:3001/prisma/${model}/${method}${query !== "" ? '?condition=' + query : ""}`
    console.log(api)
    const res = await fetch(api, {
        method: 'GET', // ระบุวิธีการ (GET, POST, PUT, DELETE, ฯลฯ)
        headers: {
            'Content-Type': 'application/json',
            'Secret-Key': '15151515'
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
