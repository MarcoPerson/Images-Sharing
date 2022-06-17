// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CommentType } from "../../interfaces";
const fs = require("fs");

type Data = {
  len: number,
  data : CommentType[]
}

const objectToArray = (obj : any) => {
  const keys = Object.keys(obj);
  const res = [];
  for(let i = 0; i < keys.length; i++){
     res.push(obj[keys[i]]);
  };
  return res;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Get all user from a file
  fs.appendFileSync('./comments.txt', '');
  const myData = fs.readFileSync('./comments.txt').toString('utf-8');
  const myJson = JSON.parse(myData);

  //Get the request message
  const data = req.body;
  
  //Send a successful or error response
  res.status(200).json({
    len : Object.keys(myJson).length,
    data : objectToArray(myJson)
  })
}