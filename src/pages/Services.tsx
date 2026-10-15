import {
  Building2,
  Hammer,
  Home,
  Factory,
  Hotel,
  Warehouse,
  ArrowRight,
  Paintbrush,
  Droplets,
  Layers,
  ShieldCheck,
  HardHat,
  Columns,
  CheckCircle2,
  Calculator,
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

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Endüstriyel & Çelik Fabrika",
      description:
        "Modern mühendislik ile tasarlanan çelik konstrüksiyon fabrika ve depo binaları. Geniş açıklıklı ve yüksek taşıma kapasiteli sistemler.",
      features: ["Hatasız seri üretim", "Hızlı saha montajı", "Esnek genişleme imkanı", "Uluslararası standartlar"],
    },
    {
      icon: Warehouse,
      title: "Çelik Çatı & Konstrüksiyon",
      description:
        "Profesyonel çelik çatı tasarımı, statik hesaplamalar ve anahtar teslim montaj hizmetleri. Her türlü hava koşuluna dayanıklı çözümler.",
      features: ["Proje tasarımı", "Uzman montaj ekibi", "Korozyon dirençli kaplama", "Hafif ve güvenli yapı"],
    },
    {
      icon: Layers,
      title: "Çelik Yapı Sistemleri",
      description:
        "Depreme tam dayanıklı, hafif ve yüksek mukavemetli çelik konut ve ticari alan çözümleri. Daha az alanda daha geniş kullanım imkanı.",
      features: ["Deprem güvenliği", "Alan verimliliği (İnce kolon)", "Dört mevsim uygulama", "Milimetrik üretim hassasiyeti"],
    },
    {
      icon: HardHat,
      title: "Saha Beton Uygulamaları",
      description:
        "Endüstriyel sahalar, otoparklar ve yollar için yüksek dayanımlı saha beton döküm ve uygulama hizmetleri.",
      features: ["Lazerli mastar uygulaması", "Yüzey sertleştirici sistemler", "Vakumlu beton uygulaması", "Derz kesimi ve dolgusu"],
    },
    {
      icon: ShieldCheck,
      title: "Fiber Donatılı Saha Betonu",
      description:
        "Geleneksel hasır çelik yerine veya ek olarak kullanılan, çatlak direncini ve taşıma kapasitesini artıran fiber donatılı beton uygulamaları.",
      features: ["Polipropilen fiber kullanımı", "Çelik tel takviyesi", "Yüksek darbe direnci", "Ekonomik ve hızlı uygulama"],
    },
    {
      icon: Columns,
      title: "Yerinde Döküm Kolon",
      description:
        "Statik projelere tam uyumlu, hassas kalıp sistemleri ile yerinde döküm kolon ve taşıyıcı sistem uygulamaları.",
      features: ["Endüstriyel kalıp teknolojisi", "Yüksek dayanımlı beton hazırlığı", "Hatasız donatı yerleşimi", "Pürüzsüz yüzey bitişi"],
    },
    {
      icon: Droplets,
      title: "Drenaj & İzolasyon",
      description:
        "Yapıların ömrünü uzatan temel drenajı, altyapı çözümleri ve su/ısı izolasyon uygulamaları.",
      features: ["Temel ve perde yalıtımı", "Yağmur suyu drenaj hatları", "Kanalizasyon altyapısı", "Membran ve sürme yalıtım"],
    },
    {
      icon: Layers,
      title: "Epoksi Zemin Kaplama",
      description:
        "Fabrikalar, depolar ve ticari alanlar için tozumasız, hijyenik ve yüksek kimyasal dirençli epoksi kaplama çözümleri.",
      features: ["Self-leveling sistemler", "Anti-statik kaplamalar", "Kaymaz yüzey seçenekleri", "Geniş renk ve doku yelpazesi"],
    },
    {
      icon: Paintbrush,
      title: "Sıva & Boya İşleri",
      description:
        "İç ve dış mekan yüzey hazırlığı, makinalı alçı sıva ve profesyonel boya uygulama hizmetleri.",
      features: ["Makinalı alçı ve kara sıva", "Dekoratif boya uygulamaları", "Dış cephe boyama", "Yüzey koruyucu sistemler"],
    },
    {
      icon: Building2,
      title: "Bina & Apartman İnşaatı",
      description:
        "Modern mimari anlayışla konut, kat karşılığı arsa ve ticari bina projeleri. Her ölçekte sağlam ve estetik projeler.",
      features: ["Radye temel & C35/C40 beton", "TBDY-2018 deprem uyumu", "Enerji verimli A+ yalıtım", "Anahtar teslim çözüm"],
    },
    {
      icon: Hotel,
      title: "Otel & Turizm Tesis İnşaatı",
      description:
        "Butik otellerden büyük ölçekli tatil köylerine kadar profesyonel otel inşaatı ve renovasyon hizmetleri.",
      features: ["Özel mimari tasarım", "Akıllı bina otomasyonu", "Proje yönetimi", "Anahtar teslim uygulama"],
    },
    {
      icon: Hammer,
      title: "Tadilat & Renovasyon",
      description:
        "Mevcut yapılarınızı yenileme ve modernize etme hizmetleri. Profesyonel dokunuşlarla yaşam alanlarınızı dönüştürüyoruz.",
      features: ["İç mimari tasarım", "Cephe yenileme", "Altyapı yenileme", "Hızlı ve temiz çalışma"],
    },
    {
      icon: Home,
      title: "Prefabrik Evler & Villalar",
      description:
        "Ekonomik, hızlı montajlı ve modern prefabrik yaşam alanları. Dört mevsim yüksek ısı ve ses konforu.",
      features: ["Hızlı kurulum (15-45 gün)", "Ekonomik m² fiyatı", "Modern tasarım", "Uzun ömürlü galvaniz yapı"],
    },
  ];

  const [siteUrl, setSiteUrl] = useState<string>("https://www.peteksinsaat.com.tr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);

  const serviceData = useMemo(
    () => ({
      name: "PETEKS Anahtar Teslim İnşaat, Çelik Yapı ve Mühendislik Hizmetleri",
      serviceType:
        "İnşaat, Kat Karşılığı Arsa, Tadilat, Prefabrik Ev, Çelik Yapı, Otel, Fabrika, Endüstriyel Tesis, Saha Betonu, Epoksi Zemin Kaplama, Drenaj, İzolasyon",
      provider: {
        "@type": "GeneralContractor",
        name: "PETEKS İnşaat & Mimarlık",
        url: siteUrl,
        telephone: "+90-532-055-09-45",
      },
      areaServed: [
        { "@type": "City", "name": "Adana" },
        { "@type": "City", "name": "Mersin" },
        { "@type": "City", "name": "Osmaniye" },
        { "@type": "City", "name": "Niğde" },
        { "@type": "Country", "name": "Türkiye" },
      ],
    }),
    [siteUrl]
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Hizmetlerimiz | PETEKS İnşaat - Çelik Fabrika, Saha Betonu, Villa & Kat Karşılığı"
        description="Endüstriyel tesisler, çelik fabrika inşaatı, lazerli saha betonu, fiber donatılı beton, epoksi zemin kaplama, drenaj, izolasyon, villa ve kat karşılığı konut hizmetlerimiz."
        keywords="inşaat hizmetleri, fabrika inşaatı, endüstriyel tesis, saha betonu, fiber donatılı beton, epoksi zemin kaplama, drenaj, izolasyon, yerinde döküm kolon, müteahhit adana, kat karşılığı inşaat, prefabrik ev, çelik yapı"
      />
      <StructuredData type="Service" data={serviceData} idSuffix="services" />
      <Navbar />

      {/* Luxury Hero Section */}
      <section className="pt-36 pb-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Hizmetlerimiz" }]} />
          <div className="text-center space-y-4 mt-4">
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-400/30 uppercase tracking-widest text-xs px-3.5 py-1">
              13+ Uzman Mühendislik Disiplini
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              Kapsamlı <span className="gold-gradient-text">İnşaat & Yapı</span> Çözümlerimiz
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Endüstriyel çelik tesislerden saha betonuna, lüks villalardan kat karşılığı konut projelerine kadar A+ mühendislik kalitesi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-2 border-border/80 hover:border-accent/50 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-card flex flex-col justify-between"
              >
                <CardContent className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="font-heading text-2xl font-black text-muted-foreground/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 border-t border-border/60 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                description: "Yerinde ücretsiz keşif, zemin ve imar durumu analizi yapıyoruz.",
              },
              {
                step: "02",
                title: "Proje & Teklif",
                description: "3D mimari tasarım, statik proje ve şeffaf bütçe teklifi hazırlıyoruz.",
              },
              {
                step: "03",
                title: "Sözleşme & Ruhsat",
                description: "Resmi sözleşme sonrası belediye ruhsat ve izin süreçlerini tamamlıyoruz.",
              },
              {
                step: "04",
                title: "Şantiye & Uygulama",
                description: "Uzman mühendis kontrolünde A+ malzemelerle inşaatı yürütüyoruz.",
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
            Hangi hizmetimize ihtiyacınız olursa olsun, uzman mühendis ekibimiz size en doğru teknik çözümü sunmaya hazır.
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
