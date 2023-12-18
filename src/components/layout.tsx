import AsideBar from "./aside-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideBar />
      <main>{children}</main>
    </>
  );
}
