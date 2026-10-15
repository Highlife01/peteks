import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import StructuredData from "./StructuredData";

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "https://www.peteksinsaat.com.tr";

  const breadcrumbsListSchema = {
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.url ? { item: `${siteUrl}${item.url}` } : {}),
      })),
    ],
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbsListSchema} />
      <div className="flex justify-center mb-6">
        <nav
          aria-label="Breadcrumb"
          className="py-2 px-4 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-border/70 shadow-sm inline-flex"
        >
          <ol className="flex flex-wrap items-center space-x-2 text-xs text-muted-foreground font-medium">
            <li className="flex items-center">
              <Link
                to="/"
                className="hover:text-accent text-foreground/80 flex items-center transition-colors"
              >
                <Home className="h-3.5 w-3.5 mr-1 text-accent" />
                <span>Ana Sayfa</span>
              </Link>
            </li>

            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li key={idx} className="flex items-center space-x-2">
                  <ChevronRight className="h-3 w-3 text-muted-foreground/60 shrink-0" />
                  {isLast || !item.url ? (
                    <span className="text-foreground font-bold truncate max-w-[200px] sm:max-w-none">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-foreground/80 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumbs;
