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
export function insertCustomer (name: string){
    const id = customers[customers.length - 1].id;
    const customer: Customer = {
        id: id + 1,
        name,
        status: true
    };

    customers.push(customer);
    return customers;
}
export function modifyCustomer (
    id: number,
    name: string,
    status: boolean
){
    const customer = customers.find((customer) => customer.id === id);
    if(!customer){
        throw new Error(`cliente de id ${id} nao encontrado.`);
    }
    if(name) customer.name = name;
    if(status !== undefined) customer.status = status;

    return customer;
}