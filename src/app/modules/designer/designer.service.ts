
import status from 'http-status';
import AppError from '../../errorsHelpers/AppError';
import { prisma } from '../../lib/prisma';
import { IUpdateDesignerPayload } from './designer.interface';


const getAllDesigners = async () => {
    return prisma.designer.findMany({
        where: { isDeleted: false },
        include: {
            user: true,
        },
    });
};

const getDesignerById = async (id: string) => {
    return prisma.designer.findFirst({
        where: { id, isDeleted: false },
        include: {
            user: true,
        },
    });
};


const updateDesigner = async (id: string, payload: IUpdateDesignerPayload) => {
    const { designer } = payload;

    if (!designer || Object.keys(designer).length === 0) {
        throw new AppError(status.BAD_REQUEST, 'No designer data provided for update');
    }

    const existingDesigner = await prisma.designer.findFirst({
        where: { id, isDeleted: false },
    });

    if (!existingDesigner) {
        throw new AppError(status.NOT_FOUND,'Designer not found');
    }

    return prisma.designer.update({
        where: { id },
        data: designer,
    });
};

const deleteDesigner = async (id: string) => {
    const existingDesigner = await prisma.designer.findFirst({
        where: { id, isDeleted: false },
    });

    if (!existingDesigner) {
        throw new AppError(status.NOT_FOUND, 'Designer not found');
    }

    return prisma.designer.update({
        where: { id },
        data: { isDeleted: true, deletedAt: new Date() },
    });
};

export const DesignerService = {
    getAllDesigners,
    getDesignerById,
    updateDesigner,
    deleteDesigner,
};
