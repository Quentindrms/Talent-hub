import Router from "express";
import globalRouter from "./globalRouter";
import announceRouter from "./announceRouter";

const router = Router();

router.use(globalRouter); //Router for global navigation
router.use('/announce', announceRouter); // Router for crossing data


export default router;
