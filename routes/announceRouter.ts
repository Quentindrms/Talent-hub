import {request, response, Router} from "express";
import { PostedAnnounce } from "../src/data/data";
import { announceController } from "../controllers/announceController";

const announceRouter = Router();

    announceRouter.get('/view/:id', (request, response) => {
        const controller = new announceController(request, response);
        controller.readAnnounce();
    })

    announceRouter.post('/post', (request, response) => {
        const controller = new announceController(request, response);
        controller.postAnnounce();
    })

export default announceRouter;
