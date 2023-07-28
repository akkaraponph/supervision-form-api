import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import supervisionFormTypeControllers from "./supervision-form-type.controllers";
import supervisionFormControllers from "./supervision-form.controllers";
import RSFSectionControllers from "./rating-scale-form/rsf-section.controllers";
import RSFQuestionControllers from "./rating-scale-form/rsf-question.controllers";
import ResultRSFControllers from "./rating-scale-form/rsf-result.controllers";

import SchoolSupervisionFormControllers from "./school-supervision-form/school-supervision-form.controllers"

const router = Router();

// ชื่อ แบบ ฟอร์มทั้ง 18 ฟอร์ม
router.get('', supervisionFormControllers.getAll)
// router.post('/clone', supervisionFormControllers.cloningByTermAndYear)
router.get('/clone', authMiddleware,supervisionFormControllers.cloningSchoolSupevisionFormByTermAndYear)

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
router.get('/rsf/question/result/id/question/:id', ResultRSFControllers.getOneByQuestionId)
router.post('/rsf/question/result/create', ResultRSFControllers.create)
router.patch('/rsf/question/result/update/:id', ResultRSFControllers.update)
router.delete('/rsf/question/result/delete', ResultRSFControllers.destroy)

router.get('/school', SchoolSupervisionFormControllers.getAll)
router.get('/school/id/:id', SchoolSupervisionFormControllers.getOne)
router.get('/school/education_year', authMiddleware, SchoolSupervisionFormControllers.getOneByTermAndYear)
router.get('/school/rsf', authMiddleware, SchoolSupervisionFormControllers.getOneByTermAndYearBySchoolId)

router.post('/school/create', SchoolSupervisionFormControllers.create)
router.patch('/school/update/:id', SchoolSupervisionFormControllers.update)
router.delete('/school/delete/:id', SchoolSupervisionFormControllers.destroy)


router.get('/rsf_open_school_report', authMiddleware, supervisionFormControllers.getRSFOpenSchoolReportByTermAndYear)

// getAllReport
router.get('/report', SchoolSupervisionFormControllers.getAllReport)


export default router;