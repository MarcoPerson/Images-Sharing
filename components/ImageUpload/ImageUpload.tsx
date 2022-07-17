import React, { useState } from "react";
import { Button, Form, Input, Upload, message } from "antd";
import type { UploadProps } from "antd";
import moment from 'moment'
import { useAppContext } from "../../context/AppContext";

import { UploadOutlined } from "@ant-design/icons";

import { mediauploader } from "../../utils/mediauploader";

type Props = {};

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
};

export default function ImageUpload({ }: Props) {
  const [form] = Form.useForm()
  const { name, profile } = useAppContext()
  const [uploading, setUploading] = useState(false)

  const env = process.env.NODE_ENV === "production"
  const pre_link = env ? "https://images-sharing.vercel.app/" : "http://localhost:3000/"

  const onFinish = async (values: any) => {
    setUploading(true)
    let file = new File(
      [values.upload.fileList[0].originFileObj],
      values.picname
    );
    console.log("Success:", file);

    const mylink = await mediauploader(file).then((links) => links[0]);
    console.log(mylink);

    let newImage = { name: file.name, public_url: mylink, username: name, profile_image: profile, date: moment().toString() };
    let imageJSON = JSON.stringify(newImage);

    const id = await fetch(pre_link + "api/images", {
      method: "POST",
      body: imageJSON,
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
    });

    form.resetFields()
    message.success(`${values.picname} file uploaded successfully`);
    setUploading(false)
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(`Please fill all the required zone`);
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="Upload Form"
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Pic Name"
        name="picname"
        rules={[
          {
            required: true,
            message: "Please input a name for the picture!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        extra="Picture Only"
        rules={[
          {
            required: true,
            message: "Please select a picture!",
          },
        ]}
      >
        <Upload {...props} beforeUpload={() => false} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" disabled={uploading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
