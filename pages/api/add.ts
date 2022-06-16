// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

type Data = {
  message: string;
  id: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Get all user from a file
  fs.appendFileSync("./images.txt", "");
  const myData = fs.readFileSync("./images.txt").toString("utf-8");
  const myJson = JSON.parse(myData);

  //Get the request message
  const data = req.body;

  //Add in the DB
  const endPosition = Object.keys(myJson).length;
  data.id = endPosition;
  let newJSON = { ...myJson, [endPosition]: data };
  fs.writeFileSync("./images.txt", JSON.stringify(newJSON, null, 2));

  //Send a successful or error response
  res.status(200).json({
    message: "Add Successfully",
    id: endPosition + 1,
  });
}
