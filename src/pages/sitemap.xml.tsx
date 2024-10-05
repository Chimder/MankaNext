import { GetServerSideProps } from "next";
import {
  getAllMangas,
  getPopularManga,
  HandlerMangaSwag,
} from "@/shared/Api/generatedv2";

const URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRES;

const generateSiteMap = (mangas: HandlerMangaSwag[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Статические страницы -->
    <url>
      <loc>${URL}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <!-- Манги -->
    ${mangas
      .map((manga) => {
        return `
        <url>
          <loc>${URL}/manga/${manga.name!}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        `;
      })
      .join("")}
  </urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allMangas = await getAllMangas();

  const sitemap = generateSiteMap(allMangas);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
