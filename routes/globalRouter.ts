import {Router} from "express";
import { GlobalController } from "../controllers/globalController";

const globalRouter = Router();

    globalRouter.get('/', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.homepage();
    })

    globalRouter.get('/announces', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.announces();
    })

    globalRouter.get('/share-announce', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.shareAnnounce();
    })

export default globalRouter