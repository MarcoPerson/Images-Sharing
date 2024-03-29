import React from "react";
import Link from "next/link";
import { Image } from "antd";
import { ImageType } from '../../interfaces';


type Props = { data: ImageType }

export default function ImageItem({ data }: Props) {
  return (
    <div>
      <Link href="/image/[id]" as={`/image/${data._id}`}>
        <a>
          <Image height="100%" preview={false} src={data.public_url} alt={data.name}></Image>
        </a>
      </Link>
    </div>
  )
}