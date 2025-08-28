import { Controller } from "../libs/Controller";
import { PostedAnnounce } from "../src/data/data";

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
}