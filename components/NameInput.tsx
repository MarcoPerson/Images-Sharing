import React from "react";
import { Button, message } from "antd";
import "antd/dist/antd.css";
import { useAppContext } from "../context/AppContext";
import Head from "next/head";

type Props = {};

export default function NameInput({}: Props) {
  const { name, setName } = useAppContext();
  const handler = async () => {
    try {
      setName(prompt("Enter Your Name") || "");
    } catch (e) {
      message.error("Please enter name");
    }
  };
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
      <Button onClick={handler}>Set Your Name To Enter The App</Button>
    </div>
  );
}
