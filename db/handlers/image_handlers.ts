import { ImageModel } from "../models/image_model";

const getAllImages = async () => {
  const images = await ImageModel.find({}, null, { sort: "-date" });
  return images;
};

const getImage = async (image_id: any) => {
  const image = await ImageModel.find({ _id: image_id });
  return image;
};

const addImage = async (data: any) => {
  const image = new ImageModel({ ...data });
  return await image.save();
};

export { getImage, addImage, getAllImages };
