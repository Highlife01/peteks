import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Home,
  Hammer,
  Factory,
  HelpCircle,
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Calculator,
  Compass,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getLocationBySlugs, trSlugify } from "@/data/locations";

const CityDistrictSEO = () => {
  const { city: citySlug, district: districtSlug } = useParams<{
    city: string;
    district: string;
  }>();
  const [location, setLocation] = useState<ReturnType<typeof getLocationBySlugs>>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (citySlug && districtSlug) {
      const foundLocation = getLocationBySlugs(citySlug, districtSlug);
      setLocation(foundLocation);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [citySlug, districtSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        Yükleniyor...
      </div>
    );
  }

  if (!location || !citySlug || !districtSlug) {
    return <Navigate to="/404" replace />;
  }

  const {
    city,
    district,
    regionCode,
    coordinates,
    climateAndSoilNote,
    regionalFocus,
    allDistrictsInCity,
  } = location;

  const services = [
    {
      title: `${district} Anahtar Teslim İnşaat & Villa`,
      description: `${city} ${district} bölgesinde arsanız üzerine hayalinizdeki müstakil villayı, apartmanı veya ticari yapıyı TBDY-2018 deprem yönetmeliğine tam uyumlu radye temel ve C35/C40 beton güvencesiyle anahtar teslim inşa ediyoruz.`,
      icon: Building2,
      highlights: ["Mimari & Statik Proje", "Belediye Ruhsat & İskan Takibi", "Sözleşmeli Sabit Fiyat"],
    },
    {
      title: `${district} Kat Karşılığı Arsa Değerlendirme`,
      description: `${district} sınırları içerisindeki imarlı arsalarınızı kat karşılığı modeliyle en yüksek emsal verimliliğinde değerlendiriyoruz. Noter güvenceli sözleşme ve A+ malzeme kalitesiyle mülkünüze değer katıyoruz.`,
      icon: Home,
      highlights: ["Ücretsiz İmar & Emsal Analizi", "Yüksek Arsa Sahibi Payı", "Lüks Konut & Daire Teslimi"],
    },
    {
      title: `${district} Prefabrik, Çelik Yapı & Fabrika`,
      description: `${district} bölgesinde bağ evi, yayla villası veya sanayi/tarım depolama ihtiyaçlarınız için sismik dayanımı yüksek galvaniz çelik villalar, prefabrik konutlar ve fiberli C35 saha betonu uyguluyoruz.`,
      icon: Factory,
      highlights: ["30-60 Günde Hızlı Teslim", "A+ Taşyünü Isı Yalıtımı", "Endüstriyel Saha Betonu & Epoksi"],
    },
    {
      title: `${district} İç Mimari Tadilat & Dekorasyon`,
      description: `${district} genelindeki mevcut daire, villa ve iş yerleriniz için komple mutfak/banyo yenileme, asma tavan, dış cephe mantolama, boya ve anahtar teslim dekorasyon çözümleri sunuyoruz.`,
      icon: Hammer,
      highlights: ["3D İç Mimari Tasarım", "Tesisat & Altyapı Yenileme", "Garantili İşçilik"],
    },
  ];

  const faqs = [
    {
      question: `${city} ${district} bölgesinde kat karşılığı inşaat süreci nasıl işler?`,
      answer: `${district} bölgesinde kat karşılığı inşaat süreci; arsanızın belediye imar durumunun incelenmesi, mimari etüt çalışması, noter onaylı kat karşılığı inşaat sözleşmesi, yapı ruhsatı alımı ve anahtar teslim iskan aşamalarından oluşur. PETEKS İnşaat tüm süreci şeffaf ve garantili şekilde yürütür.`,
    },
    {
      question: `${district} bölgesinde 2026 m² inşaat ve villa yapım fiyatları ne kadardır?`,
      answer: `${district} bölgesinde 2026 yılı itibarıyla çelik ve prefabrik konut projeleri ortalama 15.000 TL/m², endüstriyel tesis ve depolar 20.000 TL/m², betonarme müstakil konut ve villalar ise 25.000 - 32.000 TL/m² aralığındadır. Zemin etüdü ve malzeme seçimine göre net teklif ücretsiz keşif sonrası sunulur.`,
    },
    {
      question: `PETEKS İnşaat ${district} ilçesinde hangi hizmetleri sunuyor?`,
      answer: `PETEKS İnşaat ${district} ilçesinde anahtar teslim bina ve villa inşaatı, kat karşılığı arsa değerlendirme, çelik konstrüksiyon fabrika/depo yapımı, saha betonu, epoksi zemin kaplama, prefabrik ev kurulumu ve komple iç mimari tadilat hizmetleri sunmaktadır.`,
    },
    {
      question: `${district}’de arsam için ücretsiz keşif ve imar analizi yapıyor musunuz?`,
      answer: `Evet, ${city} ${district} ve çevresindeki tüm arsalarınız veya tadilat projeleriniz için uzman inşaat mühendislerimiz ve mimarlarımız ücretsiz yerinde keşif, zemin ön değerlendirmesi ve emsal hesaplaması yapmaktadır.`,
    },
  ];

  const siteUrl = "https://www.peteksinsaat.com.tr";
  const pageUrl = `${siteUrl}/${citySlug}/${districtSlug}`;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title={`${district} İnşaat Firması & Müteahhit | PETEKS İnşaat ${city}`}
        description={`PETEKS İnşaat, ${city} ${district} bölgesinde anahtar teslim inşaat, kat karşılığı arsa değerlendirme, çelik villa, prefabrik ev ve tadilat hizmetleri sunar. Ücretsiz keşif: 0532 055 09 45.`}
        keywords={`${district} inşaat firması, ${district} müteahhit, ${city} ${district} konut projeleri, ${district} anahtar teslim inşaat, ${district} kat karşılığı inşaat, ${district} arsa değerlendirme, ${district} prefabrik ev, ${district} çelik villa, ${district} tadilat dekorasyon, PETEKS İnşaat ${district}`}
        ogUrl={pageUrl}
        geoRegion={regionCode}
        geoPlacename={`${district}, ${city}`}
        geoPosition={`${coordinates.lat};${coordinates.lng}`}
      />

      <StructuredData
        type="LocalBusiness"
        idSuffix={`${citySlug}-${districtSlug}`}
        data={{
          "@id": `${pageUrl}#localbusiness`,
          name: `PETEKS İnşaat & Mimarlık - ${city} ${district}`,
          url: pageUrl,
          logo: `${siteUrl}/logo.png`,
          image: `${siteUrl}/og-image.jpg`,
          description: `PETEKS İnşaat, ${city} ${district} bölgesinde anahtar teslim inşaat, konut projeleri, çelik yapı, prefabrik villa ve kat karşılığı arsa değerlendirme hizmetleri sunmaktadır.`,
          telephone: "+90-532-055-09-45",
          email: "info@peteksinsaat.com.tr",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gürselpaşa Mah. 75163 Sk. Bekaroğlu Blue City Pınar A Blok No:5/A",
            addressLocality: district,
            addressRegion: city,
            postalCode: "01200",
            addressCountry: "TR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: `${city} ${district}`,
          },
          priceRange: "$$-$$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "42",
          },
          sameAs: [
            "https://www.instagram.com/peteksinsaat",
            "https://www.facebook.com/peteksinsaat",
          ],
        }}
      />

      <StructuredData
        type="FAQPage"
        idSuffix={`faq-${citySlug}-${districtSlug}`}
        data={{
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <Navbar />

      {/* Luxury Regional Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-950 text-white border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: `${city} İnşaat Hizmetleri`, url: `/${citySlug}/${trSlugify(allDistrictsInCity[0])}` },
              { label: `${district} İnşaat & Müteahhitlik` },
            ]}
          />

          <div className="text-center space-y-6 mt-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>
                {city} / {district} • Bölge Kodu: {regionCode}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              {district} Bölgesinde <span className="gold-gradient-text">Anahtar Teslim İnşaat</span>, Villa ve Kat Karşılığı Projeler
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {city} {district} genelinde 25+ yıllık PETEKS Mühendislik güvencesiyle depreme dayanıklı radye temelli konutlar, çelik villalar, endüstriyel tesisler ve sözleşmeli arsa değerlendirme çözümleri.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white font-bold px-8 py-6 rounded-2xl shadow-xl shadow-amber-500/20"
              >
                <Link to="/contact">
                  {district} İçin Ücretsiz Keşif Alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white/25 bg-white/5 hover:bg-white/15 px-8 py-6 rounded-2xl font-semibold"
              >
                <Link to="/calculator">
                  <Calculator className="mr-2 h-5 w-5 text-amber-400" />
                  {district} m² Maliyet Hesapla
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Engineering & Soil/Climate Highlight Banner */}
      <section className="py-12 bg-muted/40 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg text-foreground mb-1">
                  {city} {district} Zemin & İklim Mühendisliği
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{climateAndSoilNote}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg text-foreground mb-1">
                  {district} Bölgesel Proje Odağımız
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{regionalFocus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="outline" className="text-accent border-accent/30 uppercase text-xs font-bold">
              Yerel Şantiye & Taahhüt Hizmetleri
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              {city} {district} Uzmanlık Alanlarımız
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-border/80 hover:border-accent/50 transition-all duration-300 rounded-3xl hover:shadow-xl bg-card"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {h}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authoritative GEO Content & Direct Call Banner */}
      <section className="py-20 bg-muted/30 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-extrabold mb-8 text-center text-foreground">
            {city} {district} İnşaat ve Müteahhitlik Rehberi
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-5 leading-relaxed">
            <p>
              <strong>PETEKS İnşaat & Mimarlık</strong> olarak,{" "}
              <strong className="text-foreground">
                {city} {district}
              </strong>{" "}
              bölgesinde konut, villa, ticari yapı ve endüstriyel tesis inşaatlarında 25 yılı aşkın mühendislik deneyimimizle hizmet veriyoruz. Bölgenin imar yönetmeliklerine, zemin mekaniği verilerine ve iklim koşullarına tam uyumlu statik projeler geliştiriyoruz.
            </p>
            <p>
              {district} bölgesindeki arsa sahipleri için sunduğumuz{" "}
              <strong className="text-foreground">kat karşılığı arsa değerlendirme</strong> ve{" "}
              <strong className="text-foreground">anahtar teslim müteahhitlik</strong> modellerimizle, mülkünüzün yatırım değerini en üst seviyeye taşıyoruz. C35/C40 sınıfı sertifikalı hazır beton, S420 nervürlü çelik donatı ve radye jeneratör temel uygulamalarımızla deprem güvenliğini standart olarak sunuyoruz.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 rounded-3xl border border-amber-500/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Award className="h-4 w-4 mr-1.5" />
                  Ücretsiz Yerinde Keşif & Emsal Hesabı
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  {district}'de Arsanız veya Tadilat Projeniz mi Var?
                </h3>
                <p className="text-slate-300 text-sm">
                  Uzman inşaat mühendislerimizle doğrudan görüşerek projenizi planlayın.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold shrink-0 rounded-2xl px-8 py-6"
              >
                <a href="tel:+905320550945">
                  <Phone className="mr-2 h-5 w-5" />
                  0532 055 09 45
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 text-accent">
              <HelpCircle className="h-7 w-7" />
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-foreground">
              {district} İnşaat — Sıkça Sorulan Sorular
            </h2>
            <p className="text-muted-foreground text-sm">
              {city} {district} bölgesi inşaat maliyetleri, ruhsat ve kat karşılığı süreçleri hakkında merak edilenler
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card px-6 rounded-2xl border-2 border-border/70"
              >
                <AccordionTrigger className="text-left font-heading font-bold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Neighboring Districts Internal Linking Hub */}
      <section className="py-16 bg-muted/30 border-t border-border/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {city} İli Diğer Hizmet İlçelerimiz
              </h3>
              <p className="text-xs text-muted-foreground">
                {city} genelindeki tüm şantiye ve müteahhitlik hizmet noktalarımız
              </p>
            </div>
            <Link to="/" className="text-xs font-bold text-accent hover:underline">
              Tüm Hizmet İllerini Gör →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {allDistrictsInCity.map((distName) => {
              const dSlug = trSlugify(distName);
              const isCurrent = dSlug === districtSlug;
              return (
                <Link
                  key={distName}
                  to={`/${citySlug}/${dSlug}`}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                    isCurrent
                      ? "bg-accent text-white border-accent shadow-sm"
                      : "bg-card hover:bg-accent/10 text-foreground border-border/80 hover:border-accent/40"
                  }`}
                >
                  <span className="truncate">{distName}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 ml-1 opacity-75" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl font-black">
            {district}'nin En Güvenilir Yapı Projelerinde Yerinizi Alın
          </h2>
          <p className="text-lg text-slate-300">
            Hemen iletişime geçin, {city} {district} projeniz için ücretsiz keşif ve şeffaf bütçe teklifi hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-6 rounded-2xl"
            >
              <Link to="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                İletişim & Keşif Formu
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white/25 bg-white/5 hover:bg-white/15 px-8 py-6 rounded-2xl"
            >
              <a
                href={`https://wa.me/905320550945?text=${encodeURIComponent(
                  `Merhaba PETEKS İnşaat, ${city} ${district} bölgesindeki projem için bilgi ve teklif almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp'tan Hızlı Teklif Alın
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CityDistrictSEO;
