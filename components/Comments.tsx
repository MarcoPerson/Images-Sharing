import React, { useState } from "react";
import { Comment, List, Tooltip, Button, Form, Input, message } from "antd";
import { ImageType, CommentType } from "../interfaces";
import { useAppContext } from "../context/AppContext";
import moment from "moment";

const { TextArea } = Input;
type Props = { data: ImageType; comments: CommentType[] };

export default function Comments({ data, comments }: Props) {
  const { name, setName } = useAppContext();
  const [form] = Form.useForm()
  const [commentsChanges, setCommentsChanges] = useState(comments)

  const id = data.id;
  const thisImageComments = commentsChanges.filter((item) => item.imageId == id);

  const datas = thisImageComments.map((item) => ({
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: item.userName,
    avatar: "https://joeschmoe.io/api/v1/random",
    content: <p>{item.comment}</p>,
    datetime: (
      <Tooltip title={item.date}>
        <span>{item.date}</span>
      </Tooltip>
    ),
  }));

  const onFinish = async (values: any) => {
    const comment = values.comment;
    const commentData: CommentType = {
      id: 0,
      imageId: data.id,
      userName: name,
      comment: comment,
      date: moment().toString(),
    };

    let commentJSON = JSON.stringify(commentData);

    const id = await fetch("http://localhost:3000/api/commentsAdd", {
      method: "POST",
      body: commentJSON,
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
    });
    form.resetFields()
    message.success(`Thanks ${name}, for your comment`);

    const commentFetch = await fetch("http://localhost:3000/api/commentsGet");
    const itemsJSon = await commentFetch.json();

    setCommentsChanges(itemsJSon.data);

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <List
        className="comment-list"
        header={`${datas.length} comments`}
        itemLayout="horizontal"
        dataSource={datas}
        renderItem={(item) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Form
        name="Comment Form"
        form={form}
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 23 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="comment"
          rules={[{ required: true, message: "Please write a comment!" }]}
        >
          <TextArea id="textComment" rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
