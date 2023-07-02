import { Response } from 'express';

interface ApiResponse {
  msg: string;
  meta?: object;
  payload?: object;
}

export const createResponse = (
  res: Response,
  statusCode: number,
  data: ApiResponse
): Response => {
  return res.status(statusCode).json(data);
};
