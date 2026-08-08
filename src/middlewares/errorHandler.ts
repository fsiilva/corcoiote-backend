import type { NextFunction, Request, Response } from 'express';
import { NotFoundError, validationError } from '../erros/index.ts';

export default function errorHandler(
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
) {
    if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({ messege: error.message });
        return;
    }
    if (error instanceof validationError){
        response.status(error.statusCode).json({
            message: error.message,
            fields: error.fields
        })
    }
    response.status(500).json({ message: 'Erro interno do servidor' });
}