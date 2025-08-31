import { Controller } from "../libs/Controller";
import { PostedAnnounce } from "../src/data/data";
import { skills } from "../src/data/skills";
import { getSkillByValue } from "../src/ts/getSkill";

export class GlobalController extends Controller {

    public homepage() {
        console.log(PostedAnnounce);
        this.response.render("pages/home", {
            PostedAnnounce,
            getSkillByValue,
            skills,
        });
    }

    public announces() {
        this.response.render("pages/announces", {
            PostedAnnounce,
            skills,
            getSkillByValue
        })
    }

    public shareAnnounce() {
        this.response.render('pages/share-announce', {
            /** Values et error sont vides mais empêche le blocage de la page
             * par une erreur
             */
            PostedAnnounce,
            skills,
            errors: {},
            values: {}
        })
    }
}