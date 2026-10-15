import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  BookOpen,
  MessageCircle,
  Search,
  X,
  Phone,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SECTORS_CATALOG, ServiceSector } from "@/data/servicesCatalog";

const PHONE_DISPLAY = "0532 055 09 45";
const WHATSAPP_NUMBER = "905320550945";

const openWhatsAppQuote = (subject: string) => {
  const text = encodeURIComponent(
    `Merhaba PETEKS İnşaat & Mimarlık, "${subject}" konusunda detaylı bilgi ve fiyat teklifi almak istiyorum.`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
};

const Services = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS_CATALOG[0].id);
  const [modalSector, setModalSector] = useState<ServiceSector | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [siteUrl, setSiteUrl] = useState<string>("https://www.peteksinsaat.com.tr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);

  const activeSector = useMemo(
    () => SECTORS_CATALOG.find((s) => s.id === activeSectorId) || SECTORS_CATALOG[0],
    [activeSectorId]
  );

  const filteredSectors = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SECTORS_CATALOG;
    return SECTORS_CATALOG.filter(
      (sector) =>
        sector.title.toLowerCase().includes(q) ||
        sector.shortDesc.toLowerCase().includes(q) ||
        sector.detailedText.toLowerCase().includes(q) ||
        sector.items.some((item) => item.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalSubItems = useMemo(
    () => SECTORS_CATALOG.reduce((acc, s) => acc + s.items.length, 0),
    []
  );

  const serviceData = useMemo(
    () => ({
      name: "PETEKS İnşaat & Endüstriyel Faaliyet Kataloğu (14 Ana Disiplin, 150+ Kalem)",
      serviceType: SECTORS_CATALOG.map((s) => s.cleanTitle).join(", "),
      provider: {
        "@type": "GeneralContractor",
        name: "PETEKS İnşaat & Mimarlık",
        url: siteUrl,
        telephone: "+90-532-055-09-45",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "İnşaat & Endüstriyel Faaliyet Kataloğumuz",
        itemListElement: SECTORS_CATALOG.map((sector, idx) => ({
          "@type": "OfferCatalog",
          position: idx + 1,
          name: sector.cleanTitle,
          description: sector.shortDesc,
          itemListElement: sector.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        })),
      },
      areaServed: [
        { "@type": "City", name: "Adana" },
        { "@type": "City", name: "Mersin" },
        { "@type": "City", name: "Osmaniye" },
        { "@type": "City", name: "Niğde" },
        { "@type": "Country", name: "Türkiye" },
      ],
    }),
    [siteUrl]
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Hizmetlerimiz | 14 Ana İnşaat Disiplini & Endüstriyel Faaliyet Kataloğu - PETEKS İnşaat"
        description="Bina ve konut inşaatları, OSB endüstriyel fabrikalar, altyapı ve boru hatları, lazerli saha betonları, üstyapı çelik sistemler, enerji santralleri (GES/RES/HES), su yapıları, ulaşım, ticari yapılar, turizm, tarım, çevre, kentsel dönüşüm ve Data Center inşaat hizmetleri."
        keywords="inşaat hizmetleri, bina ve konut inşaatları, endüstriyel inşaatlar, fabrika inşaatı, altyapı ve boru hatları, saha betonları, helikopter perdahlı beton, çelik yapılar, enerji santrali inşaatı, GES RES HES altyapı, su yapıları, kentsel dönüşüm, data center inşaatı, adana inşaat taahhüt"
      />
      <StructuredData type="Service" data={serviceData} idSuffix="services" />
      <Navbar />

      {/* Luxury Hero Section */}
      <section className="pt-36 pb-16 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <Breadcrumbs items={[{ label: "Hizmetlerimiz" }]} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <div className="space-y-3 max-w-3xl">
              <Badge className="bg-amber-500/15 text-amber-300 border border-amber-400/30 uppercase tracking-[0.25em] text-xs px-3.5 py-1 font-bold">
                {SECTORS_CATALOG.length} Ana İnşaat Disiplini • {totalSubItems}+ Mühendislik Kalemi
              </Badge>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight">
                İnşaat & Endüstriyel <span className="gold-gradient-text">Faaliyet Kataloğumuz</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Bina ve konut projelerinden OSB ağır sanayi fabrikalarına, altyapı ve saha betonlarından enerji santralleri ve TIER-4 Data Center yapılarına kadar Türkiye genelinde uçtan uca mühendislik ve taahhüt çözümleri.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button
                onClick={() => openWhatsAppQuote("Genel İnşaat & Mühendislik Taahhüt")}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 py-6 rounded-xl shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hızlı Teklif Al
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-6 rounded-xl"
              >
                <a href="tel:+905320550945">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 14-Discipline Catalog Selector (Exact structure from mustafaagit.com.tr/hizmetler) */}
      <section className="py-14 bg-muted/20 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-5">
            <div>
              <span className="text-accent uppercase tracking-[0.25em] text-[11px] font-extrabold block">
                {SECTORS_CATALOG.length} ANA İNŞAAT DİSİPLİNİ
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                İnteraktif Sektör & Uzmanlık Seçici
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              İncelemek istediğiniz ana inşaat disiplinini seçin veya alt kaleme tıklayarak doğrudan teklif alın.
            </p>
          </div>

          {/* Horizontal Scrollable / Wrap Category Tabs */}
          <div className="flex overflow-x-auto gap-2.5 pb-3 scrollbar-none border-b border-border/80">
            {SECTORS_CATALOG.map((sector) => {
              const isSelected = activeSector.id === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap rounded-xl border transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "bg-slate-950 text-amber-400 border-amber-500/60 shadow-lg scale-[1.02] dark:bg-amber-500 dark:text-slate-950"
                      : "bg-card text-foreground/80 border-border hover:border-accent/50 hover:bg-muted/60"
                  }`}
                >
                  <span>{sector.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                      isSelected
                        ? "bg-amber-500/20 text-amber-300 dark:bg-slate-950/20 dark:text-slate-950"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {sector.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Detail Panel */}
          <div className="bg-card p-6 sm:p-10 rounded-3xl border-2 border-border/80 shadow-xl space-y-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground font-heading">
                  {activeSector.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl leading-relaxed">
                  {activeSector.shortDesc}
                </p>
              </div>
              <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/30 shrink-0 self-start sm:self-center">
                {activeSector.count}
              </span>
            </div>

            {/* Sub-items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {activeSector.items.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openWhatsAppQuote(`${activeSector.cleanTitle} - ${item}`)}
                  title={`${item} için WhatsApp'tan teklif al`}
                  className="p-3.5 bg-muted/40 hover:bg-amber-500/10 border border-border/80 hover:border-amber-500/40 rounded-xl text-xs font-bold text-foreground flex items-center justify-between gap-2 transition-all group text-left"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{item}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>

            {/* Engineering Article Box Preview */}
            <div className="bg-muted/30 p-5 rounded-2xl border border-border/60">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-accent mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Teknik Uygulama & Saha Standartlarımız
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activeSector.detailedText}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setModalSector(activeSector)}
                className="text-xs sm:text-sm font-bold text-foreground hover:text-accent flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="underline underline-offset-4">Detaylı Mühendislik Makalesini Oku</span>
              </button>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => openWhatsAppQuote(`${activeSector.cleanTitle} teklifi`)}
                  className="bg-slate-950 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs px-6 py-3 rounded-xl shadow"
                >
                  Teklif Al
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-xl text-xs font-bold">
                  <Link to="/contact">Resmi Keşif Formu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full All-14-Sectors Overview & Searchable Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <Badge variant="outline" className="border-accent/40 text-accent uppercase text-xs font-bold">
                Tüm Faaliyet Alanlarımız
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">
                14 Ana Disiplin ve {totalSubItems}+ Alt Uzmanlık Kalemi
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Aşağıdaki arama kutusundan aradığınız inşaat kalemini (örn. "Fabrika", "Helikopter Perdahlı Beton", "GES", "Data Center", "Villa", "Otel") hızlıca filtreleyebilirsiniz.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hizmet veya alt kalem ara..."
                className="w-full bg-card border-2 border-border focus:border-accent rounded-xl pl-10 pr-9 py-2.5 text-sm outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Aramayı temizle"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {filteredSectors.map((sector, index) => (
              <Card
                key={sector.id}
                className="border-2 border-border/80 hover:border-accent/50 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-card flex flex-col justify-between overflow-hidden"
              >
                <CardContent className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3 border-b border-border/60 pb-4">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent block">
                          Disiplin #{String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground mt-0.5">
                          {sector.title}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30 shrink-0">
                        {sector.count}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {sector.shortDesc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {sector.items.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => openWhatsAppQuote(`${sector.cleanTitle} - ${item}`)}
                          className="flex items-center space-x-2 text-xs font-semibold text-foreground/90 bg-muted/40 hover:bg-amber-500/10 px-3 py-2 rounded-lg border border-border/60 hover:border-amber-500/40 transition-colors text-left"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span className="truncate">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-border/60 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setModalSector(sector)}
                      className="text-xs font-bold text-foreground hover:text-accent flex items-center gap-1.5 underline underline-offset-4 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span>Detaylı Mühendislik Makalesini Oku</span>
                    </button>
                    <Button
                      size="sm"
                      onClick={() => openWhatsAppQuote(`${sector.cleanTitle} teklifi`)}
                      className="bg-slate-950 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs px-5 rounded-xl"
                    >
                      Teklif Al
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14 space-y-3">
            <Badge variant="outline" className="border-accent/40 text-accent uppercase text-xs font-bold">
              Proje Yönetimi
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">5 Adımda Anahtar Teslim Sürecimiz</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Keşif & Analiz",
                description: "Yerinde ücretsiz keşif, zemin etüdü ve imar durumu analizi yapıyoruz.",
              },
              {
                step: "02",
                title: "Proje & Teklif",
                description: "3D mimari tasarım, statik proje ve şeffaf metraj bütçe teklifi hazırlıyoruz.",
              },
              {
                step: "03",
                title: "Sözleşme & Ruhsat",
                description: "Resmi sözleşme sonrası belediye ruhsat ve izin süreçlerini tamamlıyoruz.",
              },
              {
                step: "04",
                title: "Şantiye & Uygulama",
                description: "Uzman saha mühendisleri kontrolünde ISO standartlarında inşaatı yürütüyoruz.",
              },
              {
                step: "05",
                title: "İskan & Teslim",
                description: "Zamanında anahtar teslim ediyor ve kurumsal yapı garantimizi başlatıyoruz.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/80 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-heading font-black text-base mb-4 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">
            Projeniz İçin Ücretsiz Keşif ve Teklif Alın
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            14 ana inşaat disiplininde hangi hizmetimize ihtiyacınız olursa olsun, uzman mühendis ekibimiz size en doğru teknik çözümü sunmaya hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-6 rounded-2xl shadow-lg"
            >
              <Link to="/contact">
                İletişime Geçin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 rounded-2xl font-semibold">
              <Link to="/calculator">
                <Calculator className="mr-2 h-5 w-5 text-accent" />
                Maliyet Hesaplayıcı
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sector Detail Modal (Copied from SectorDetailModal in mustafaagit.com.tr/hizmetler) */}
      {modalSector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setModalSector(null)}
        >
          <div
            className="bg-card text-foreground rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative border-2 border-border shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalSector(null)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-muted transition"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="border-b border-border pb-4 pr-10">
              <span className="text-xs font-extrabold text-accent uppercase tracking-widest">
                {modalSector.count} Mühendislik Kalemi
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground mt-1">
                {modalSector.title}
              </h3>
            </div>

            <div className="space-y-5">
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-line font-medium">
                {modalSector.detailedText}
              </p>

              <div className="bg-muted/40 p-5 rounded-2xl border border-border">
                <h4 className="text-xs font-extrabold text-foreground uppercase tracking-widest mb-3">
                  Alt Uzmanlık Kalemleri
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-semibold text-foreground/90">
                  {modalSector.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setModalSector(null)}
                className="text-xs font-bold text-muted-foreground hover:text-foreground"
              >
                Kapat
              </button>
              <Button
                onClick={() =>
                  openWhatsAppQuote(`${modalSector.cleanTitle} mühendislik detayları hakkında bilgi`)
                }
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Mühendisle WhatsApp'ta Görüş
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
