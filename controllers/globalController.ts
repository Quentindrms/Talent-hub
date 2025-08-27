import { Controller } from "../libs/Controller";
import { PostedAnnounce } from "../src/data/data";

export class GlobalController extends Controller{

    public homepage(){
        console.log(PostedAnnounce);
        this.response.render("pages/home", {
            PostedAnnounce,
        });
    }

    public announces(){
        this.response.render("pages/announces", {
            PostedAnnounce,
        })
    }

    public shareAnnounce(){
        this.response.render('pages/share-announce', {
            PostedAnnounce,
        })
    }

    public getAnnounce(){
        this.response.render('pages/show-announce', {
            PostedAnnounce,
        })
    }

}