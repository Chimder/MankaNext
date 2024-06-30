import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetUserSession } from "./query";

const GoogleCallBackComponent = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const redirect_uri = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRES}/google/auth`;
        try {
          const response = await axios.post(
            "https://oauth2.googleapis.com/token",
            {
              code,
              client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
              client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
              redirect_uri,
              grant_type: "authorization_code",
            },
          );
          const { access_token, refresh_token } = response.data;
          const profileResponse = await axios.get(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
              headers: { Authorization: `Bearer ${access_token}` },
            },
          );

          const { email, id, picture, name } = profileResponse.data;
          const newUser = {
            id,
            email,
            name,
            image: picture,
          };

          await axios.post(
            `${process.env.NEXT_PUBLIC_URL_API}/user/create`,
            newUser,
            {
              withCredentials: true,
            },
          );

          resetUserSession();
          router.push("/");
        } catch (error) {
          console.error("Error during authentication:", error);
          resetUserSession();
          router.push("/");
        }
      }
    };

    fetchData();
  }, [code, router]);

  return <div>Loading...</div>;
};

export default GoogleCallBackComponent;
