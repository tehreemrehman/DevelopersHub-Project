import express from "express"
import  {getServices, getSingleService, createService, updateService, deleteService} from "../controllers/serviceController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getServices);
router.get("/:id",getSingleService);
router.post("/",createService);
router.put("/:id",verifyToken, updateService);
router.delete("/:id",verifyToken, deleteService);

export default router;