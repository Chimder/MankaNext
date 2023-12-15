import AsideBarChapter from "./AsideBar/aside-bar-chapter";

export default function LayoutTwo({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideBarChapter />
      <main>{children}</main>
    </>
  );
}
