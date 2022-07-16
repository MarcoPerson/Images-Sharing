const Joi = require("joi");
import type { NextApiRequest, NextApiResponse } from "next";

const addImageValidator = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    await Joi.object({
      name: Joi.string().required(),
      public_url: Joi.string().required(),
      username: Joi.string().required(),
      profile_image: Joi.string().required(),
      date: Joi.string().required(),
    });
  } catch (error) {
    next(error);
  }
};

const getImageValidator = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    await Joi.object({
      image_id: Joi.string().required(),
    });
  } catch (error) {
    next(error);
  }
};

export { addImageValidator, getImageValidator };
