import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import personnelController from "./personnel.controllers";
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
router.patch('/update/:id', personnelController.update)
router.patch('/update/me/', authMiddleware, personnelController.updateByUser)
router.delete('/delete/:id', personnelController.remove)

export default router;