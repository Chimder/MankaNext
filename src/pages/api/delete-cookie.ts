import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function deleteCookie(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.headers.cookie) {
    res.status(400).json({ error: "No cookies in request" });
    return;
  }

  const cookieExists = req.cookies["manka_google_user"] !== undefined;

  if (!cookieExists) {
    res.status(400).json({ error: "Cookie not found" });
    return;
  }

  res.setHeader(
    "Set-Cookie",
    serialize("manka_google_user", "", {
      maxAge: -1,
      path: "/",
      sameSite: "none",
      secure: true,
      httpOnly: false,
    }),
  );

  res.status(200).json({ message: "Cookie deleted" });
}
