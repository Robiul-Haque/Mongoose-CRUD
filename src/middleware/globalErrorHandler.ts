import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong. Please try again later.',
        error: err
    })
}

export default globalErrorHandler;