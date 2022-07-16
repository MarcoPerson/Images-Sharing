import { NextApiRequest, NextApiResponse } from "next";
import {
  addCommentRoute,
  getCommentRoute,
} from "../../../routers/comment_routers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getCommentRoute(req, res);
      break;
    case "POST":
      await addCommentRoute(req, res);
      break;
    default:
      res.status(405).send({ error: "Method not Allowed" });
      break;
  }
};

export default handler;
