import { z } from 'zod';

export const updateDesignerZodSchema = z.object({
  designer: z.object({
    name: z.string("Name is must be string").min(2, 'Name must be at least 2 characters'),
    profilePhoto: z.url('Profile photo must be a valid URL').optional(),
    contactNumber: z.string("Contact number must be string").optional(),
    address: z.string("Address must be string").optional(),
    displayName: z.string("Display name must be string").optional(),
    bio: z.string("Bio must be string").max(2000).optional(),
    expertise: z.string("Expertise must be string").optional(),
    portfolioUrl: z.string().url('Portfolio URL must be valid').optional(),
  }).optional(),
});
