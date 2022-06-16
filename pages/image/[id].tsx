import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import "antd/dist/antd.css";


import { allImagesData, allCommentsData } from "../../utils/data";
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
  const items: ImageType[] = allImagesData;
  const paths = items.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id:number = 0;
  let defaultImage : ImageType = {id:0, name:"", public_id:""}
  if (params && params.id && typeof params.id === "string") {
    id = parseInt(params.id)
  }
  const data: ImageType = allImagesData.find((item) => item.id == id
  ) || defaultImage;
  const comments = allCommentsData;
  return { props: { data, comments } };
};
