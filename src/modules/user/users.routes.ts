import { Router, Response, Request } from "express";
import userController from "./user.controllers";
import { authMiddleware } from "../../middlewares/auth.midleware";
const router = Router();

router.get('/id/:id', userController.getOne)
router.get('', userController.getAll)
router.get('/me', authMiddleware, userController.me)
router.post('/', userController.create)
router.post('/login', userController.login)
router.patch('/:id', userController.update)
router.delete('/:id', userController.remove)



// router.get('/get/:id', authMiddleware, userController.getOne)
// router.get('/', authMiddleware, userController.getAll)
// router.get('/me', authMiddleware, userController.me)
// router.post('/', userController.create)
// // router.post('/register', userController.register)
// router.post('/login', userController.login)
// router.patch('/:id', authMiddleware, userController.update)
// router.delete('/:id', authMiddleware, userController.remove)

export default router;