# Car Images and Data

This directory contains the car data for the website. The data is structured as a JSON file that follows the schema defined in `src/content/config.ts`.

## How to Add New Cars

1. Place car images in the `public/images/cars/products/` directory.
2. Update the `car-data.json` file with the new car information.

## Image Requirements

- Image format: JPG, PNG, or WebP (WebP recommended for better performance)
- Recommended size: 1200×750px (16:10 aspect ratio)
- File naming: Use a descriptive name for the car (e.g., `ModelNameYear.jpg`)

## Car Data Schema

Each car entry should follow this structure:

```json
{
  "id": 1,
  "title": "Car Model Name",
  "year": 2023,
  "price": "€XX,XXX",
  "mileage": "XX,XXX km",
  "location": "Country",
  "image": "/images/cars/products/ImageFileName.jpg",
  "description": "Detailed description of the car",
  "externalLink": "Link to original listing",
  "fullDetails": {
    "engine": "Engine specs",
    "power": "Power specs",
    "transmission": "Transmission type",
    "drive": "Drive type",
    "fuel": "Fuel type",
    "color": "Color",
    "features": [
      "Feature 1",
      "Feature 2",
      "..."
    ]
  }
}
```

## Image Optimization

Images are automatically optimized by Astro when using the `<Image>` component in the CarsSection.astro file. The component handles:

- Responsive sizing
- Format conversion
- Lazy loading
- Image compression 