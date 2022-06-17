import React from "react";
import { Button, Form, Input, Upload, message } from "antd";
import type { UploadProps } from "antd";
import moment from 'moment'
import { useAppContext } from "../context/AppContext";

import { UploadOutlined } from "@ant-design/icons";

import { mediauploader } from "../utils/mediauploader";
import { ImageType } from "../interfaces";

type Props = {};

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function ImageUpload({}: Props) {
  const [form] = Form.useForm()
  const {name, setName} = useAppContext()
  const onFinish = async (values: any) => {
    let file = new File(
      [values.upload.fileList[0].originFileObj],
      values.picname
    );
    console.log("Success:", file);

    const mylink = await mediauploader(file).then((links) => links[0]);
    console.log(mylink);

    let newImage: ImageType = { id: 0, name: file.name, public_id: mylink, username: name, date:moment().toString() };
    let imageJSON = JSON.stringify(newImage);

    const id = await fetch("http://localhost:3000/api/add", {
      method: "POST",
      body: imageJSON,
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
    });

    form.resetFields()
    message.success(`${values.picname} file uploaded successfully`);
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
        <Upload {...props} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
