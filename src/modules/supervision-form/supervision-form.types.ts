

export interface SupervisionFormAttributes {
	id?: string;     
	name?: string;  // แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน 
	detail?: string; 
	term?: string;
	year?: string;
	suggestion?: string;
	supervisorName?: string;
	supervisionFormTypeId?: string;
}



export interface SchoolSupervisionFormAttributes {
	id?: string;
	schoolId? : string;
	supervisionFormId?: string;
	year? : string;
	term? : string;
}