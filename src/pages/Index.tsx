import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import {
  Building2,
  Hammer,
  Home,
  Factory,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Calculator,
  Sparkles,
  ShieldCheck,
  Award,
  Phone,
  HelpCircle,
  Layers,
  Clock,
  Ruler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import ServiceAreasSection from "@/components/ServiceAreasSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroImages = [
    {
      src: hero1,
      tag: "TBDY-2018 Uyumlu Mühendislik",
      title: "Modern İnşaat & Konut Projeleri",
      subtitle: "Radye temel ve C35/C40 beton teknolojisiyle yüksek güvenlikli yaşam alanları",
    },
    {
      src: hero2,
      tag: "Anahtar Teslim Özel Mimari",
      title: "Lüks Villa & Çelik Yapı Tasarımları",
      subtitle: "Estetik mimari, A+ ısı yalıtımı ve doğayla bütünleşen müstakil konfor",
    },
    {
      src: hero3,
      tag: "Ticari & Turizm Yatırımları",
      title: "Otel & Prestijli Konaklama Tesisleri",
      subtitle: "Uluslararası standartlarda fonksiyonel, estetik ve yüksek yatırım değerli projeler",
    },
    {
      src: hero4,
      tag: "Ağır Çelik & Saha Betonu",
      title: "Endüstriyel Fabrika & Depo İnşaatı",
      subtitle: "Geniş açıklıklı çelik konstrüksiyon ve lazer mastarlı fiber saha betonu çözümleri",
    },
    {
      src: hero5,
      tag: "Kat Karşılığı Arsa Değerlendirme",
      title: "Rezidans & Akıllı Yaşam Kompleksleri",
      subtitle: "Adana, Mersin ve tüm Türkiye'de arsanıza maksimum değer katan projeler",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const services = [
    {
      number: "01",
      icon: Building2,
      title: "Anahtar Teslim İnşaat & Yapı",
      description:
        "Konut, apartman, rezidans ve kat karşılığı arsa projelerinde mimari tasarımdan iskana kadar tam kapsamlı mühendislik.",
      highlights: ["Radye Jeneratör Temel", "C35/C40 Hazır Beton", "Kat Karşılığı Çözümler"],
      link: "/services",
    },
    {
      number: "02",
      icon: Factory,
      title: "Endüstriyel Tesis & Saha Betonu",
      description:
        "Çelik konstrüksiyon fabrika, antrepo, lazerli saha betonu, fiber donatılı zemin ve epoksi kaplama uygulamaları.",
      highlights: ["Ağır Çelik Konstrüksiyon", "Fiberli Saha Betonu", "Epoksi Zemin Kaplama"],
      link: "/services",
    },
    {
      number: "03",
      icon: Home,
      title: "Prefabrik & Çelik Villa",
      description:
        "1. derece deprem bölgesine tam uyumlu, A+ enerji sınıfı taşyünü yalıtımlı, hızlı kurulumlu çelik ve prefabrik villalar.",
      highlights: ["Depreme Maksimum Dayanım", "30-60 Günde Teslim", "Yüksek Isı/Ses Yalıtımı"],
      link: "/calculator",
    },
    {
      number: "04",
      icon: Hammer,
      title: "İç Mimari, Tadilat & Dekorasyon",
      description:
        "Lüks konut ve ofis renovasyonu, asma tavan, İtalyan boya, mutfak/banyo yenileme ve dış cephe termal mantolama.",
      highlights: ["3D Mimari Sunum", "A+ Sınıf Malzeme", "Sözleşmeli Zamanında Teslim"],
      link: "/decoration",
    },
  ];

  const stats = [
    { number: "500+", label: "Tamamlanan Prestijli Proje", sub: "Konut, Villa & Endüstriyel" },
    { number: "25+", label: "Yıllık Sektör Deneyimi", sub: "Uzman Mimar & Mühendis Kadrosu" },
    { number: "2.5M+ m²", label: "Toplam İnşaat & Saha Alanı", sub: "Türkiye Genelinde Uygulama" },
    { number: "%100", label: "Sözleşmeli Teslimat Başarısı", sub: "Şeffaf Bütçe & Garanti" },
  ];

  const whyUs = [
    "25+ yıllık sektör tecrübesi ve uzman inşaat mühendisi / mimar kadrosu",
    "TBDY-2018 Türkiye Bina Deprem Yönetmeliğine %100 uyumlu statik projelendirme",
    "A+ kalite TSE ve CE belgeli sertifikalı yapı malzemeleri",
    "Resmi sözleşmeli, sabit bütçeli ve zamanında anahtar teslim garantisi",
    "İnteraktif 2026 m² maliyet hesaplayıcı ile saniyeler içinde şeffaf bütçe",
    "Adana, Mersin, Osmaniye, Niğde başta olmak üzere tüm Türkiye'de ücretsiz ön keşif",
  ];

  // GEO / AI Search Structured Comparison Table Data
  const comparisonRows = [
    {
      system: "Betonarme Yapı (Radye Temel)",
      duration: "6 - 12 Ay",
      seismic: "Çok Yüksek (TBDY-2018 C35/C40)",
      lifespan: "70 - 100+ Yıl",
      insulation: "A / A+ Sınıfı (Mantolama)",
      avgCost: "~25.000 - 32.000 ₺ / m²",
    },
    {
      system: "Hafif Çelik Lüks Villa",
      duration: "2 - 4 Ay",
      seismic: "Maksimum (Esnek Galvaniz Çelik)",
      lifespan: "80 - 100+ Yıl",
      insulation: "A+ Sınıfı (Taşyünü + Kompozit)",
      avgCost: "~18.000 - 28.000 ₺ / m²",
    },
    {
      system: "Prefabrik Konut & Bağ Evi",
      duration: "15 - 45 Gün",
      seismic: "Yüksek (Hafif Karkas)",
      lifespan: "50 - 70 Yıl",
      insulation: "A Sınıfı (Sandviç Panel)",
      avgCost: "~15.000 - 20.000 ₺ / m²",
    },
    {
      system: "Endüstriyel Çelik Fabrika & Depo",
      duration: "3 - 6 Ay",
      seismic: "Maksimum (Ağır Çelik Makas)",
      lifespan: "80 - 100+ Yıl",
      insulation: "Endüstriyel Çatı/Cephe Paneli",
      avgCost: "~20.000 ₺ / m²",
    },
  ];

  const homeFaqs = [
    {
      question: "PETEKS İnşaat hangi şehirlerde ve bölgelerde hizmet veriyor?",
      answer:
        "Merkez ofisimiz Adana (Seyhan) Gürselpaşa Mahallesi'nde bulunmakta olup; Adana, Mersin, Osmaniye ve Niğde'nin tüm ilçelerinde doğrudan şantiye operasyonlarımızla, büyük ölçekli endüstriyel tesis, otel ve çelik yapı projelerinde ise İstanbul dahil tüm Türkiye'de anahtar teslim hizmet sunuyoruz.",
    },
    {
      question: "2026 yılında anahtar teslim inşaat ve villa m² maliyetleri ne kadar?",
      answer:
        "2026 yılı itibarıyla çelik ve prefabrik yapılar ortalama 15.000 TL/m², endüstriyel fabrika ve depo inşaatları 20.000 TL/m², betonarme müstakil konutlar 25.000 TL/m² ve lüks özel tasarım villalar 32.000 TL/m² seviyesinden başlamaktadır. Sitemizdeki Akıllı Maliyet Hesaplayıcı ile projenizin net bütçesini anında hesaplayabilirsiniz.",
    },
    {
      question: "Kat karşılığı arsa değerlendirme süreciniz nasıl işliyor?",
      answer:
        "Arsanızın imar durumu ve emsal (KAKS/TAKS) analizi mimarlarımız tarafından ücretsiz yapılır. Ardından arsa sahibinin haklarını noter onaylı sözleşme ve teminatlarla koruyan şeffaf paylaşım modeli oluşturulur; ruhsat, inşaat ve iskan süreçleri eksiksiz tamamlanarak daireleriniz anahtar teslim edilir.",
    },
    {
      question: "Yapılarınızda deprem güvenliği için hangi standartları uyguluyorsunuz?",
      answer:
        "Tüm projelerimizde zemin etüdü (sismik ve sondaj) sonuçlarına göre radye jeneratör temel, C35/C40 yüksek dayanım sınıfı hazır beton ve TS 708 standartlarında S420 nervürlü çelik ya da sismik esneme kabiliyetine sahip galvanizli çelik konstrüksiyon sistemleri kullanılmaktadır.",
    },
  ];

  const [siteUrl, setSiteUrl] = useState<string>("https://www.peteksinsaat.com.tr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);

  const organizationData = useMemo(
    () => ({
      "@id": `${siteUrl}/#organization`,
      name: "PETEKS İnşaat & Mimarlık",
      alternateName: "PETEKS Moda Tasarım Tekstil İnşaat",
      url: siteUrl,
      logo: `${siteUrl}/pwa-512x512.png`,
      description:
        "Adana, Mersin, Osmaniye, Niğde ve tüm Türkiye'de anahtar teslim inşaat, çelik yapı, prefabrik villa, endüstriyel saha betonu ve dekorasyon hizmetleri.",
      telephone: "+90-532-055-09-45",
      email: "peteksinsaat001@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gürselpaşa Mah. 75163 Sk. Bekaroğlu Blue City Pınar A Blok No:5/A",
        addressLocality: "Seyhan",
        addressRegion: "Adana",
        postalCode: "01200",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.0,
        longitude: 35.3213,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-532-055-09-45",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"],
      },
    }),
    [siteUrl]
  );

  const faqSchema = useMemo(
    () => ({
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="PETEKS İnşaat & Mimarlık | Anahtar Teslim İnşaat, Villa, Çelik Yapı & Dekorasyon"
        description="PETEKS İnşaat & Mimarlık; Adana, Mersin, Osmaniye, Niğde ve tüm Türkiye'de 25+ yıllık deneyimle konut, lüks villa, çelik fabrika, prefabrik ev, saha betonu ve dekorasyon projeleri sunar."
        keywords="peteks, peteks inşaat, adana inşaat firması, mersin inşaat firması, anahtar teslim inşaat, kat karşılığı inşaat, villa yapımı, tadilat dekorasyon, prefabrik ev fiyatları 2026, çelik yapı, saha betonu"
        geoRegion="TR-01"
        geoPlacename="Seyhan, Adana"
        geoPosition="37.0000;35.3213"
      />
      <StructuredData type="GeneralContractor" data={organizationData} />
      <StructuredData type="FAQPage" data={faqSchema} idSuffix="home" />
      <Navbar />

      {/* Hero Carousel Section */}
      <section
        className="relative min-h-[92vh] lg:h-screen overflow-hidden flex items-center pt-24 pb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } transition-transform ease-out`}
            style={{ transitionDuration: "7000ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10" />
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>{heroImages[currentSlide]?.tag || "PETEKS Mimarlık & Mühendislik"}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight">
                {heroImages[currentSlide]?.title}
              </h1>

              <p className="text-lg sm:text-2xl text-amber-400 font-semibold max-w-2xl leading-snug">
                {heroImages[currentSlide]?.subtitle}
              </p>

              <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Adana, Mersin, Osmaniye, Niğde ve Türkiye genelinde 25 yıllık mühendislik disiplini, C35/C40 radye temel güvencesi ve sözleşmeli anahtar teslim garantisiyle geleceği inşa ediyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 via-accent to-orange-600 hover:opacity-95 text-white font-bold text-base px-8 py-7 rounded-2xl shadow-2xl shadow-amber-500/25 transition-all hover:scale-[1.02]"
                >
                  <Link to="/calculator">
                    <Calculator className="mr-2.5 h-5 w-5" />
                    2026 Maliyet Hesaplayıcı
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-7 rounded-2xl bg-white/10 backdrop-blur-md text-white border-white/25 hover:bg-white/20 font-semibold"
                >
                  <Link to="/projects">
                    Projelerimizi İnceleyin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Quick Trust Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  TBDY-2018 Deprem Yönetmeliği
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                  <Award className="h-4 w-4 text-amber-400" />
                  TSE Belgeli A+ Malzeme
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-amber-400" />
                  Sözleşmeli Zamanında Teslim
                </span>
              </div>
            </div>

            {/* Right Floating Glassmorphic Quick Card (Desktop) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="glass-panel-dark rounded-3xl p-7 text-white space-y-6 border border-amber-400/25 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
                      Hızlı Mühendislik Hattı
                    </span>
                    <h2 className="font-heading text-xl font-bold mt-0.5">Ücretsiz Keşif & Teklif</h2>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span>Çelik & Prefabrik Yapı</span>
                    <span className="font-bold text-amber-400">~15.000 ₺ / m²</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span>Endüstriyel Fabrika & Depo</span>
                    <span className="font-bold text-amber-400">~20.000 ₺ / m²</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span>Betonarme Konut & Villa</span>
                    <span className="font-bold text-amber-400">~25.000+ ₺ / m²</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Button
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl py-5"
                  >
                    <a href="tel:+905320550945">
                      <Phone className="h-4 w-4 mr-2" />
                      Hemen Arayın: 0532 055 09 45
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/20 bg-white/5 hover:bg-white/15 text-white rounded-xl py-5 text-xs"
                  >
                    <Link to="/contact">Arsa & Proje Değerlendirme Formu</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-md hover:bg-accent text-white p-3 rounded-full transition-all shadow-lg border border-white/15"
          aria-label="Önceki slayt"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-md hover:bg-accent text-white p-3 rounded-full transition-all shadow-lg border border-white/15"
          aria-label="Sonraki slayt"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5" role="tablist">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/75"
              }`}
              aria-label={`Slayt ${index + 1}`}
              role="tab"
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-light opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-amber-500/40 transition-all text-center group"
              >
                <div className="font-heading text-3xl sm:text-5xl font-black mb-1.5 gold-gradient-text group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <Badge
              variant="outline"
              className="px-3.5 py-1 border-accent/40 text-accent bg-accent/5 font-semibold tracking-wider uppercase text-xs"
            >
              Mühendislik & Mimari Çözümler
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Uzmanlık Alanlarımız & <span className="gold-gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Mimari avan projeden statik betonarme/çelik hesaplamalara ve anahtar teslim iç mimari uygulamaya kadar tek merkezden profesyonel yönetim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/70 hover:border-accent/60 bg-card rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <CardContent className="p-7 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-heading text-3xl font-black text-muted-foreground/20 group-hover:text-accent/30 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 border-t border-border/60 pt-4">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center text-xs font-medium text-foreground/85">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent mr-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-xs font-bold text-accent group-hover:translate-x-1 transition-transform"
                  >
                    Detaylı İncele
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 border-2 border-accent/40 hover:bg-accent hover:text-white font-bold transition-all"
            >
              <Link to="/services">
                13+ Mühendislik Hizmetimizin Tamamını Görün
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="outline"
                className="px-3.5 py-1 border-accent/40 text-accent bg-accent/5 font-semibold tracking-wider uppercase text-xs"
              >
                Kurumsal Güven & Mühendislik Disiplini
              </Badge>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold leading-tight text-foreground">
                Neden <span className="gold-gradient-text">PETEKS</span> İle Çalışmalısınız?
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                İnşaat, çelik yapı ve mimari dekorasyon projelerinde sağlam statik altyapıyı zamansız estetikle buluşturuyor, yatırımınızı sözleşmeli güvence altına alıyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-2xl bg-muted/40 border border-border/60 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent/15 border border-accent/30 rounded-full flex items-center justify-center mt-0.5 text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-white rounded-2xl px-8 font-bold shadow-lg"
                >
                  <Link to="/about">
                    Kurumsal Kimliğimiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 font-semibold">
                  <Link to="/calculator">
                    <Calculator className="mr-2 h-4 w-4 text-accent" />
                    Bütçe Hesapla
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl group">
                <img
                  src={hero2}
                  alt="PETEKS Mühendislik ve Mimari Kalite"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel-dark text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <ShieldCheck className="h-8 w-8 text-amber-400 shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold">25+ Yıllık Mühendislik Güvencesi</h3>
                      <p className="text-xs text-slate-300">Adana, Mersin ve Tüm Türkiye'de 500+ Tamamlanan Proje</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Structured Comparison Table: Building Systems & 2026 Costs */}
      <section className="py-24 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <Badge
              variant="outline"
              className="px-3.5 py-1 border-accent/40 text-accent bg-accent/5 font-semibold tracking-wider uppercase text-xs"
            >
              <Layers className="h-3.5 w-3.5 mr-1.5 inline" />
              2026 Teknik & Maliyet Karşılaştırma Rehberi
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              Yapı Sistemleri <span className="gold-gradient-text">Karşılaştırma Tablosu</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Arsanız ve bütçeniz için en doğru yapı sistemini seçebilmeniz adına betonarme, hafif çelik, prefabrik ve endüstriyel sistemlerin teknik performans verileri.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto rounded-3xl border-2 border-border/80 shadow-xl bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="p-4 sm:p-5 font-heading font-bold">Yapı Sistemi</th>
                  <th className="p-4 sm:p-5 font-heading font-bold">Teslim Süresi</th>
                  <th className="p-4 sm:p-5 font-heading font-bold">Deprem Dayanımı</th>
                  <th className="p-4 sm:p-5 font-heading font-bold">Kullanım Ömrü</th>
                  <th className="p-4 sm:p-5 font-heading font-bold">Isı Yalıtımı</th>
                  <th className="p-4 sm:p-5 font-heading font-bold text-amber-400">2026 Ortalama m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-foreground flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-accent shrink-0" />
                      {row.system}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground font-medium">{row.duration}</td>
                    <td className="p-4 sm:p-5 text-foreground font-medium">{row.seismic}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.lifespan}</td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{row.insulation}</td>
                    <td className="p-4 sm:p-5 font-extrabold text-accent">{row.avgCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground mb-4">
              * Fiyatlar seçilen malzeme sınıfı (Ekonomik, Standart Plus, Lüks) ve kat sayısına göre değişiklik göstermektedir.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-8">
              <Link to="/calculator">
                <Calculator className="mr-2 h-4 w-4" />
                Kendi Projenizin Net Maliyetini Hesaplayın
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regional Service Areas Hub (Local SEO & Internal Linking) */}
      <ServiceAreasSection />

      {/* Customer Testimonials Section */}
      <TestimonialsSection />

      {/* Homepage FAQ Section (GEO + FAQPage Schema) */}
      <section className="py-24 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14 space-y-4">
            <Badge
              variant="outline"
              className="px-3.5 py-1 border-accent/40 text-accent bg-accent/5 font-semibold tracking-wider uppercase text-xs"
            >
              <HelpCircle className="h-3.5 w-3.5 mr-1.5 inline" />
              Merak Edilenler & Doğrudan Yanıtlar
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Sıkça Sorulan <span className="gold-gradient-text">Sorular</span>
            </h2>
            <p className="text-muted-foreground">
              Anahtar teslim inşaat, kat karşılığı projeler ve 2026 yapı maliyetleri hakkında en çok sorulan sorular
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {homeFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`home-faq-${idx}`}
                className="bg-card px-6 rounded-2xl border-2 border-border/70 hover:border-accent/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-base sm:text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <SubsidiariesSection />

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-6 relative z-10">
          <Badge className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1 text-xs uppercase tracking-widest">
            Ücretsiz Yerinde Keşif & Statik Ön Değerlendirme
          </Badge>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white leading-tight">
            Projeniz İçin <span className="gold-gradient-text">Hemen</span> Teklif Alın
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Adana, Mersin, Osmaniye, Niğde ve tüm Türkiye'deki arsa veya tadilat projeleriniz için uzman mühendis ekibimizle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base sm:text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-amber-500/25 hover:opacity-95"
            >
              <Link to="/contact">
                Ücretsiz Keşif Randevusu Alın
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-8 py-7 rounded-2xl border-white/25 bg-white/5 text-white hover:bg-white/15"
            >
              <Link to="/calculator">
                <Calculator className="mr-2 h-5 w-5 text-amber-400" />
                Maliyeti Kendin Hesapla
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
