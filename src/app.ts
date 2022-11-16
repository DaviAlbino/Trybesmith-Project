import express from 'express';

import productRouter from './router/productsRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
