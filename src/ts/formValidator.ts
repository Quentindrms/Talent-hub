import { Announce, PostedAnnounce } from "../data/data";
import {z} from "zod";

const announceSchema = z.object({
    title: z.string().min(1, 'Le titre est trop court (minimum un caractère)').max(50, 'Le titre est trop long (maximum 50 caractères)'),
    bodytext: z.string().min(1, 'La description est trop courte (minimum un caractère)').max(500, 'La description est trop longue (maximum 500 caractères)'),
    skills: z.array(z.string()),
    type: z.string(),
    start_date: z.iso.date('Le format de la date est invalide'),
    salary: z.string(),
    salary_unit: z.string(),
    mail: z.email(),
    password: z.string(),
})

export function validateAnnounce(rawAnnounce:Announce){
    const announce = announceSchema.safeParse(rawAnnounce)
    return announce
}