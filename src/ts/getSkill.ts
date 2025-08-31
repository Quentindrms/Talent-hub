import { skills } from "../data/skills";
import { Skills } from "../../libs/Type";

/** Permet de retrouver une compétence grâce à sa valeur */

export function getSkillByValue(value: string[]):string[] {
    console.log(`Valeur en entrée ${value}`);
    let skillsText:string[] = [];
    value.forEach((skill) => {
        skills.find((searchedSkill) => {
            if (searchedSkill.value == skill) {
                console.log(`Valeur correspondante ${skill}`);
                skillsText.push(searchedSkill.text)
            }
        })
    })
    console.log(`Valeurs en sortie : ${skillsText}`)
    return skillsText;
}