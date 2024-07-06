import { Lead } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { GetLeadDTO } from "./GetLeadDTO";

export class GetLeadUseCase{
    async execute(): Promise<Lead[]>{ 
        const lead = await prisma.lead.findMany()
        return lead;
    }
}