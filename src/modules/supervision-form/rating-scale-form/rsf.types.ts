export interface RSFSectionAttributes {
	id?:string;
	type?: string;
	supervisionFormId?: string;
}

export interface RSFQuestionAttributes {
	id?:string;
	question?: string;
	RSFSectionId?: string;
}

export interface ResultRSFAttributes {
	id?:string;
	score?: number;
	RSFQuestionId?: string;
	schoolSupervisionFormId?:string;
}