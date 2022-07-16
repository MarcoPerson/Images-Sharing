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
    type: String,
    required: true,
  },
});

const CommentModel = mongoose.model("Image", commentSchema);

export { CommentModel };
