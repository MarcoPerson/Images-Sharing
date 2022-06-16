import React from "react";

import { Image } from "antd";

import { ImageType, CommentType } from "../interfaces";
import Comments from "./Comments";

type Props = {
  data: ImageType;
  comments: CommentType[];
};

export default function ImageDetail({ data, comments }: Props) {
  return (
    <>
      <Image src={data.public_id} alt={data.name}></Image>
      <Comments comments={comments} />
    </>
  );
}
