"use client"
import { useEffect, useState } from "react";



async function getData() {
    const res = await fetch('http://localhost:3001/products', {
        method: 'GET', // ระบุวิธีการ (GET, POST, PUT, DELETE, ฯลฯ)
        headers: {
            'Content-Type': 'application/json', // ระบุประเภทของเนื้อหา
            'Secret-Key': '15151515' // ใส่ค่า Secret-Key ของคุณที่นี่
        }
    });

    // ตรวจสอบว่าคำขอสำเร็จหรือไม่
    if (!res.ok) {
        // ถ้าคำขอล้มเหลว ให้โยน Error เพื่อจัดการใน Error Boundary
        throw new Error('Failed to fetch data');
    }

    // ส่งคืนข้อมูลที่ได้รับในรูปแบบ JSON
    return res.json();
}



export default function DashboardPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            console.log(result)
            setData(result);
        }

        fetchData();
    }, []);

    // if (loading) {
    //     return <div className="flex justify-center">Loading...</div>;
    // }

    // if (error) {
    //     return <div className="flex justify-center">Error: {error.message}</div>;
    // }

    return (
        <div className="flex justify-center">
            <span>DashboardPage</span>
            <div>
                {/* Render the data here */}
                {data && JSON.stringify(data)}
            </div>
        </div>
    );
}