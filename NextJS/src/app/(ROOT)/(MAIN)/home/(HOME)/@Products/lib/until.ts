"use server"
// lib/until.ts
import { PrismaClient, products } from '@prisma/client';
const prisma = new PrismaClient();

export async function getItem(): Promise<(Omit<products, 'price'> & { price: string })[]> {
    const items = await prisma.products.findMany();

    if (items.length > 0) {
        return items.map(item => ({
            ...item,
            price: item.price.toString() // แปลงค่า Decimal เป็น string
        }));
    }

    throw new Error("No products found");
}
