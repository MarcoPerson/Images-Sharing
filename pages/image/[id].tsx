import { GetServerSideProps, GetStaticPaths } from "next";
import React from "react";
import "antd/dist/antd.css";

import { ImageType, CommentType } from "../../interfaces";
import Layout from "../../components/Layout/Layout";
import ImageDetail from "../../components/ImageDetails/ImageDetail";

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const dataFetch = await fetch("https://images-sharing.vercel.app/api/get");
//   const itemsJSon = await dataFetch.json();
//   const items: ImageType[] = itemsJSon.data;

//   const paths = items.map((item) => ({
//     params: { id: item.id.toString() },
//   }));
//   return { paths, fallback: false };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let id: number = 0;
  let defaultImage: ImageType = { id: NaN, name: "", public_url: "", username: "", date: "" };
  if (params && params.id && typeof params.id === "string") {
    id = parseInt(params.id);
  }

  const dataFetch = await fetch("https://images-sharing.vercel.app/api/get");
  var itemsJSon = await dataFetch.json();
  const items: ImageType[] = itemsJSon.data;

  const data: ImageType = items.find((item) => item.id == id) || defaultImage;

  const commentFetch = await fetch("https://images-sharing.vercel.app/api/commentsGet");
  itemsJSon = await commentFetch.json();
  const comments: CommentType[] = itemsJSon.data;
  return { props: { data, comments } };
};
