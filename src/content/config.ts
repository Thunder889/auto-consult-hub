import { defineCollection, z } from 'astro:content';

// Define car collection schema
const carCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    year: z.number(),
    price: z.string(),
    mileage: z.string(),
    location: z.string(),
    image: z.string(),
    description: z.string(),
    externalLink: z.string(),
    fullDetails: z.object({
      engine: z.string(),
      power: z.string(),
      transmission: z.string(),
      drive: z.string(),
      fuel: z.string(),
      color: z.string(),
      features: z.array(z.string())
    })
  })
});

// Export collections
export const collections = {
  'cars': carCollection
}; 