import type { Request, Response, NextFunction } from 'express';
import { log } from 'node:console';

export default function requestLogger(
    request: Request,
    _response: Response,
    next: NextFunction
) {
    console.log(`${request.method} ${request.url}`);
    next();
}