import { NextApiRequest, NextApiResponse } from "next";
import {
  addImage,
  getAllImages,
  getImage,
} from "../db/handlers/image_handlers";

export const getAllImagesRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const images = await getAllImages();
    res.json({ data: images });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};

export const getImageRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const image = await getImage(id);
    res.json({ data: image[0] });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};

export const addImageRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const image = await addImage(req.body);
    res.json({ data: image });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};
