import { Router } from 'express';
import * as CustomerControler from '../controllers/customer.controller.ts';

const router = Router();

router.get('/', CustomerControler.getAllCustomers);
router.get('/:id', CustomerControler.getCustomersById);
router.post('/', CustomerControler.createCustomer);

export default router;
