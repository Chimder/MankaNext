import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function deleteCookie(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  console.log("Request cookies:", req.cookies);

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

  console.log("Cookie deleted");

  res.status(200).json({ message: "Cookie deleted" });
}
