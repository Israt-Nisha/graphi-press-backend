import { Request, Response } from 'express';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import { UserService } from './user.service';
import {  } from './user.validation';
import status from 'http-status';


const createDesigner = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserService.createDesigner(payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: 'Designer created successfully',
    data: result,
  });
});

export const UserController = {
  createDesigner,
};
