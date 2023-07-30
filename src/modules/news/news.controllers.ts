import { Request, Response } from "express";
import db from "../../database/models";
import fs from 'fs';
import path from 'path';

const NewsModel = db.News



export const uploadImages = async (req: Request, res: Response) => {
	try {
		// Get the news ID from the request
		const newsId = req.params.newsId;

		// Check if the files were uploaded successfully
		if (!req.files || req.files.length === 0) {
			return res.status(400).json({ error: 'No image files uploaded' });
		}

		// Cast req.files to MulterFile[]
		const imageFilePaths = (req.files as Express.Multer.File[]).map((file) => file.path).join(';');

		// Find the news by ID
		const news = await db.News.findByPk(newsId);

		if (!news) {
			return res.status(404).json({ error: 'News not found' });
		}

		// Save the concatenated image file paths to the imageList field
		news.imageList = imageFilePaths;

		// Save the updated news
		await news.save();

		// Respond with a success message or other response
		res.json({ message: 'Images uploaded successfully!' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const create = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		// const news = await NewsModel.create({ ...body });
		let cover = "";

		const formData = req.files as {
			cover?: Express.Multer.File[];
			imageList?: Express.Multer.File[];
		};

		if (formData.cover) {
			cover = formData.cover[0].filename;
		}

		const imageListFilenames = formData.imageList ? formData.imageList.map(file => file.filename).join(';') : '';

		const newNews = {
			...body,
			cover,
			imageList: imageListFilenames
		}
		// console.log(newNews)
		const response = await db.News.create(newNews)
		return res.json({
			msg: `create news was successfully`,
			payload: response
		})
	} catch (error) {
		// console.log(error)
		return res.status(400).json({
			msg: "create news was failed",
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {
		const news = await NewsModel.findAll();

		res.json({
			msg: `get all news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one news was failed",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const news = await NewsModel.findOne({
			where: { id }
		});

		res.json({
			msg: `get one news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one news was failed",
			payload: {}
		})
	}
}

// export const update = async (req: Request, res: Response) => {
// 	try {
// 	  const id = req.params?.id;
// 	  const body = req.body;
  
// 	  // Check if the file was uploaded successfully
// 	  if (!req.file) {
// 		return res.status(400).json({ error: 'No image file uploaded' });
// 	  }
  
// 	  const imageFilePath = req.file.filename;
  
// 	  // Find the News by id
// 	  const news = await NewsModel.findOne({ where: { id } });
  
// 	  if (!news) {
// 		return res.status(404).json({ error: 'News not found' });
// 	  }
  
// 	  if (news.cover) {
// 		// Construct the full path to the image file
// 		const imagePath = path.join(__dirname, '../../../public/uploads/news/covers', news.cover);
  
// 		if (fs.existsSync(imagePath)) {
// 		  try {
// 			fs.unlinkSync(imagePath);
// 			console.log('Previous image removed:', imagePath);
// 		  } catch (err) {
// 			console.error('Error removing previous image:', err);
// 		  }
// 		}
// 	  }
  
// 	  // Update the news cover property with the file path
// 	  await NewsModel.update({ ...body, cover: imageFilePath }, {
// 		where: { id }
// 	  });
  
// 	  // Respond with a success message or other response
// 	  res.json({ message: 'News updated successfully!' });
// 	} catch (err) {
// 	  console.error(err);
// 	  res.status(500).json({ error: 'Internal server error' });
// 	}
//   };

export const update = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const body = req.body;

		const news = await NewsModel.update({ ...body }, {
			where: { id }
		});
		res.json({
			msg: `update news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "update news was failed",
			payload: {}
		})
	}
}

export const remove = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const news = await NewsModel.destroy({
			where: { id }
		});
		res.json({
			msg: `delete news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "delete news was failed",
			payload: {}
		})
	}
}

export const uploadCover = async (req: Request, res: Response) => {
	try {
		const uid = req.user?.id;
		const responseNews = await db.News.findOne({
			where: { userId: uid }, raw: true
		})
		const newsId = responseNews.id
		// Check if the file was uploaded successfully
		if (!req.file) {
			return res.status(400).json({ error: 'No image file uploaded' });
		}
		const imageFilePath = req.file.filename;

		// Find the News by id
		const response = await db.News.findOne({ where: { id: newsId }, raw: true });

		if (!response) {
			return res.status(404).json({ error: 'News not found' });
		}

		if (response.image) {
			// Construct the full path to the image file

			const imagePath = `public/uploads/news/covers/${response.image}`
			if (fs.existsSync(imagePath)) {
				try {
					fs.unlinkSync(imagePath);
					console.log('Previous image removed:', imagePath);
				} catch (err) {
					console.error('Error removing previous image:', err);
				}
			}
		}

		// Update the personnel's image property with the file path
		await db.Personnel.update({ ...response, cover: imageFilePath }, {
			where: { id: newsId }
		})

		// Respond with a success message or other response
		res.json({ message: 'News image uploaded successfully!' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal server error' });
	}
}



export const getImageCover = async (req: Request, res: Response) => {
	try {
		const imageName = req.params.name;
		const imagePath = path.join(__dirname, '../../../public/uploads/news/covers', imageName);
    	res.sendFile(imagePath);
	} catch (err) {
		console.error(err);
		res.status(400).json({ error: 'Internal server error' });
	}
}
export const getImage = async (req: Request, res: Response) => {
	try {
		const imageName = req.params.name;
		const imagePath = path.join(__dirname, '../../../public/uploads/news', imageName);
    	res.sendFile(imagePath);
	} catch (err) {
		console.error(err);
		res.status(400).json({ error: 'Internal server error' });
	}
}

export default {
	create,
	getAll,
	getOne,
	update,
	remove,
	uploadCover,
	getImageCover,
	getImage
}