import { z } from 'zod';


export const createDesignerZodSchema = z.object({
  password: z.string("Password is required").min(8, 'Password must be at least 8 characters'),
  designer: z.object({
    name: z.string("Name is required").min(2, 'Name must be at least 2 characters'),
    email: z.string("Email is required").email('Invalid email address'),
    profilePhoto: z.string("Profile photo is required").url('Profile photo must be a valid URL').optional(),
    contactNumber: z.string("Contact number is required").optional(),
    address: z.string("Address is required").optional(),
    displayName: z.string("Display name is required").optional(),
    bio: z.string("Bio is required").max(2000).optional(),
    expertise: z.string("Expertise is required").optional(),
    portfolioUrl: z.string("Portfolio URL is required").url('Portfolio URL must be valid').optional(),
  }),
});

