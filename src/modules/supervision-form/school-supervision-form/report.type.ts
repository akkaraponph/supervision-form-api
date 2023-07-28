export interface IFormReport {
	id: string
	year: string
	term: string
	supervisionFormId: string
	supervisorName: any
	supervisorPosition: any
	schoolId: string
	createdAt: string
	updatedAt: string
	SupervisionFormId: string
	SchoolId: string
	ResultRSFs: IResultRsf[]
	SupervisionForm: ISupervisionForm
  }
  
  export interface IResultRsf {
	id: string
	score: number
	RSFQuestionId: string
	schoolSupervisionFormId: string
	createdAt: string
	updatedAt: string
	SchoolSupervisionFormId: string
	RSFQuestion: IRsfquestion
  }
  
  export interface IRsfquestion {
	id: string
	question: string
	RSFSectionId: string
	priority: string
	RSFSection: IRsfsection
  }
  
  export interface IRsfsection {
	id: string
	type: string
	supervisionFormId: string
	priority: string
	createdAt: any
	updatedAt: any
	SupervisionFormId: string
  }
  
  export interface ISupervisionForm {
	id: string
	name: string
	detail: string
	suggestion: string
	supervisionFormTypeId: string
	createdAt: string
	updatedAt: string
	SupervisionFormTypeId: string
	SupervisionFormType: ISupervisionFormType
  }
  
  export interface ISupervisionFormType {
	id: string
	type: string
	name: string
	formType: string
	createdAt: string
	updatedAt: string
  }
  