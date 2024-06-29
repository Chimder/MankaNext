import dynamic from "next/dynamic";

const GoogleCallBackComponent = dynamic(
  () => import("@/components/GoogleCallBackComponent"),
  { ssr: false },
);

const GoogleCallBack = () => {
  return <GoogleCallBackComponent />;
};

export default GoogleCallBack;
