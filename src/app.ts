import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './modules/student/student.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import router from './router';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
    res.send("<h1 style='text-align: center; color: gray;'>Backend CRUD app</h1>")
})

// route not found
app.use('*', notFound);

// global error handler middleware
app.use(globalErrorHandler);

export default app;