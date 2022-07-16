import React from "react";
import { Row, Col } from "antd";

import ImageItem from "../ImageItem/ImageItem";
import { ImageType } from "../../interfaces";

type Props = { items: ImageType[] };

export default function ImageList({ items }: Props) {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col style={{ height: "300px", overflow: "hidden", display: "flex", justifyContent: "center" }} key={item.id} xs={24} sm={12} md={8} lg={6}>
            <ImageItem data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
