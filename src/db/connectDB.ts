import { connect } from 'mongoose';
import Logger from '../logger/Logger';

export const connectDb = async () => {
	try {
		await connect('mongodb://localhost:27017/test');
		Logger.info('DB connected');
	} catch (err) {
		console.log(err);
	}
};
