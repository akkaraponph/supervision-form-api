# is_supervision_group_monitors

# EP. 1 initial project

### 1.1 create package.json
```
npm init -y
```
### 1.2 install global package for run typescript and sequelize-cli
```bash
npm install --global typescript sequelize-cli nodemon ts-node
``` 
### 1.3 install essential package for api or restful service
```bash
npm install express dotenv jsonwebtoken mysql2 sequelize argon2
```
#### 1.3.1 install type
```bash
npm install --save-dev @types/express @types/jsonwebtoken @types/sequelize
```
- nodemon & ts-node
```bash
npm install --save-dev nodemon ts-node
```
or 
```bash
npm i -D nodemon
```

### 1.4 initial code for src/app.ts

```ts
import express, { Request, Response } from "express"

export const App = () => {
	const app = express()
	app.use(express.json())

	app.get("/", (req: Request, res: Response) => {
		res.end("Hello, World!");
	})

	return app
}

export default App
```

- index.ts
```ts
import App from "./src/app"

const app = App()

app.listen(5000, () => {
	console.log("server is running on port 5000")
})
```

### 1.5 run app
```bash
ts-node index.ts
```



### AKA
- CF = CustomForm
- CFQ = CustomFormQuestion
- RCFQBooleanSection = ResultCustomFormBooleanQuestionSection
- RCFQOpenEndSection = ResultCustomFormOpenEndQuestionSection

- RCFQBooleanSubSection = ResultCustomFormBooleanQuestionSubSection
- RCFQOpenEndSubSection = ResultCustomFormOpenEndQuestionSubSection

============= Question Form
- QF = QuestionForm
- RQF = ResultQuestionForm

============= Rating Scale Form
- RSF = Rating Scale Form
- RSFQ = RatingScaleFormQuestion
- RRSF = ResultRatingScaleForm

test deploy

