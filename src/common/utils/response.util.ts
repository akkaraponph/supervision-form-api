import { Response } from 'express';

interface ApiResponse {
  msg: string;
  meta?: object;
  payload?: object | any;
}

export const createResponse = (
  res: Response,
  statusCode: number,
  data: ApiResponse,
  status: string,
): Response => {
  return res.status(statusCode).json(data);
};
