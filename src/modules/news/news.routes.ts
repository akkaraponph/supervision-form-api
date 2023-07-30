import { Router, Response, Request } from "express";
import { authMiddleware } from "../../middlewares/auth.midleware";
import newsController from './news.controllers'
import { uploadNews } from "../../middlewares/upload-news.middleware";

const router = Router();

router.get('/id/:id', newsController.getOne)
router.get('', newsController.getAll)

// router.post('/create',
// 	uploadCover.single('cover'),
// 	uploadCover.array('imageList'),
// 	newsController.create)

router.post('/create', uploadNews.fields([
	{ name: 'cover', maxCount: 1 },
	{ name: 'imageList', maxCount: 10 }
  ]), newsController.create);

// router.post('/create',
// 	uploadNews.fields([
// 		{ name: 'cover', maxCount: 1 },
// 		{ name: 'imageList', maxCount: 10 }
// 	]),
// 	newsController.create,
// );

router.get('/image/cover/:name', newsController.getImageCover)
router.delete('/image/cover/:name', newsController.deleteCoverImage)

router.get('/image/:name', newsController.getImage)
router.delete('/image/:name', newsController.deleteImage)

router.post('/upload', newsController.create)

// router.patch('/upadate/:id', newsController.update)
router.patch('/upadate/:id', uploadNews.fields([
	{ name: 'cover', maxCount: 1 },
	{ name: 'imageList', maxCount: 10 }
  ]), newsController.update);

router.delete('/delete/:id', newsController.remove)


export default router;