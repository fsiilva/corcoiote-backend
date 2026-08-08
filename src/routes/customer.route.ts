import { Router } from 'express';
import * as CustomerControler from '../controllers/customer.controller.ts';
import customers from '../mocks/customer.mock.ts';
import validate from '../middlewares/validate.ts';
import { createCustomerSchema, updateCustomerSchema } from '../schemas/customers.schema.ts';

const router = Router();

router.get('/', CustomerControler.getAllCustomers);
router.get('/:id', CustomerControler.getCustomersById);
router.post(
    '/',
    validate(createCustomerSchema),
    CustomerControler.createCustomer
);
router.put(
    '/:id',
    validate(updateCustomerSchema),
    CustomerControler.updateCustomer
);
router.delete('/:id', CustomerControler.deleteCustomer);

export default router;
