import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { userRouter } from './app/modules/user/user.route';
const app: Application = express();

//parser as middleware
app.use(express.json());
app.use(cors());

//application route
app.use('/api/students', studentRouter);
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
