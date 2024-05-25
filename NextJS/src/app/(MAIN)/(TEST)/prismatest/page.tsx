import React from 'react';
import prisma from "@/lib/prisma";
import { users } from '@prisma/client';
async function getUsers(): Promise<users | null> {
    return await prisma.users.findUnique({ where: { id: 1 } });
}




export default async function PrismaPage() {
    let usersData: users | null;
    try {
        usersData = await getUsers();

    } catch (error: any) {
        return (
            <div className="flex justify-center">
                <span>Error: {error.message}</span>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <span>DashboardPage</span>
            <div>
                {/* Render the data here */}
                {usersData && (
                    <div key={usersData.id}>
                        <p>Name: {usersData.username}</p>
                        <p>Email: {usersData.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
