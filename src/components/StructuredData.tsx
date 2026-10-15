import { useEffect } from "react";

export type StructuredDataType =
  | "Organization"
  | "WebSite"
  | "LocalBusiness"
  | "GeneralContractor"
  | "Service"
  | "BreadcrumbList"
  | "FAQPage"
  | "Article"
  | "ItemList"
  | "HowTo";

interface StructuredDataProps {
  type: StructuredDataType;
  data: Record<string, unknown>;
  idSuffix?: string;
}

const StructuredData = ({ type, data, idSuffix }: StructuredDataProps) => {
  const scriptId = `structured-data-${type.toLowerCase()}${idSuffix ? `-${idSuffix}` : ""}`;
  const serializedData = JSON.stringify(data || {});

  useEffect(() => {
    if (typeof window === "undefined" || !document || !document.head) return;

    try {
      const parsedData = JSON.parse(serializedData);
      if (!parsedData || typeof parsedData !== "object") {
        return;
      }

      const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": type,
        ...parsedData,
      });

      const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (existing) {
        if (existing.text === jsonLd) return;
        existing.text = jsonLd;
        return;
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = jsonLd;

      document.head.appendChild(script);
    } catch (error) {
      console.error("Error creating structured data:", error);
    }

    return () => {
      try {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch {
        // Ignore cleanup errors
      }
    };
  }, [type, scriptId, serializedData]);

  return null;
};

export default StructuredData;
