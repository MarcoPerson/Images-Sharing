import { NextApiRequest, NextApiResponse } from "next";
import {
  addComment,
  getAllComments,
  getImageComments,
} from "../db/handlers/comment_handlers";

export const getAllCommentsRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const comments = await getAllComments();
    res.json({ data: comments });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};

export const getCommentRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const comments = await getImageComments(id);
    res.json({ data: comments });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};

export const addCommentRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const comment = await addComment(req.body);
    res.json({ data: comment });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Une erreur est survenue. Veuillez réessayer." });
  }
};
