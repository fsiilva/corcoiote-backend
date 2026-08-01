import express from 'express';
import CustomerRouter from './routes/customer.route.ts';
import requestLogger from './middlewares/requestLogger.ts';
import errorHandler from './middlewares/errorHandler.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use(errorHandler);

app.listen(3000);
