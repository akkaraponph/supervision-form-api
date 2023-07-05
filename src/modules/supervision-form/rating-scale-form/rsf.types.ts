export interface RSFSectionAttributes {
	id?:string;
	type?: string;
	supervisionFormId?: string;
	RSFQuestions? : RSFQuestionAttributes;
}

export interface CloneRSFSectionAttributes {
	id?:string;
	type?: string;
	supervisionFormId?: string;
	RSFQuestions? : RSFQuestionAttributes[];
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