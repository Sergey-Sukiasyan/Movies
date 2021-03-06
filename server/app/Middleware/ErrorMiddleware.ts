import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

import ApiError from '../Exceptions/ApiError';

export default function (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }

    return res.status(500).json({ message: err });
}