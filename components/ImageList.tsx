import React from "react";
import { Row, Col } from "antd";

import ImageItem from "./ImageItem";
import { ImageType } from "../interfaces";

type Props = { items: ImageType[] };

export default function ImageList({ items }: Props) {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} span={8}>
            <ImageItem data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
