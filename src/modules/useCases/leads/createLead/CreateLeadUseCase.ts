import { Lead } from "@prisma/client";
import { prisma } from "../../../../prisma/PrismaClient";
import { CreateLeadDTO } from "./CreateLeadDTO";
import { AppErrors } from "../../../../erros/ApprErrors";

export class CreateLeadUseCase{
    async execute({name, email}:CreateLeadDTO): Promise<Lead>{
        const leadAlreadyExist = await prisma.lead.findUnique({where:{email}})
        if (leadAlreadyExist) {
            throw new AppErrors("Lead já cadastrado");
        }
        const lead = await prisma.lead.create({data:{name, email}})
        return lead;
    }
}