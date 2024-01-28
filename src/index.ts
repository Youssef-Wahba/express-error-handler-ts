import express, { Express, NextFunction, Request, Response } from 'express';
import { gErrorHandler } from './error/middleware/gErrorHandler.middlware';
import Logger from './logger/Logger';
import 'express-async-errors';
import BadRequestError from './error/BadRequestError';
import { connectDb } from './db/connectDB';
import morganMiddleware from './logger/morgan.middlware';
import { config } from 'dotenv';
config();
const app: Express = express();
const port: number = 3000;
app.use(morganMiddleware);
// routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
	// throw new BadRequestError('sl;dfkjgls;dkfsjld;fkg sldfkgsl;dfg', 400, true);
	// throw new Error('asdads');
	return res.json({ message: 'asd' });
});

// middlewares
app.use(express.json());
app.use(gErrorHandler);

app.listen(port, () => {
	Logger.info(`Server running on port ${port}`);
	connectDb();
});
