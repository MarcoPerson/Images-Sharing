export type ImageType = {
  id: number;
  name: string;
  public_url: string;
  username: string;
  date: string;
};

export type CommentType = {
  id: number;
  image_id: number;
  username: string;
  comment: string;
  date: string;
};
