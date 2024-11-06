import prisma from "@/lib/db";

export async function getAllNiches() {
        const niches = await prisma.niches.findMany();
        return niches;
}