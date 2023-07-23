export enum FormType {
	RATING_SCALE = 'RATING_SCALE',
	QUESTION = 'QUESTION',
	CUSTOM = 'CUSTOM',
}

export enum supervisionFormTypeEnum {
	POS_1 = "POS_1",
	POS_2 = "POS_2",
	SUPERVISION = "SUPERVISION",
	TRACKING = "TRACKING"
}
export interface SupervisionFormTypeAttributes {
	id?: string;     
	type?: string;  // PREPARING_OPEN_SCHOOL
	name?: string;  // แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน
	schoolId?: string;
	formType?: FormType
}