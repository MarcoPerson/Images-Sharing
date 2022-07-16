const Joi = require("joi");
import type { NextApiRequest, NextApiResponse } from "next";

const addCommentValidator = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    await Joi.object({
      image_id: Joi.string().required(),
      username: Joi.string().required(),
      comment: Joi.string().required(),
      profile_image: Joi.string().required(),
      date: Joi.string().required(),
    });
  } catch (error) {
    next(error);
  }
};

const getCommentValidator = async (
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

export { addCommentValidator, getCommentValidator };
