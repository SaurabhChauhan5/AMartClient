export const getImageUrl = (imagePath) => {
  // Return if it's a Cloudinary URL
  if (imagePath?.includes('cloudinary.com')) {
    return imagePath;
  }
  // Handle local images by prepending API URL
  return `${import.meta.env.VITE_API_IMAGE_URL}/${imagePath}`;
};
