import { CommentModel } from "../models/comment_model";

const getAllComments = async () => {
  const comments = await CommentModel.find({});
  return comments;
};

const getImageComments = async (image_id: any) => {
  const comments = await CommentModel.find({ image_id: image_id });
  return comments;
};

const addComment = async (data: any) => {
  const comment = new CommentModel({ ...data });
  return await comment.save();
};

export { getAllComments, getImageComments, addComment };
