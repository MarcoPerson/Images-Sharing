import React from "react";
import { Button, message } from "antd";
import "antd/dist/antd.css";
import {useAppContext} from '../context/AppContext'

type Props = {};

export default function NameInput({}: Props) {
  const {name, setName} = useAppContext()
  const handler = async () => {
    
    try {
      setName(prompt("Enter Your Name") || '');
    } catch (e) {
      message.error("Please enter name");
    }
  };
  return (
    <div>
      <Button onClick={handler}>Set Name</Button>
    </div>
  );
}
