import express from "express";
import { createContact,getContacts,deleteContact,updateContactStatus} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);
router.put("/:id", updateContactStatus);

export default router;