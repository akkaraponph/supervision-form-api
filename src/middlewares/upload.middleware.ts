// imageUploadMiddleware.ts
import express from 'express';
import multer from 'multer';

// Create an instance of the Express Router
const router = express.Router();

// Set up the multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder where the uploaded images will be saved
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    // Define the filename for the uploaded image (you can customize this as needed)
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  // Check if the uploaded file is an image
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed.'), false);
  }
};

// Set up the multer middleware with the defined storage and fileFilter
const upload = multer({ storage, fileFilter });

// Export the router and upload middleware
export { router, upload };
