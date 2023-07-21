import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import supervisionFormTypeControllers from "./supervision-form-type.controllers";
import supervisionFormControllers from "./supervision-form.controllers";
import RSFSectionControllers from "./rating-scale-form/rsf-section.controllers";
import RSFQuestionControllers from "./rating-scale-form/rsf-question.controllers";
import ResultRSFControllers from "./rating-scale-form/rsf-result.controllers";
import CFSectionControllers from "./custom-form/cf-section.controllers";
import CFSubSectionControllers from "./custom-form/cf-sub-section.controllers";
import CFQSectionControllers from "./custom-form/cfq-section.controllers";
import CFQSubSectionControllers from "./custom-form/cfq-sub-section.controllers";
import ResultCFBQSectionControllers from "./custom-form/result-cfbq-section.controllers"
import ResultCFOEQSectionControllers from "./custom-form/result-cfoeq-section.controllers"
import ResultCFBQSubSectionControllers from "./custom-form/result-cfbq-sub-section.controllers"
import ResultCFOEQSubSectionControllers from "./custom-form/result-cfoeq-sub-section.controllers"

import QFControllers from "./question-form/qf.controllers";
import ResultQFBQControllers from "./question-form/result-qfbq.controllers";
import ResultQFOEQControllers from "./question-form/result-qfoeq.controllers";
import SchoolSupervisionFormControllers from "./school-supervision-form/school-supervision-form.controllers"

const router = Router();

// ชื่อ แบบ ฟอร์มทั้ง 18 ฟอร์ม
router.get('', supervisionFormControllers.getAll)
router.post('/clone', supervisionFormControllers.cloningByTermAndYear)
router.get('/year', supervisionFormControllers.getAllExistingYears)
router.get('/id/:id', supervisionFormControllers.getOne)
router.post('/create', supervisionFormControllers.create)
router.patch('/update/:id', supervisionFormControllers.update)
router.delete('/delete/:id', supervisionFormControllers.destroy)

router.get('/types', supervisionFormTypeControllers.getAll)
router.get('/types/id/:id', supervisionFormTypeControllers.getOne)
router.post('/types/create', supervisionFormTypeControllers.create)
router.patch('/types/update/:id', supervisionFormTypeControllers.update)
router.delete('/types/delete/:id', supervisionFormTypeControllers.destroy)

// rating scale form section
router.get('/rsf', RSFSectionControllers.getAll)
router.get('/rsf/id/:id', RSFSectionControllers.getOne)
router.post('/rsf/create', RSFSectionControllers.create)
router.patch('/rsf/update/:id', RSFSectionControllers.update)
router.delete('/rsf/delete/:id', RSFSectionControllers.destroy)


// rating scale form question
router.get('/rsf/question', RSFQuestionControllers.getAll)
router.get('/rsf/question/id/:id', RSFQuestionControllers.getOne)
router.post('/rsf/question/create', RSFQuestionControllers.create)
router.patch('/rsf/question/update/:id', RSFQuestionControllers.update)
router.delete('/rsf/question/delete/:id', RSFQuestionControllers.destroy)

// result rating scale form
router.get('/rsf/question/result', ResultRSFControllers.getAll)
router.get('/rsf/question/result/id/:id', ResultRSFControllers.getOne)
router.post('/rsf/question/result/create', ResultRSFControllers.create)
router.patch('/rsf/question/result/update/:id', ResultRSFControllers.update)
router.delete('/rsf/question/result/delete/:id', ResultRSFControllers.destroy)

// question form
router.get('/qf', QFControllers.getAll)
router.get('/qf/id/:id', QFControllers.getOne)
router.post('/qf/create', QFControllers.create)
router.patch('/qf/update/:id', QFControllers.update)
router.delete('/qf/delete/:id', QFControllers.destroy)

// result question form
router.get('/qf/boolean/result', ResultQFBQControllers.getAll)
router.get('/qf/boolean/result/id/:id', ResultQFBQControllers.getOne)
router.post('/qf/boolean/result/create', ResultQFBQControllers.create)
router.patch('/qf/boolean/result/update/:id', ResultQFBQControllers.update)
router.delete('/qf/boolean/result/delete/:id', ResultQFBQControllers.destroy)

router.get('/qf/open_end/result', ResultQFOEQControllers.getAll)
router.get('/qf/open_end/result/id/:id', ResultQFOEQControllers.getOne)
router.post('/qf/open_end/result/create', ResultQFOEQControllers.create)
router.patch('/qf/open_end/result/update/:id', ResultQFOEQControllers.update)
router.delete('/qf/open_end/result/delete/:id', ResultQFOEQControllers.destroy)

// custom form section
router.get('/cf/section', CFSectionControllers.getAll)
router.get('/cf/section/id/:id', CFSectionControllers.getOne)
router.post('/cf/section/create', CFSectionControllers.create)
router.patch('/cf/section/update/:id', CFSectionControllers.update)
router.delete('/cf/section/delete/:id', CFSectionControllers.destroy)

// custom form sub section
router.get('/cf/sub_section', CFSubSectionControllers.getAll)
router.get('/cf/sub_section/id/:id', CFSubSectionControllers.getOne)
router.post('/cf/sub_section/create', CFSubSectionControllers.create)
router.patch('/cf/sub_section/update/:id', CFSubSectionControllers.update)
router.delete('/cf/sub_section/delete/:id', CFSubSectionControllers.destroy)

// custom form question of section
router.get('/cf/section/question', CFQSectionControllers.getAll)
router.get('/cf/section/question/id/:id', CFQSectionControllers.getOne)
router.post('/cf/section/question/create', CFQSectionControllers.create)
router.patch('/cf/section/question/update/:id', CFQSectionControllers.update)
router.delete('/cf/section/question/delete/:id', CFQSectionControllers.destroy)

// custom form result question of sub section
router.get('/cf/sub_section/question', CFQSubSectionControllers.getAll)
router.get('/cf/sub_section/question/id/:id', CFQSubSectionControllers.getOne)
router.post('/cf/sub_section/question/create', CFQSubSectionControllers.create)
router.patch('/cf/sub_section/question/update/:id', CFQSubSectionControllers.update)
router.delete('/cf/sub_section/question/delete/:id', CFQSubSectionControllers.destroy)

// custom form result boolean question of section
router.get('/cf/section/question/boolean/result', ResultCFBQSectionControllers.getAll)
router.get('/cf/section/question/boolean/result/id/:id', ResultCFBQSectionControllers.getOne)
router.post('/cf/section/question/boolean/result/create', ResultCFBQSectionControllers.create)
router.patch('/cf/section/question/boolean/result/update/:id', ResultCFBQSectionControllers.update)
router.delete('/cf/section/question/boolean/result/delete/:id', ResultCFBQSectionControllers.destroy)

// custom form result boolean question of section
router.get('/cf/section/question/open_end/result', ResultCFOEQSectionControllers.getAll)
router.get('/cf/section/question/open_end/result/id/:id', ResultCFOEQSectionControllers.getOne)
router.post('/cf/section/question/open_end/result/create', ResultCFOEQSectionControllers.create)
router.patch('/cf/section/question/open_end/result/update/:id', ResultCFOEQSectionControllers.update)
router.delete('/cf/section/question/open_end/result/delete/:id', ResultCFOEQSectionControllers.destroy)


// custom form result boolean question of sub section
router.get('/cf/sub_section/question/boolean/result', ResultCFBQSubSectionControllers.getAll)
router.get('/cf/sub_section/question/boolean/result/id/:id', ResultCFBQSubSectionControllers.getOne)
router.post('/cf/sub_section/question/boolean/result/create', ResultCFBQSubSectionControllers.create)
router.patch('/cf/sub_section/question/boolean/result/update/:id', ResultCFBQSubSectionControllers.update)
router.delete('/cf/sub_section/question/boolean/result/delete/:id', ResultCFBQSubSectionControllers.destroy)

// custom form result boolean question of section
router.get('/cf/sub_section/question/open_end/result', ResultCFOEQSubSectionControllers.getAll)
router.get('/cf/sub_section/question/open_end/result/id/:id', ResultCFOEQSubSectionControllers.getOne)
router.post('/cf/sub_section/question/open_end/result/create', ResultCFOEQSubSectionControllers.create)
router.patch('/cf/sub_section/question/open_end/result/update/:id', ResultCFOEQSubSectionControllers.update)
router.delete('/cf/sub_section/question/open_end/result/delete/:id', ResultCFOEQSubSectionControllers.destroy)

router.get('/school', SchoolSupervisionFormControllers.getAll)
router.get('/school/id/:id', SchoolSupervisionFormControllers.getOne)
router.get('/school/education_year', authMiddleware, SchoolSupervisionFormControllers.getOneByTermAndYear)
router.post('/school/create', SchoolSupervisionFormControllers.create)
router.patch('/school/update/:id', SchoolSupervisionFormControllers.update)
router.delete('/school/delete/:id', SchoolSupervisionFormControllers.destroy)

export default router;