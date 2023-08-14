export interface RSFSectionAttributes {
	id?: string;
	type?: string;
	supervisionFormId?: string;
	RSFQuestions?: RSFQuestionAttributes;
	priority?: string;
}

export interface CloneRSFSectionAttributes {
	id?: string;
	type?: string;
	supervisionFormId?: string;
	RSFQuestions?: RSFQuestionAttributes[];
}

export interface RSFQuestionAttributes {
	id?: string;
	question?: string;
	RSFSectionId?: string;
	priority?: string
}

export interface ResultRSFAttributes {
	id?: string;
	score?: number;
	RSFQuestionId?: string;
	schoolSupervisionFormId?: string;
}
export interface PersonnelResultRSFAttributes {
	id?: string;
	score?: number;
	RSFQuestionId?: string;
	personnelSupervisionFormId?: string;
}


