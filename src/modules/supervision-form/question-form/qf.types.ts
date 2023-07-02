export interface QFAttributes {
	id?:string;
	question?: string;
	supervisionFormId?: string;
}
export interface ResultQFBQAttributes {
	id?: string;
	result?: boolean;
	file?: any;
	QFId?: string
	schoolSupervisionFormId? : string
}

export interface ResultQFOEQAttributes {
	id?: string;
	result?: string;
	file?: any;
	QFId?: string
	schoolSupervisionFormId? : string
}