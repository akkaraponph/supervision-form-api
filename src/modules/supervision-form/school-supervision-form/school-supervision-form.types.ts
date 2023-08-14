
export interface SchoolSupervisionFormAttributes {
	id?: string;
	schoolId? : string;
	supervisionFormId?: string;
	supervisorName?: string;
	supervisorPosition?: string;
	year? : string;
	term? : string;
	isSend? : boolean;
	isConfirm?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface PersonnelSupervisionFormAttributes {
	id?: string;
	schoolSupervisionFormId?: string;
	personnelId?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
