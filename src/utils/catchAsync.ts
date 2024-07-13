import { NextFunction, Request, RequestHandler, Response } from "express";

// higher order function for promise resolve or go to the global error handler function
const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err))
    }
}

export default catchAsync;