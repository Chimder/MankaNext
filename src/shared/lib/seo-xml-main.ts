import { HandlerMangaSwag } from "../Api/generatedv2";

const URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRES;

export function generateSiteMapMain(data: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <loc>https://manka-next.vercel.app</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </urlset>
 `;
}

// export function generateSiteMapManka(data: HandlerMangaSwag) {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
//      <!-- Add the static URLs manually -->
//      ${data
//        .map(({}) => {
//          return `
//            <url>
//                <loc>${`${URL}/blog/${id}`}</loc>
//            </url>
//          `;
//        })
//        .join("")}
//    </urlset>
//  `;
// }
