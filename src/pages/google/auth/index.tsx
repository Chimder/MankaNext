import dynamic from "next/dynamic";

const GoogleCallBackComponent = dynamic(
  () => import("@/components/google-callback"),
  { ssr: false },

);

const GoogleCallBack = () => {
  return <GoogleCallBackComponent />;
};

export default GoogleCallBack;
