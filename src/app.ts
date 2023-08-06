import express, { Request, Response } from "express"
import userRoutes from "./modules/user/users.routes";
import schoolRoutes from "./modules/school/school.routes"
import peronnelRoutes from "./modules/personnel/personnel.routes"
import supervisionFormRoutes from "./modules/supervision-form/supervision-form.routes"
import newsRoutes from './modules/news/news.routes'

import { UserAttributes } from "modules/user/user.types";
import cors from "cors";

declare global {
	namespace Express {
		interface Request {
			user?: UserAttributes,
			cover?: Express.Multer.File | null;
			imageList?: Express.Multer.File[] | null;
		}
	}
	  
}

export const App = () => {

	const app = express()
	app.use(express.json())
	// const corsOptions = {
	// 	origin: ['http://example.com', 'http://localhost:3000', 'http://127.0.0.1:3000'],
	// };

	app.use(cors());
	app.use(express.json({ limit: '20mb' }));
	app.use('/api/supervision_forms', supervisionFormRoutes)
	app.use('/api/users', userRoutes)
	app.use('/api/schools', schoolRoutes)
	app.use('/api/personnels', peronnelRoutes)
	app.use('/api/news', newsRoutes)
	app.get("/api", (req: Request, res: Response) => {
		res.end("Hello, World!");
	})

	app.get("/api/test", (req: Request, res: Response) => {
		res.end("test successfully");
	})

	return app
}

export default App