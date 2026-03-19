import status from 'http-status';
import { Role } from '../../../generated/prisma/client';
import { auth } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import { ICreateDesignerPayload } from './user.interface';
import AppError from '../../errorsHelpers/AppError';

const createDesigner = async (payload: ICreateDesignerPayload) => {
  const designerPayload = payload.designer;

  const existingUser = await prisma.user.findUnique({
    where: { email: designerPayload.email },
  });
  if (existingUser) {
    throw new AppError(status.CONFLICT, 'User with this email already exists');
  }

  const authResult = await auth.api.signUpEmail({
    body: {
      email: designerPayload.email,
      password: payload.password,
      role: Role.DESIGNER,
      name: designerPayload.name,
      needPasswordChange: true,
    },
  });

  if (!authResult.user) {
    throw new AppError(status.BAD_REQUEST, 'Failed to create designer user account');
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const designer = await tx.designer.create({
        data: {
          userId: authResult.user.id,
          name: designerPayload.name,
          email: designerPayload.email,
          profilePhoto: designerPayload.profilePhoto,
          contactNumber: designerPayload.contactNumber,
          address: designerPayload.address,
          displayName: designerPayload.displayName,
          bio: designerPayload.bio,
          expertise: designerPayload.expertise,
          portfolioUrl: designerPayload.portfolioUrl,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              status: true,
              emailVerified: true,
              image: true,
              isDeleted: true,
              deletedAt: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });

      return designer;
    });

    return result;
  } catch (error) {
    await prisma.user.delete({ where: { id: authResult.user.id } });
    throw error;
  }
};

export const UserService = {
  createDesigner,
};
