import z from "zod";


export const createCategoryZodSchema = z.object({
    name: z.string("Name is required").min(1, "Name cannot be empty"),
    slug: z.string("Slug is required").min(1, "Slug cannot be empty"),
    icon: z.string().optional()
});

export const updateCategoryZodSchema = z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    icon: z.string().optional()
});


