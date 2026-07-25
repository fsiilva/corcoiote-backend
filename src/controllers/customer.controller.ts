import type { Request, Response } from 'express';
import * as CustomersServices from '../services/customer.service.ts';
import type { CreateCustomer } from '../types.ts';

export function getAllCustomers(
    _request: Request,
    response: Response
) {
    const customers = CustomersServices.findAllCustomer();
    response.status(200).json(customers);
}

export function getCustomersById(
    request: Request,
    response: Response
):void {
   const id = Number (request.params.id);
   const customer = CustomersServices.findCustomerById(id);
   response.status(200).json(customer);
}

export function createCustomer(
    request: Request,
    response: Response
):void {
    const {name} = request.body as CreateCustomer;
    const customer = CustomersServices.insertCustomer(name);
    response.status(201).json(customer);
}