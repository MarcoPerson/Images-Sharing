import { ImageModel } from "../model/image";

const getAllImages = async () => {
  const images = await ImageModel.find({});
  return images;
};

const getImage = async (image_id: string) => {
  const image = await ImageModel.find({ _id: image_id });
  return image;
};

const addImage = async (data: any) => {
  const image = new ImageModel({ ...data });
  return await image.save();
};

export { getImage, addImage, getAllImages };
