// lib/until.ts
"use server"
import { PrismaClient, products } from '@prisma/client';
const prisma = new PrismaClient();

export default async function getItemOne(id: string): Promise<(Omit<products, 'price'> & { price: string }) | null> {
    try {
        const item = await prisma.products.findUnique({ where: { id: parseInt(id)} });

        if (item) {
            return {
                ...item,
                price: item.price.toString() // แปลงค่า Decimal เป็น string
            };
        } else {
            throw new Error("No product found");
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}
