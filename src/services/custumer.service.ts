import customers from "../mocks/custumer.mock.js";
import type { Custumer } from "../types.js";

export function findAllCustumer(): Custumer [] {
    return customers;
}