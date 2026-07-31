import type { Request, Response } from 'express';
import * as CustomersServices from '../services/customer.service.ts';
import type { CreateCustomer, UpdateCustomer } from '../types.ts';

export function getAllCustomers(_request: Request, response: Response) {
	const customers = CustomersServices.findAllCustomer();
	response.status(200).json(customers);
}

export function getCustomersById(request: Request, response: Response): void {
	const id = Number(request.params.id);

	if (!Number.isInteger(id) || id <= 0) {
		response
			.status(400)
			.json({ message: 'O id deve ser um numero inteiro positivo.' });
		return;
	}

	const customer = CustomersServices.findCustomerById(id);

	if (!customer) {
		response
			.status(404)
			.json({ message: `Cliente de id ${id} nao encontrado.` });
		return;
	}

	response.status(200).json(customer);
}

export function createCustomer(request: Request, response: Response): void {
	const { name } = request.body as CreateCustomer;
	const customer = CustomersServices.insertCustomer(name);
	response.status(201).json(customer);
}
export function updateCustomer(request: Request, response: Response): void {
	const id = Number(request.params.id);
	const { name, status } = request.body as UpdateCustomer;
	const customer = CustomersServices.modifyCustomer(id, name, status);
	response.status(201).json(customer);
}

export function deleteCustomer(request: Request, response: Response): void{
	const id = Number(request.params.id);
	CustomersServices.removeCustomer(id);
	response.status(204).send();
}