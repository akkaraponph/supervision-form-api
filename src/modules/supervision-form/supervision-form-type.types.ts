export enum FormType {
	RATING_SCALE = 'RATING_SCALE',
	QUESTION = 'QUESTION',
	CUSTOM = 'CUSTOM',
}

export enum supervisionFormTypeEnum {
	PREPARING_OPEN_SCHOOL = "PREPARING_OPEN_SCHOOL",
	SUPERVISION = "SUPERVISION",
	TRACKING = "TRACKING"
}
export interface SupervisionFormTypeAttributes {
	id?: string;     
	type?: supervisionFormTypeEnum;  // PREPARING_OPEN_SCHOOL
	name?: string;  // แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน
	schoolId?: string;
	formType?: FormType
}