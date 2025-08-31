import { Controller } from "../libs/Controller";
import {PostedAnnounce } from "../src/data/data";
import { Announce } from "../libs/Type";
import { validateAnnounce } from "../src/ts/formValidator";
import { skills } from "../src/data/skills";
import { z } from "zod";

export class announceController extends Controller {

    public readAnnounce() {
        /** Récupère le paramètre passé dans la requête */
        const requestedAnnounce = this.request.params.id;
        /** Récupère l'objet ayant le même id */
        const announce = PostedAnnounce.find((announce) => {
            return announce.id == parseInt(requestedAnnounce);
        })
        console.log(announce);
        console.log(requestedAnnounce);

        this.response.render('pages/show-announce', {
            announce,
        })
    }

    public postAnnounce() {
        /** Compare la donnée entrée avec le modèle */
        const result = validateAnnounce(this.request.body);
        console.log(`Requête :`);
        console.log(this.request.body);

        /** Si le résultat est différent de succès on affiche une erreur */
        if (!result.success) {
            /** On stock l'erreur sous forme d'objet */
            const errors = z.treeifyError(result.error)
            console.log(result.error);
            return this.response.status(400).render("pages/share-announce", {
                errors: errors.properties,
                values: this.request.body
            });
        }
        /** Sinon réation d'une nouvelle annonce si la requête répond aux conditions prévues */
        else {
            const newAnnounce: Announce = {
                id: PostedAnnounce.length + 1,
                title: this.request.body.title,
                description: this.request.body.description,
                bodytext: this.request.body.bodytext,
                skills: this.request.body.skills,
                type: this.request.body.type,
                start_date: new Date(this.request.body.start_date),
                salary: this.request.body.salary,
                salary_unit: this.request.body.salary_unit,
                password: this.request.body.password,
                mail: this.request.body.mail,
                phone: this.request.body.phone,
            }
            /** Envoi l'objet dans le tableau data */
            PostedAnnounce.push(newAnnounce);
            console.log(newAnnounce);

            this.response.render('pages/share-announce', {
                PostedAnnounce,
                skills,
                values:{},
                errors:{}
            })
        }
    }
}