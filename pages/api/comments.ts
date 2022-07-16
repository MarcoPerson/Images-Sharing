import { NextApiRequest, NextApiResponse } from "next";
import { getAllCommentsRoute } from "../../routers/comment_routers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getAllCommentsRoute(req, res);
      break;
    default:
      res.status(405).send({ error: "Method not Allowed" });
      break;
  }
};

export default handler;
