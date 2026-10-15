import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  project: string;
  text: string;
  rating: number;
  date: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Mehmet Yılmaz",
    role: "Mülk Sahibi",
    location: "İstanbul, Kadıköy",
    project: "Moderna Residence",
    text: "PETEKS ekibiyle çalışmak tam anlamıyla bir ayrıcalıktı. İnşaat sürecinin her aşamasında şeffaf bilgilendirme yaptılar, malzemeler birinci sınıftı ve teslimat söz verdikleri tarihten 2 hafta önce tamamlandı.",
    rating: 5,
    date: "Ekim 2023",
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Mimar & Villa Sahibi",
    location: "Bursa, Mudanya",
    project: "Green Villa",
    text: "Prefabrik villa projemizde statik dayanım ve estetik detaylar harika düşünüldü. Yalıtım kalitesi beklediğimin çok üzerinde çıktı, kış aylarında bile ısı kaybı sıfır düzeyinde.",
    rating: 5,
    date: "Ağustos 2023",
  },
  {
    id: 3,
    name: "Ahmet Bilgin",
    role: "Fabrika Müdürü",
    location: "Kocaeli, Gebze",
    project: "TeknoMetal Fabrikası",
    text: "10.000 m² endüstriyel çelik tesisimizin zemin betonu ve çelik konstrüksiyon montajı zamanında sorunsuz bitti. Şantiye güvenliği ve iş disiplini kusursuzdu.",
    rating: 5,
    date: "Kasım 2022",
  },
  {
    id: 4,
    name: "Dr. Selim Arslan",
    role: "Yatırımcı",
    location: "İzmir, Çeşme",
    project: "Seaside Apartments",
    text: "Deniz manzaralı lüks konut projemizde hem statik proje çözümleri hem de iç mimari detayları anahtar teslim aldık. Müşteri memnuniyetine verdikleri önem takdire şayan.",
    rating: 5,
    date: "Ocak 2023",
  },
  {
    id: 5,
    name: "Zeynep Demir",
    role: "Şirket Yöneticisi",
    location: "Ankara, Çankaya",
    project: "Business Center Renovasyonu",
    text: "Ofis binamızın komple iç mimari renovasyon ve dış cephe yenilemesini PETEKS'e teslim ettik. Son derece şık ve prestijli bir çalışma alanı elde ettik.",
    rating: 5,
    date: "Mayıs 2023",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-accent/30 text-accent font-semibold tracking-wide uppercase text-xs">
            Müşteri Deneyimleri
          </Badge>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Müşterilerimizin PETEKS Hakkındaki Görüşleri
          </h2>
          <p className="text-muted-foreground text-lg">
            Tamamladığımız projeler sonrası müşterilerimizden aldığımız gerçek geri bildirimler
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-border/80 shadow-xl bg-card/80 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-16 w-16 text-accent/15 absolute top-6 right-6 pointer-events-none" />

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-muted-foreground">
                  5.0 / 5.0
                </span>
              </div>

              <p className="text-lg md:text-2xl text-foreground font-medium italic leading-relaxed mb-8">
                "{testimonialsData[currentIndex].text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-border pt-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonialsData[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-foreground text-base">
                        {testimonialsData[currentIndex].name}
                      </h4>
                      <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> Doğrulanmış Müşteri
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {testimonialsData[currentIndex].role} • {testimonialsData[currentIndex].location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {testimonialsData[currentIndex].project}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-accent hover:text-white transition-all shadow-sm"
            aria-label="Önceki Yorum"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Yorum ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-accent hover:text-white transition-all shadow-sm"
            aria-label="Sonraki Yorum"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
