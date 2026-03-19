/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { status } from 'http-status';
import { envVars } from '../config/env';

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (envVars.NODE_ENV === 'development') {
        console.log("Error from Global Error Handler", err);
    }

    // let errorSources: TErrorSources[] = []
    const statusCode: number = status.INTERNAL_SERVER_ERROR;
    const message: string = 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        message: message,
        error: err.message,
    })

}