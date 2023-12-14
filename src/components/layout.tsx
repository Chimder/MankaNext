// import Navbar from "./navbar";
// import Footer from "./footer";

import AsideBar from "./AsideBar";
import AsideBarChapter from "./AsideBar/aside-bar-chapter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <AsideBar /> */}
      <AsideBarChapter />
      <main>{children}</main>
    </>
  );
}
