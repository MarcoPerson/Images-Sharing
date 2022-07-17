import React, { useState } from "react";
import { Comment, List, Tooltip, Button, Form, Input, message } from "antd";
import { ImageType, CommentType } from "../../interfaces";
import { useAppContext } from "../../context/AppContext";
import moment from "moment";

const { TextArea } = Input;
type Props = { data: ImageType; comments: CommentType[] };

export default function Comments({ data, comments }: Props) {
  const { name, profile } = useAppContext();
  const [form] = Form.useForm()
  const [commentsChanges, setCommentsChanges] = useState(comments)

  const env = process.env.NODE_ENV === "production"
  const pre_link = env ? "https://images-sharing.vercel.app/" : "http://localhost:3000/"

  const datas = commentsChanges.map((item) => ({
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: item.username,
    avatar: item.profile_image,
    content: <p>{item.comment}</p>,
    datetime: (
      <Tooltip title={moment(item.date).format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment(item.date).fromNow()}</span>
      </Tooltip>
    ),
  }));

  const onFinish = async (values: any) => {
    const comment = values.comment;
    const commentData = {
      image_id: data._id,
      username: name,
      comment: comment,
      profile_image: profile,
      date: moment().toString(),
    };

    let commentJSON = JSON.stringify(commentData);

    const id = await fetch(pre_link + "api/comments/" + data._id, {
      method: "POST",
      body: commentJSON,
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
    });
    form.resetFields()
    message.success(`Thanks ${name}, for your comment`);

    const commentFetch = await fetch(pre_link + "api/comments/" + data._id);
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
          <TextArea id="textComment" rows={3} />
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
