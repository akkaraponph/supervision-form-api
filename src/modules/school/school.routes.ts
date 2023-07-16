import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import schoolController from "./school.controllers";
const router = Router();

router.get('/:id', authMiddleware, schoolController.getOne)
router.get('/', schoolController.getAll)
router.get('/me/', authMiddleware, schoolController.getByUser)
router.post('/', schoolController.create)
router.patch('/:id', authMiddleware, schoolController.update)
router.delete('/:id', authMiddleware, schoolController.remove)

export default router;