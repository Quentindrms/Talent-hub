import { Controller } from "../libs/controller";
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

}