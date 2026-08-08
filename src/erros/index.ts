import type { ValidationFieldsError } from "../types.ts";

export class NotFoundError extends Error {
    statusCode: number;
    constructor (messege: string){
        super(messege);
        this.statusCode = 404;
    }
}


export class validationError extends Error {
    statusCode: number;
    fields: ValidationFieldsError[];
    
    constructor (messege: string, fields: ValidationFieldsError[]){
        super(messege);
        this.statusCode = 400;
        this.fields = fields;
    }
}