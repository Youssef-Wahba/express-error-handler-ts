import { CustomError } from './CustomError';

type BadRequestDetails = {
	message: string;
};

export default class BadRequestError extends CustomError {
	private _error = 'BAD_REQUEST';
	private _statusCode: number;
	private _operational: boolean = true;
	private _logging: boolean;
	private _status: string;
	private _details: BadRequestDetails;
	constructor(
		message: string = 'Bad request',
		statusCode: number = 400,
		logging: boolean = false
	) {
		super(message);
		this._statusCode = statusCode;
		this._status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this._details = {
			message: message,
		};
		this._logging = logging;
		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	get statusCode(): number {
		return this._statusCode;
	}

	get status(): string {
		return this._status;
	}

	get details(): BadRequestDetails {
		return this._details;
	}
	get operational(): boolean {
		return this._operational;
	}

	get logging(): boolean {
		return this._logging;
	}

	get error(): string {
		return this._error;
	}
}
