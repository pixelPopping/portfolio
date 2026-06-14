export const getImageUrl = (path) => {
  console.log("IMAGE PATH:", path);

  if (!path) {
    console.error("IMAGE PATH IS UNDEFINED");
    return "";
  }

  return new URL(`/assets/${path}`, import.meta.url).href;
};