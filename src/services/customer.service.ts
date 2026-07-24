import customers from "../mocks/customer.mock.ts";
import type { Customer } from "../types.ts";

export function findAllCustomer(): Customer[] {
    return customers;
}

export function findCustomerById(id: number){
    const customer = customers.find((customer) => customer.id === id);
    if(!customer){
        throw new Error(`cliente de id ${id} nao encontrado.`);
    }
    return customer;
}
