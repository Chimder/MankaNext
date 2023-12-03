// import Navbar from "./navbar";
// import Footer from "./footer";

import AsideBar from "./AsideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideBar />
      <main>{children}</main>
    </>
  );
}
