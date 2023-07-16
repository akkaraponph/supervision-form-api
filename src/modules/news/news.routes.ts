import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import newsController from './news.controllers'
const router = Router();

router.get('/:id', newsController.getOne)
router.get('/', newsController.getAll)
router.post('/', newsController.create)
router.patch('/:id', newsController.update)
router.delete('/:id', newsController.remove)

export default router;