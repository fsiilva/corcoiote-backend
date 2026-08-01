import type {NextFunction, Request, Response} from 'express';
import { NotFoundError } from '../erros/index.ts';

export default function errorHandler(
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
){
    if(error instanceof NotFoundError){
        response.status(error.statusCode).json({messege: error.message});
        return;
    }
    response.status(500).json({message: 'Erro interno do servidor'});
}