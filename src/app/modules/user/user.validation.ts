import { z } from 'zod';


export const createDesignerZodSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  designer: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    profilePhoto: z.string().url('Profile photo must be a valid URL').optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
    displayName: z.string().optional(),
    bio: z.string().max(2000).optional(),
    expertise: z.string().optional(),
    portfolioUrl: z.string().url('Portfolio URL must be valid').optional(),
  }),
});

