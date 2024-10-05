import { GetServerSideProps } from "next";

const URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRES;

const generateRobotsTxt = () => {
  return `User-agent: *
Disallow: /admin/
Disallow: /private/

Sitemap: ${URL}/sitemap.xml
`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = generateRobotsTxt();

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default function Robots() {
  return null;
}
