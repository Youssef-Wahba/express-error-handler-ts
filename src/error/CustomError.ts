export abstract class CustomError extends Error {
	abstract statusCode: number;
	abstract status: string;
	abstract error: string;
	abstract operational: boolean;
	abstract logging: boolean;
	abstract details: { [key: string]: any };
	constructor(message: string) {
		super(message);
		this.stack = this.stack;
		// as it extends a built in class
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}
