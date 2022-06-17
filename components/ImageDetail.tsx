import React from "react";

import { Image, Row, Col, Descriptions } from "antd";

import { ImageType, CommentType } from "../interfaces";
import Comments from "./Comments";

type Props = {
  data: ImageType;
  comments: CommentType[];
};

export default function ImageDetail({ data, comments }: Props) {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={17}>
          <Image src={data.public_id} alt={data.name}></Image>
        </Col>
        <Col xs={24} sm={24} md={7}>
          <Descriptions column={1} bordered={true} title={data.name}>
            <Descriptions.Item labelStyle={{fontSize:"10px"}} contentStyle={{fontSize:"15px", fontWeight:"bolder"}} label="Upload By">{data.username ? data.username : "Admin Marc"}</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:"10px"}} contentStyle={{fontSize:"8px"}} label="Upload Date">{data.date ? data.date : "Thu Jun 16 2022 15:00:00 GMT+0200"}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Comments data={data} comments={comments} />
    </>
  );
}
