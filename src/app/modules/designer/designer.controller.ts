import { Request, Response } from 'express';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import { DesignerService } from './designer.service';
import status from 'http-status';



const getAllDesigners = catchAsync(async (_req: Request, res: Response) => {
  const result = await DesignerService.getAllDesigners();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: 'Designers fetched successfully',
    data: result,
  });
});

const getDesignerById = catchAsync(async (req: Request, res: Response) => {
 
    const { id } = req.params;
  const result = await DesignerService.getDesignerById(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: 'Designer fetched successfully',
    data: result,
  });
});

const updateDesigner = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await DesignerService.updateDesigner(id as string, payload);
    sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: 'Designer updated successfully',
    data: result,
  });
});


const deleteDesigner = catchAsync(async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await DesignerService.deleteDesigner(id as string);

        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Designer deleted successfully",
            data: result,
        })
    })


export const DesignerController = {
  getAllDesigners,
  getDesignerById,
  updateDesigner,
  deleteDesigner,
};