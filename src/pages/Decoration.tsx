import { Paintbrush, Hammer, Ruler, Grid, Palette, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";

const Decoration = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Boya & Dış Cephe Mantolama",
      description:
        "İç ve dış cephe boya uygulamaları, İtalyan dekoratif boya teknikleri, taşyünü/EPS ısı yalıtım mantolama ve renk danışmanlığı.",
      features: ["Silinebilir Saten Boya", "İtalyan Dekoratif Boya", "Dış Cephe Termal Mantolama", "Desenli Boya Uygulamaları"],
    },
    {
      icon: Grid,
      title: "Alçıpan & Asma Tavan Sistemleri",
      description:
        "Modern asma tavan tasarımları, gizli LED ışık bantları, akustik bölme duvar ve özel alçıpan TV ünitesi niş uygulamaları.",
      features: ["Gizli Işık Bant Sistemleri", "Gergi & Akustik Tavan", "Taşyünü Tavan", "Özel TV Ünitesi Tasarımları"],
    },
    {
      icon: Ruler,
      title: "Zemin Kaplama & Epoksi",
      description:
        "Derzli laminat parke, geniş ebat rektifiyeli porselen seramik, granit, mermer döşeme ve 3D/self-leveling epoksi zemin çözümleri.",
      features: ["A+ Sınıf Derzli Parke", "60x120 Porselen Granit", "Epoksi Zemin Kaplama", "Lake Süpürgelik Montajı"],
    },
    {
      icon: Hammer,
      title: "Mutfak & Banyo Komple Yenileme",
      description:
        "Eski mutfak ve banyolarınızı 3D mimari tasarımla baştan aşağı yeniliyoruz. Lake/akrilik dolap, kuvars tezgah ve tesisat yenileme.",
      features: ["Özel Ölçü Lake/Akrilik Dolap", "Temperli Duşakabin Sistemleri", "PPRC & Elektrik Tesisat Yenileme", "Gömme Rezervuar & Vitra/Artema"],
    },
    {
      icon: Palette,
      title: "Duvar Kağıdı & Dekoratif Sıva",
      description:
        "İthal vinil ve tekstil tabanlı duvar kağıdı uygulamaları, sedef boya, Venedik sıva ve brüt beton görünümlü mimari çalışmalar.",
      features: ["3D & İthal Duvar Kağıtları", "Tekstil Tabanlı Kağıt", "Venedik Mermer Sıva", "Beton Görünümlü Sıva"],
    },
    {
      icon: Lightbulb,
      title: "Mimari Aydınlatma & Akıllı Ev",
      description:
        "Mekanlarınıza derinlik katan profesyonel aydınlatma projeleri, magnetik ray spot sistemleri ve akıllı ev otomasyon altyapısı.",
      features: ["Mimari LED Aydınlatma", "Magnetik & Ray Spot", "Avize & Aplik Montajı", "Akıllı Ev Otomasyon Sistemleri"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="İç Mimari, Tadilat & Dekorasyon Hizmetleri | PETEKS İnşaat"
        description="Adana, Mersin ve tüm Türkiye'de anahtar teslim ev/villa tadilatı, iç mimarlık, asma tavan, mutfak/banyo yenileme ve dış cephe mantolama hizmetleri."
        keywords="iç mimari dekorasyon, anahtar teslim tadilat, ev tadilatı adana, asma tavan adana, mutfak banyo yenileme, dış cephe mantolama, boya badana, alçıpan, zemin kaplama"
      />
      <StructuredData
        type="Service"
        idSuffix="decoration"
        data={{
          name: "PETEKS İç Mimari, Anahtar Teslim Tadilat ve Dekorasyon Hizmetleri",
          serviceType: "İç Mimari Tasarım, Ev ve Villa Tadilatı, Asma Tavan, Mutfak Banyo Yenileme, Mantolama",
          provider: {
            "@type": "GeneralContractor",
            name: "PETEKS İnşaat & Mimarlık",
            telephone: "+90-532-055-09-45",
          },
        }}
      />
      <Navbar />

      {/* Luxury Dark Hero Section */}
      <section className="pt-36 pb-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "İç Mimari & Dekorasyon" }]} />
          <div className="text-center space-y-4 mt-4">
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-400/30 uppercase tracking-widest text-xs px-3.5 py-1">
              Anahtar Teslim İç Mimari & Renovasyon
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black">
              Hayalinizdeki <span className="gold-gradient-text">Yaşam Alanını</span> Tasarlıyoruz
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Eviniz, villanız ve ofisiniz için 3D iç mimari tasarım, komple tadilat ve A+ malzeme garantili dekorasyon çözümleri.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-border/80 hover:border-accent/50 hover:shadow-2xl transition-all duration-300 group rounded-3xl bg-card"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5 border-t border-border/60 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
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
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-12 text-center">
            4 Adımda Dekorasyon & Tadilat Sürecimiz
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Ücretsiz Keşif", desc: "Yerinde lazerli rölöve/ölçü alımı ve ihtiyaç analizi" },
              { step: "02", title: "3D Mimari Tasarım", desc: "Uygulama öncesi mekanın 3 boyutlu görselleştirilmesi" },
              { step: "03", title: "Titiz Uygulama", desc: "Sertifikalı ustalar ve iç mimar kontrolünde anahtar teslim işçilik" },
              { step: "04", title: "Garantili Teslim", desc: "Söz verilen tarihte temiz teslimat ve 2 yıl işçilik garantisi" },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border/80 text-center space-y-2">
                <div className="text-4xl font-heading font-black gold-gradient-text">{item.step}</div>
                <h3 className="text-lg font-heading font-bold">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-950 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 architectural-grid-light opacity-30 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-black text-white">
                Mekanınızı Yenilemeye Hazır Mısınız?
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Ücretsiz yerinde keşif ve 3D iç mimari teklifimiz için hemen bizimle iletişime geçin.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-xl"
              >
                <Link to="/contact">
                  Ücretsiz Keşif Randevusu Alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Decoration;
