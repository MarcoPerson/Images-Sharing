import React from "react";
import { Button, Form, Input, Upload, message} from "antd";
import type { UploadProps } from 'antd';

import {UploadOutlined} from '@ant-design/icons'

type Props = {};

const props: UploadProps = {
    name: 'file',
    action: '',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

export default function ImageUpload({}: Props) {
  const onFinish = (values : any) => {
    message.success(`${values.picname} file uploaded successfully`);
    console.log("Success:", values);

  };

  const onFinishFailed = (errorInfo : any) => {
    message.error(`Please fill all the required zone`);
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
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
