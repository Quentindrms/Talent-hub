import { Announce, PostedAnnounce } from "../data/data";
import {z} from "zod";

const announceSchema = z.object({
    title: z.string().min(5).max(50),
    bodytext: z.string().min(5).max(500),
    skills: z.string().min(1).max(100),
    type: z.string(),
    start_date: z.iso.date(),
    salary: z.string(),
    salary_unit: z.string(),
    mail: z.email(),
    password: z.string(),
})

export function validateAnnounce(rawAnnounce:Announce){
    const announce = announceSchema.safeParse(rawAnnounce)
    console.log(announce);
    return announce
}