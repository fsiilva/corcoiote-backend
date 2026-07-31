import express from 'express';
import CustomerRouter from './routes/customer.route.ts';
import requestLogger from './middlewares/requestLogger.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/customers', CustomerRouter);

app.listen(3000);
