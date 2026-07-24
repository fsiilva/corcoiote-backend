import { Router } from 'express';
import * as CustomerControler from '../controllers/customer.controller.ts';

const router = Router();

router.get('/', CustomerControler.getAllCustomers);
router.get('/:id', CustomerControler.getById);

export default router;
