import { Router } from 'express';
import * as CustomerControler from '../controllers/customer.controller.ts';
import customers from '../mocks/customer.mock.ts';

const router = Router();

router.get('/', CustomerControler.getAllCustomers);
router.get('/:id', CustomerControler.getCustomersById);
router.post('/', CustomerControler.createCustomer);
router.put('/:id', CustomerControler.updateCustomer);

export default router;
