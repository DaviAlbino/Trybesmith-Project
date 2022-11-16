import express from 'express';
import orderRouter from './router/ordersRouter';

import productRouter from './router/productsRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
