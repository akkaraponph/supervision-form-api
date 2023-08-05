import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import personnelController from "./personnel.controllers";
import personnelSchoolController from "./personnel-school.controllers";

import { upload } from "../../middlewares/upload.middleware";
const router = Router();

// router.get('/:id', authMiddleware, personnelController.getOne)
// router.get('/', authMiddleware, personnelController.getAll)
// router.post('/', authMiddleware, personnelController.create)
// router.patch('/:id', authMiddleware, personnelController.update)
// router.delete('/:id', authMiddleware, personnelController.remove)

router.get('/id/:id', personnelController.getOne)
router.get('/', personnelController.getAll)
router.get('/me/', authMiddleware, personnelController.getByUser)
router.post('/', personnelController.create)
router.patch('/update/id/:id', personnelController.update)
router.patch('/update/me', authMiddleware, personnelController.updateByUser)
router.delete('/delete/:id', personnelController.remove)

router.post('/upload', authMiddleware, upload.single('image'), personnelController.uploadImage);
router.get('/image/:name', personnelController.getImage);


router.get('/school/id/:id', personnelSchoolController.getOne)
router.get('/school/', personnelSchoolController.getAll)
router.get('/school/personnel/:id', personnelSchoolController.getByPersonnel)
router.post('/school/', personnelSchoolController.create)
router.patch('/school/update/id/:id', personnelSchoolController.update)
router.delete('/school/delete/:id', personnelSchoolController.remove)

export default router;