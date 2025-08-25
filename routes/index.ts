import Router from "express";
import globalRouter from "./globalRouter";

const router = Router();

router.use(globalRouter) //Specify the router 


export default router;
