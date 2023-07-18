export interface QFAttributes {
	id?: string;
	question?: string;
	detail?: string;
	supervisionFormId?: string;
	priority?: string
}
export interface ResultQFBQAttributes {
	id?: string;
	result?: boolean;
	file?: any;
	QFId?: string
	schoolSupervisionFormId?: string
}

export interface ResultQFOEQAttributes {
	id?: string;
	result?: string;
	file?: any;
	QFId?: string
	schoolSupervisionFormId?: string
}