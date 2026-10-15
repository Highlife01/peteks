import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, ShieldCheck, Building2, Compass } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { locations, trSlugify } from "@/data/locations";

const ServiceAreasSection = () => {
  const [activeCity, setActiveCity] = useState<string>(locations[0].city);

  const selectedCityData =
    locations.find((loc) => loc.city === activeCity) || locations[0];
  const selectedCitySlug = trSlugify(selectedCityData.city);

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 architectural-grid opacity-50 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge
            variant="outline"
            className="px-3.5 py-1 border-accent/40 text-accent bg-accent/5 font-semibold tracking-wider uppercase text-xs"
          >
            <MapPin className="h-3.5 w-3.5 mr-1.5 inline" />
            Bölgesel Hizmet Ağı & Şantiye Operasyonları
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Hizmet Verdiğimiz <span className="gold-gradient-text">İl ve İlçeler</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Adana merkezli mühendislik kadromuzla Çukurova ve Akdeniz havzasındaki tüm ilçelerde yerel zemin etüdü, belediye ruhsat süreçleri ve anahtar teslim şantiye yönetimi sağlıyoruz.
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Hizmet verilen iller">
          {locations.map((loc) => {
            const isSelected = loc.city === activeCity;
            return (
              <button
                key={loc.city}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCity(loc.city)}
                className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-sm md:text-base transition-all duration-300 flex items-center space-x-2.5 border ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-transparent shadow-lg shadow-accent/25 scale-[1.02]"
                    : "bg-card hover:bg-muted text-foreground border-border/80"
                }`}
              >
                <MapPin className={`h-4 w-4 ${isSelected ? "text-white" : "text-accent"}`} />
                <span>{loc.city}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {loc.districts.length} İlçe
                </span>
              </button>
            );
          })}
        </div>

        {/* Active City Engineering Context + District Links Card */}
        <Card className="max-w-6xl mx-auto glass-card rounded-3xl overflow-hidden border-2 border-border/80">
          <CardContent className="p-6 sm:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Regional Engineering Details */}
              <div className="lg:col-span-5 space-y-5 bg-muted/50 dark:bg-slate-900/60 p-6 rounded-2xl border border-border/60">
                <div className="flex items-center justify-between">
                  <Badge className="bg-accent/15 text-accent border border-accent/30 hover:bg-accent/20">
                    Bölge Kodu: {selectedCityData.regionCode}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {selectedCityData.coordinates.lat.toFixed(4)}°K, {selectedCityData.coordinates.lng.toFixed(4)}°D
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-foreground flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-accent shrink-0" />
                  {selectedCityData.city} Bölge Mühendisliği
                </h3>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-foreground">Zemin & İklim Uyumu:</strong>{" "}
                      {selectedCityData.climateAndSoilNote}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Compass className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-foreground">Bölgesel Odak:</strong>{" "}
                      {selectedCityData.regionalFocus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive District Links */}
              <div className="lg:col-span-7">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-heading font-bold text-base text-foreground">
                    {selectedCityData.city} İlçeleri — Anahtar Teslim İnşaat & Kat Karşılığı
                  </h4>
                  <span className="text-xs text-muted-foreground">İlçe detay sayfasına gitmek için seçin</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {selectedCityData.districts.map((district) => {
                    const districtSlug = trSlugify(district);
                    return (
                      <Link
                        key={district}
                        to={`/${selectedCitySlug}/${districtSlug}`}
                        className="group flex items-center justify-between px-4 py-3 rounded-xl bg-background hover:bg-accent/10 border border-border/80 hover:border-accent/50 transition-all duration-200 text-sm font-medium text-foreground hover:text-accent shadow-sm"
                      >
                        <span className="truncate">{district}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Crawlability / Full Regional Index Accordion for SEO & AI Bots */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Tüm Bölgesel Hizmet Bağlantıları (Hızlı Erişim)
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                {locations.map((loc) => {
                  const cSlug = trSlugify(loc.city);
                  return loc.districts.map((dist) => {
                    const dSlug = trSlugify(dist);
                    return (
                      <Link
                        key={`${cSlug}-${dSlug}`}
                        to={`/${cSlug}/${dSlug}`}
                        className="hover:text-accent hover:underline transition-colors"
                      >
                        {loc.city} {dist} İnşaat
                      </Link>
                    );
                  });
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
