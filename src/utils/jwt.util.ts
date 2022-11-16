import jwt from 'jsonwebtoken';

const newToken = (payload: object) => jwt.sign(
  { payload },
  process.env.JWT_SECRET as string,
  { expiresIn: '7d', algorithm: 'HS256' },
);

export default newToken;