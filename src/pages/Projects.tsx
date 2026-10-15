import { useState, useMemo } from "react";
import { Building2, Home, Hotel, Factory, Search, Maximize2, MapPin, Calendar, Tag, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LightboxModal, { ProjectItem } from "@/components/LightboxModal";
import TestimonialsSection from "@/components/TestimonialsSection";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const rawProjects: (ProjectItem & { icon: any; image: string })[] = [
  {
    id: "1",
    title: "Moderna Residence",
    category: "Apartman",
    location: "İstanbul, Kadıköy",
    year: "2023",
    icon: Building2,
    image: hero1,
    description: "8 katlı, 24 daireli modern konut projesi. A+ enerji sınıfı ve deprem yönetmeliğine tam uygun radye temel sistemleri.",
    details: ["A+ Enerji Sınıfı", "Yerden Isıtma", "Kapalı Otopark", "24/7 Güvenlik"],
  },
  {
    id: "2",
    title: "Green Villa Projesi",
    category: "Prefabrik Ev",
    location: "Bursa, Mudanya",
    year: "2023",
    icon: Home,
    image: hero2,
    description: "200m² tek katlı modern prefabrik villa. Isı yalıtımlı sandviç panel ve doğa ile iç içe konforlu yaşam alanı.",
    details: ["Yüksek Isı Yalıtımı", "Depreme Dayanıklı Çelik İskelet", "Veranda & Bahçe Terası"],
  },
  {
    id: "3",
    title: "Grand Park Resort & Hotel",
    category: "Otel",
    location: "Antalya, Belek",
    year: "2022",
    icon: Hotel,
    image: hero3,
    description: "5 yıldızlı, 250 oda kapasiteli lüks otel tesisi. Spa, açık/kapalı yüzme havuzu ve 1.000 kişilik kongre salonu.",
    details: ["250 Konforlu Oda", "Kongre & Balo Salonu", "Akıllı Otomasyon Sistemleri"],
  },
  {
    id: "4",
    title: "TeknoMetal Üretim Tesisleri",
    category: "Çelik Yapı",
    location: "Kocaeli, Gebze",
    year: "2022",
    icon: Factory,
    image: hero4,
    description: "10.000m² kapalı alana sahip çelik konstrüksiyon üretim tesisi. Ağır tonajlı vinç yolları ve saha betonu uygulaması.",
    details: ["10.000m² Kapalı Saha", "C35 Saha Betonu", "Köprülü Vinç Altyapısı"],
  },
  {
    id: "5",
    title: "Seaside Apartments",
    category: "Apartman",
    location: "İzmir, Çeşme",
    year: "2022",
    icon: Building2,
    image: hero5,
    description: "Deniz manzaralı 6 katlı lüks konut kompleksi. Sonsuzluk havuzu ve özel peyzaj mimarisi.",
    details: ["Panoramik Deniz Manzarası", "Özel Yüzme Havuzu", "Akıllı Ev Altyapısı"],
  },
  {
    id: "6",
    title: "Sapanca Forest Chalets",
    category: "Prefabrik Ev",
    location: "Sakarya, Sapanca",
    year: "2021",
    icon: Home,
    image: hero2,
    description: "Doğa içinde 15 adet 2 katlı ahşap görünümlü prefabrik villa kompleksi.",
    details: ["Şömineli Salon", "Doğal Ahşap Kaplama", "Özel Otopark"],
  },
  {
    id: "7",
    title: "Çankaya Business Center",
    category: "İş Merkezi",
    location: "Ankara, Çankaya",
    year: "2021",
    icon: Building2,
    image: hero1,
    description: "12 katlı A+ prestijli ofis binası. Akıllı havalandırma, fiber altyapı ve çok katlı kapalı otopark.",
    details: ["A+ Plaza Konsepti", "Çift Asansörlü", "Jeneratör & UPS"],
  },
  {
    id: "8",
    title: "Lojistik Depo Kompleksi",
    category: "Depo",
    location: "İstanbul, Tuzla",
    year: "2021",
    icon: Factory,
    image: hero4,
    description: "20.000m² kapalı lojistik ve soğuk hava depolama kompleksi. Hidrolik yükleme rampaları.",
    details: ["20.000m² Kapalı Alan", "Hidrolik Yükleme Rampaları", "Sprinkler Yangın Söndürme"],
  },
];

const categories = ["Tüm Projeler", "Apartman", "Prefabrik Ev", "Otel", "Çelik Yapı", "İş Merkezi", "Depo"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tüm Projeler");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return rawProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Tüm Projeler" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredProjects.length));
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! - 1 + filteredProjects.length) % filteredProjects.length));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Projelerimiz & Referanslar | PETEKS İnşaat & Mimarlık"
        description="Tamamladığımız konut, lüks villa, otel, çelik yapı, fabrika ve ticari projelerimiz. Fotoğraf galerisi ve teknik mühendislik detayları."
        keywords="inşaat projeleri, konut projeleri, villa tasarımları, çelik bina, otel inşaatı, peteks inşaat referanslar"
      />
      <Navbar />

      {/* Luxury Dark Hero Header */}
      <section className="pt-36 pb-20 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Projelerimiz" }]} />
          <div className="text-center space-y-4 mt-4">
            <Badge className="px-3.5 py-1 text-amber-300 bg-amber-500/15 border border-amber-400/30 uppercase tracking-widest text-xs font-semibold">
              Portfolyo & Referanslar
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Tamamlanan <span className="gold-gradient-text">Prestijli</span> Projelerimiz
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              25 yılı aşkın tecrübemizle hayata geçirdiğimiz nitelikli yapılar ve memnun müşterilerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Counter Banner */}
      <section className="py-10 bg-primary text-primary-foreground shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">500+</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Tamamlanan Proje</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">2.5M+ m²</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Toplam İnşaat Alanı</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">1000+</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Mutlu Müşteri</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">%100</div>
              <div className="text-xs md:text-sm font-medium opacity-90">Zamanında Teslimat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-10 bg-background border-b border-border/50 sticky top-20 z-30 backdrop-blur-md bg-background/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <Filter className="h-4 w-4 text-accent mr-1 shrink-0 hidden sm:inline" />
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full text-xs font-semibold shrink-0 transition-all ${
                    selectedCategory === cat
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Proje ara (örn: Kadıköy, Villa)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-full bg-muted/50 border-border focus:border-accent text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
              <p className="text-lg text-muted-foreground mb-4">Aramanızla eşleşen proje bulunamadı.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("Tüm Projeler");
                  setSearchQuery("");
                }}
              >
                Filtreleri Temizle
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id || index}
                  className="group border border-border/80 hover:border-accent/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer bg-card"
                  onClick={() => openLightbox(index)}
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground border-border text-xs">
                        <Tag className="h-3 w-3 mr-1 text-accent" />
                        {project.category}
                      </Badge>

                      <Badge className="absolute top-4 right-4 bg-accent text-white text-xs font-bold">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.year}
                      </Badge>

                      <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="flex items-center text-xs text-muted-foreground mb-3 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-accent mr-1 shrink-0" />
                        {project.location}
                      </p>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-xs font-semibold text-accent group-hover:bg-accent group-hover:text-white transition-all rounded-xl"
                    >
                      <span>Detayları ve Galeriyi Gör</span>
                      <Maximize2 className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Lightbox Modal */}
      <LightboxModal
        project={activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null}
        isOpen={activeLightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
        hasMultiple={filteredProjects.length > 1}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
