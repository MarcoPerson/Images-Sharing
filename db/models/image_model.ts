import { mongoose } from "../connexion";

let imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  public_url: {
    type: String,
    required: true,
  },
  username: {
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

export const ImageModel =
  mongoose.models.Image || mongoose.model("Image", imageSchema);
