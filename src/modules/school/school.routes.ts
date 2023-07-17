import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import schoolController from "./school.controllers";
const router = Router();

router.get('/id/:id', authMiddleware, schoolController.getOne)
router.get('/', schoolController.getAll)
router.get('/me/', authMiddleware, schoolController.getByUser)
router.post('/', schoolController.create)
router.patch('/update/:id', authMiddleware, schoolController.update)
router.patch('/update/me/', authMiddleware, schoolController.updateByUser)
router.delete('/delete/:id', authMiddleware, schoolController.remove)

export default router;