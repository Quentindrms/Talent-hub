import {request, Router} from "express";
import { PostedAnnounce } from "../src/data/data";
import { announceController } from "../controllers/announceController";

const announceRouter = Router();

    announceRouter.get('/view/:id', (request, response) => {
        const controller = new announceController(request, response);
        controller.readAnnounce();
    })

export default announceRouter;
