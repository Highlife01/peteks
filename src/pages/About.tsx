import { Users, Target, Award, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PETEKSLogo from "@/components/PETEKSLogo";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description:
        "Deprem yönetmeliğine tam uyumlu, enerji verimli ve estetik yapılar inşa ederek müşterilerimize güvenli yaşam ve çalışma alanları sunmak.",
    },
    {
      icon: TrendingUp,
      title: "Vizyonumuz",
      description:
        "Adana ve Akdeniz havzasından başlayarak tüm Türkiye'de mühendislik kalitesi, şeffaf maliyet yönetimi ve yenilikçi mimarisiyle referans gösterilen lider yapı markası olmak.",
    },
    {
      icon: Award,
      title: "Değerlerimiz",
      description:
        "Mühendislik etiği, A+ malzeme standardı, sözleşmeli zamanında teslimat, şeffaf bütçelendirme ve koşulsuz müşteri memnuniyeti.",
    },
  ];

  const pillars = [
    {
      title: "25+ Yıllık Mühendislik Deneyimi",
      desc: "Konut, lüks villa, çelik konstrüksiyon fabrika ve kamu/özel sektör projelerinde çeyrek asırlık saha tecrübesi.",
    },
    {
      title: "TBDY-2018 & TSE Standartları",
      desc: "C35/C40 sertifikalı hazır beton, S420 nervürlü çelik ve radye jeneratör temel ile maksimum sismik güvenlik.",
    },
    {
      title: "Sözleşmeli & Zamanında Teslim",
      desc: "Noter onaylı ve iş programına bağlı sözleşmelerle sürpriz maliyet olmadan taahhüt edilen tarihte anahtar teslim.",
    },
    {
      title: "Uzman Mimar & Mühendis Kadrosu",
      desc: "Statik proje, 3D iç mimari görselleştirme, belediye ruhsat/iskan takibi ve şantiye şefliği tek çatı altında.",
    },
    {
      title: "Şeffaf Bütçe & Raporlama",
      desc: "Projenin her aşamasında haftalık şantiye ilerleme raporları ve kalem kalem açık maliyet dökümü.",
    },
    {
      title: "Satış Sonrası Yapı Garantisi",
      desc: "Teslimat sonrasında da izolasyon, tesisat ve yapısal sistemlerde kapsamlı kurumsal garanti desteği.",
    },
  ];

  const [siteUrl, setSiteUrl] = useState<string>("https://www.peteksinsaat.com.tr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);

  const localBusinessData = useMemo(
    () => ({
      "@id": `${siteUrl}/about#localbusiness`,
      name: "PETEKS İnşaat & Mimarlık",
      image: `${siteUrl}/pwa-512x512.png`,
      description:
        "Adana, Mersin, Osmaniye, Niğde ve tüm Türkiye'de anahtar teslim inşaat, çelik yapı, prefabrik villa ve dekorasyon hizmetleri.",
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
      telephone: "+90-532-055-09-45",
      email: "peteksinsaat001@gmail.com",
      priceRange: "$$-$$$",
      areaServed: {
        "@type": "Country",
        name: "Turkey",
      },
    }),
    [siteUrl]
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Hakkımızda | PETEKS İnşaat & Mimarlık - 25+ Yıllık Mühendislik Güvencesi"
        description="PETEKS İnşaat & Mimarlık hakkında bilgi edinin. Adana merkezli 25+ yıllık mühendislik deneyimimiz, misyonumuz, vizyonumuz ve kalite standartlarımız."
        keywords="PETEKS hakkımızda, Peteks İnşaat Adana, Peteks Yapı, inşaat firması deneyim, müteahhitlik, çelik yapı, anahtar teslim inşaat"
      />
      <StructuredData type="GeneralContractor" data={localBusinessData} idSuffix="about" />
      <Navbar />

      {/* Luxury Hero Section */}
      <section className="pt-36 pb-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Hakkımızda" }]} />
          <div className="text-center space-y-4 mt-4">
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-400/30 uppercase tracking-widest text-xs px-3.5 py-1">
              Kurumsal Kimlik & Tarihçe
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              Çeyrek Asırlık <span className="gold-gradient-text">Mühendislik</span> ve Güven
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Mimari estetik, sarsılmaz statik dayanım ve şeffaf proje yönetimiyle geleceğin yapılarını inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="outline" className="border-accent/40 text-accent uppercase text-xs font-bold">
                PETEKS İnşaat Dekorasyon Tekstil San. Tic. Ltd. Şti.
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                Güven, Kalite ve Mühendislik Disipliniyle Büyüyen Yapı Markası
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">PETEKS</strong>; inşaat mühendisliği, mimari tasarım, dekorasyon ve tekstil alanlarında 25 yılı aşkın süredir kalite ve kurumsal güvenin temsilcisi olmuştur. Adana (Seyhan) merkez ofisimizden yönettiğimiz operasyonlarımızla Çukurova bölgesi başta olmak üzere Türkiye'nin dört bir yanında 500'den fazla projeyi başarıyla tamamladık.
                </p>
                <p>
                  Depreme dayanıklı betonarme konut blokları, lüks müstakil villalar, ağır çelik konstrüksiyon fabrikalar, endüstriyel fiberli saha betonları ve anahtar teslim iç mimari renovasyon projelerinde uluslararası mühendislik standartlarını uyguluyoruz.
                </p>
                <p>
                  Arsa sahiplerine ve yatırımcılara sunduğumuz <strong className="text-foreground">kat karşılığı</strong> ve <strong className="text-foreground">anahtar teslim taahhüt</strong> modellerimizde, sözleşmeli sabit bütçe ve zamanında teslimat ilkelerimizden ödün vermeden yüksek katma değer üretiyoruz.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-10 rounded-3xl glass-card border-2 border-accent/30 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent/15 rounded-full blur-2xl pointer-events-none" />
                <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 shadow-xl">
                  <PETEKSLogo variant="light" size="lg" />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full pt-2">
                  <div className="p-4 rounded-2xl bg-muted/60 border border-border">
                    <div className="font-heading text-3xl font-black text-accent">500+</div>
                    <div className="text-xs text-muted-foreground font-medium mt-1">Tamamlanan Proje</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/60 border border-border">
                    <div className="font-heading text-3xl font-black text-accent">25+ Yıl</div>
                    <div className="text-xs text-muted-foreground font-medium mt-1">Sektör Tecrübesi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">Kurumsal İlkelerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Her şantiyemizde ve her sözleşmemizde rehber aldığımız temel değerler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-border/80 hover:border-accent/50 transition-all rounded-3xl bg-card shadow-sm hover:shadow-xl"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <Badge variant="outline" className="border-accent/40 text-accent uppercase text-xs font-bold">
              Neden PETEKS?
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Bizi Farklı Kılan 6 Temel Güvence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border-2 border-border/70 hover:border-accent/40 transition-all space-y-2.5"
              >
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-6 rounded-2xl shadow-lg"
            >
              <Link to="/contact">
                Mühendislerimizle Tanışın & Teklif Alın
                <ArrowRight className="ml-2 h-5 w-5" />
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

export default About;
