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
    <Layout title={`Image : ${data._id} - ${data.name}`}>
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

  const env = process.env.NODE_ENV === "production"
  const pre_link = env ? "https://images-sharing.vercel.app/" : "http://localhost:3000/"

  let id: string = "";
  if (params && params.id && typeof params.id === "string") {
    id = params.id;
  }

  const dataFetch = await fetch(pre_link + "api/images/" + id);
  var itemsJSon = await dataFetch.json();
  console.log("PROCESS -- ", process.env.NODE_ENV)
  const data: ImageType = itemsJSon.data;

  const commentFetch = await fetch(pre_link + "api/comments/" + id);
  itemsJSon = await commentFetch.json();
  const comments: CommentType[] = itemsJSon.data;
  return { props: { data, comments } };
};
