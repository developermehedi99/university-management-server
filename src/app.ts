import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalError';
import router from './app/routes';
const app: Application = express();

//parser as middleware
app.use(express.json());
app.use(cors());

//application route
app.use('/api/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

export default app;
