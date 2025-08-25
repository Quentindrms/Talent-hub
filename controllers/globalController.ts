import { Controller } from "../libs/controller";

export class GlobalController extends Controller{

    public homepage(){
        console.log('It works');
        this.response.render("pages/home", {
        });
    }

}