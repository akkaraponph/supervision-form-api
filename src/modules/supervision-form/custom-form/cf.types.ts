export interface CFSectionAttributes {
	id?: string;
	section?: string;
	supervisionFormId?: string;
	haveSubSection: boolean;
	priority: string
}

export enum QuestionTypeEnum {
	OPEN_END = "OPEN_END",
	BOOLEAN = "BOOLEAN"
}

export interface CFQSectionAttributes {
	id?: string
	question?: string
	detail?: string
	type?: QuestionTypeEnum
	CFSectionId?: string
	priority?: string
}

export interface ResultCFOEQSectionAttributes {
	id?: string
	result?: string
	remark?: string
	file?: string
	CFQSectionId?: string
	schoolSupervisionFormId?: string
	priority?: string
}

export interface ResultCFBQSectionAttributes {
	id?: string
	result?: boolean
	remark?: string
	file?: any
	CFQSectionId?: string
	schoolSupervisionFormId?: string
}


export interface CFSubSectionAttributes {
	id?: string
	section?: string
	target?: string
	CFSectionId?: string
	priority?: string
}


export interface CFQSubSectionAttributes {
	id?: string
	question?: string
	detail?: string
	type?: QuestionTypeEnum
	CFSubSectionId?: string
	priority?: string
}



export interface ResultCFBQSubSectionAttributes {
	id?: string
	result?: boolean
	remark?: string
	file?: any
	CFQSubSectionId?: string
	schoolSupervisionFormId?: string
}

export interface ResultCFOEQSubSectionAttributes {
	id?: string
	result?: string
	remark?: string
	file?: string
	CFQSubSectionId?: string
	schoolSupervisionFormId?: string
}
