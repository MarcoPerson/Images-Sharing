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
    type: String,
    required: true,
  },
});

const ImageModel = mongoose.model("Image", imageSchema);

export { ImageModel };
