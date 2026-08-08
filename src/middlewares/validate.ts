import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
import { validationError } from "../erros/index.ts";

export default function validate(schema: ZodType) {
    return (
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        const result = schema.safeParse(request.body);

        if (!result.success) {
            const fields = result.error.issues.map(issue => ({
                    field: issue.path.join(),
                    message: issue.message
                }));
            return next(new validationError('dados Invalidos', fields));
        }
        
        next();
    }
}