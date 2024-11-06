import prisma from "@/lib/db";

export async function getAllNiches() {
    try {
        const niches = await prisma.niches.findMany();
        return niches;
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}