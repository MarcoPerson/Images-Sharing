import { mongoose } from "../connexion";

let commentSchema = new mongoose.Schema({
  image_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
