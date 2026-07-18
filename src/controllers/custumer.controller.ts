import type { Request, Response } from "express";
import { findAllCustumer } from "../services/custumer.service.js";

export function getAllCustomers(_request: Request, response: Response) {
    const custumers = findAllCustumer();
    response.status(200).json(custumers);
}