import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  articleDate?: string;
  author?: string;
  noindex?: boolean;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}

const SEO = ({
  title = "PETEKS İnşaat & Mimarlık | Anahtar Teslim İnşaat, Villa, Çelik Yapı & Dekorasyon",
  description = "PETEKS; Adana, Mersin, Osmaniye, Niğde ve tüm Türkiye'de 25+ yıllık deneyimle konut, lüks villa, otel, çelik fabrika inşaatı, tadilat ve prefabrik yapı projelerinde anahtar teslim hizmet sunmaktadır.",
  keywords = "PETEKS, peteks inşaat, adana inşaat firması, mersin inşaat firması, villa yapımı, anahtar teslim tadilat, prefabrik ev fiyatları 2026, çelik yapı projeleri, fabrika inşaatı, saha betonu, radye temel, kat karşılığı inşaat",
  ogImage = "/pwa-512x512.png",
  ogUrl,
  articleDate,
  author = "PETEKS Mimarlık & Mühendislik",
  noindex = false,
  geoRegion = "TR-01",
  geoPlacename = "Seyhan, Adana",
  geoPosition = "37.0000;35.3213",
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper for updating meta tags
    const updateMeta = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // 2. Primary Meta Tags
    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);
    updateMeta("name", "author", author);
    updateMeta("name", "publisher", "PETEKS İnşaat Dekorasyon Tekstil San. Tic. Ltd. Şti.");
    updateMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // 3. Dynamic Geo Location Tags for Local & Regional SEO / GEO
    const icbm = geoPosition.replace(";", ", ");
    updateMeta("name", "geo.region", geoRegion);
    updateMeta("name", "geo.placename", geoPlacename);
    updateMeta("name", "geo.position", geoPosition);
    updateMeta("name", "ICBM", icbm);

    // 4. Open Graph (Facebook / LinkedIn / WhatsApp)
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", articleDate ? "article" : "website");
    updateMeta("property", "og:site_name", "PETEKS İnşaat & Mimarlık");
    updateMeta("property", "og:locale", "tr_TR");

    const siteUrl =
      typeof window !== "undefined" ? window.location.origin : "https://www.peteksinsaat.com.tr";
    const cleanPath =
      typeof window !== "undefined" ? window.location.pathname.replace(/\/+$/, "") || "/" : "/";
    const currentUrl = ogUrl || `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
    const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

    updateMeta("property", "og:url", currentUrl);
    updateMeta("property", "og:image", fullOgImage);
    updateMeta("property", "og:image:alt", title);

    if (articleDate) {
      updateMeta("property", "article:published_time", articleDate);
      updateMeta("property", "article:author", author);
    }

    // 5. Twitter Cards
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", fullOgImage);

    // 6. Canonical Link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // 7. Alternate Language Hreflang Tags
    const ensureHreflang = (lang: string, href: string) => {
      let link = document.querySelector(`link[hreflang='${lang}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", lang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    ensureHreflang("tr", currentUrl);
    ensureHreflang("en", currentUrl);
    ensureHreflang("x-default", currentUrl);
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogUrl,
    articleDate,
    author,
    noindex,
    geoRegion,
    geoPlacename,
    geoPosition,
  ]);

  return null;
};

export default SEO;
