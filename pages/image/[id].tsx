import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import "antd/dist/antd.css";

import { ImageType, CommentType } from "../../interfaces";
import Layout from "../../components/Layout";
import ImageDetail from "../../components/ImageDetail";

type Props = {
  data: ImageType;
  comments: CommentType[];
};

export default function ImageView({ data, comments }: Props) {
  return (
    <Layout title={`Image : ${data.id} - ${data.name}`}>
      <ImageDetail data={data} comments={comments} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dataFetch = await fetch("http://localhost:3000/api/get");
  const itemsJSon = await dataFetch.json();
  const items: ImageType[] = itemsJSon.data;

  const paths = items.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id: number = 0;
  let defaultImage: ImageType = { id: 0, name: "", public_id: "", username: "", date:"" };
  if (params && params.id && typeof params.id === "string") {
    id = parseInt(params.id);
  }

  const dataFetch = await fetch("http://localhost:3000/api/get");
  var itemsJSon = await dataFetch.json();
  const items: ImageType[] = itemsJSon.data;

  const data: ImageType = items.find((item) => item.id == id) || defaultImage;

  const commentFetch = await fetch("http://localhost:3000/api/commentsGet");
  itemsJSon = await commentFetch.json();
  const comments: CommentType[] = itemsJSon.data;
  return { props: { data, comments } };
};
