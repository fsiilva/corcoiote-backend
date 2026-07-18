import { Router } from "express";
import { getAllCustomers } from "../controllers/custumer.controller.js";


const router = Router();

router.get('/', getAllCustomers);

export default router;