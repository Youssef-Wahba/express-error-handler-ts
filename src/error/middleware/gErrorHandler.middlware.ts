import { NextFunction, Request, Response } from 'express';
import logger from '../../logger/Logger';
import { CustomError } from '../CustomError';

// const handleBadRequestError = (error: Error, res: Response) => {
// 	if (error instanceof CustomError) {
// 		if (error.logging) {
// 			Logger.error(
// 				JSON.stringify(
// 					{
// 						statusCode: error.statusCode,
// 						errors: errors,
// 						stack: error.stack,
// 					},
// 					null,
// 					2
// 				)
// 			);
// 		}
// 		return res.status(statusCode).json({ errors });
// 	} else return;
// };

export const gErrorHandler = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		if (err.logging) logger.error(err.message);
		return res.status(err.statusCode).json(err);
	}
	logger.error(err.message);
	return res.status(500).json({
		status: 'error',
		error: 'INTERNAL_SERVER_ERROR',
		message: err.message,
	});
};
