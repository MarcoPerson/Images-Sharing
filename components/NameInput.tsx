import React from "react";
import { Button, message, Form, Input } from "antd";
import "antd/dist/antd.css";
import { useAppContext } from "../context/AppContext";
import Head from "next/head";

type Props = {};

export default function NameInput({}: Props) {
  const { name, setName } = useAppContext();
  const handler = (values : any) => {
    setName(values.username);
  };

  const onFinishFailed = () => {
    message.error("Please enter your name");
  }
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Enter Your Name</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Form
        name="Name Form"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Your Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input a name to enter the App!",
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
       Enter
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
}
