import { Controller } from "../libs/Controller";
import { Announce, PostedAnnounce } from "../src/data/data";
import { validateAnnounce } from "../src/ts/formValidator";
import {z} from "zod";

export class announceController extends Controller {

    public readAnnounce() {

        const requestedAnnounce = this.request.params.id;

        const announce = PostedAnnounce.find((announce) => {
            return announce.id == parseInt(requestedAnnounce);
        })
        console.log(announce);
        console.log(requestedAnnounce);

        this.response.render('pages/show-announce', {
            announce,
        })
    }

    public postAnnounce(){

        const result = validateAnnounce(this.request.body);
        console.log(`Requête :`);
        console.log(this.request.body);

        if(!result.success){
            const errors = z.treeifyError(result.error)
            return this.response.status(400).render("pages/share-announce", {
                errors: errors.properties,
                values: this.request.body
            })
        }
        else{
        /** Création d'une nouvelle annonce si la requête répond aux conditions prévues */
        const newAnnounce:Announce = {
            id: PostedAnnounce.length+1,
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

        PostedAnnounce.push(newAnnounce);
        console.log(newAnnounce);
        }


        this.response.render('pages/share-announce', {
            PostedAnnounce,
        })
    }
}