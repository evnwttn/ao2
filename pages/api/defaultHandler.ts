import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export function defaultHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "test" });
}

// https://nextjs.org/docs/api-routes/introduction
