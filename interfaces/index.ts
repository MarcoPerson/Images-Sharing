export type ImageType = {
  _id: string;
  name: string;
  public_url: string;
  username: string;
  profile_image: string;
  date: string;
};

export type CommentType = {
  _id: string;
  image_id: string;
  username: string;
  comment: string;
  profile_image: string;
  date: string;
};
