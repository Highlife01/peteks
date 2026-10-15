import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calculator, MessageCircle, Send, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";

const constructionTypes = [
  { value: "steel", label: "Çelik Yapı & Prefabrik", pricePerM2: 15000, desc: "Hızlı kurulumlu, hafif ve sismik dayanıklı" },
  { value: "residential", label: "Konut & Müstakil Ev", pricePerM2: 25000, desc: "Betonarme radye temelli konut projesi" },
  { value: "villa", label: "Lüks Villa Projesi", pricePerM2: 32000, desc: "Özel mimari tasarım ve peyzajlı villa" },
  { value: "residence", label: "Çok Katlı Rezidans", pricePerM2: 30000, desc: "A+ malzeme kalitesi ve akıllı otomasyon" },
  { value: "factory", label: "Endüstriyel Fabrika & Depo", pricePerM2: 20000, desc: "C35 saha betonu ve çelik makas sistemleri" },
];

const qualityLevels = [
  { value: "economy", label: "Ekonomik Sınıf", multiplier: 0.85, desc: "Bütçe dostu standart TSE malzemeler" },
  { value: "standard", label: "Standart Plus", multiplier: 1.0, desc: "1. sınıf TSE garantili A+ malzemeler" },
  { value: "luxury", label: "Lüks & Prestij", multiplier: 1.4, desc: "İthal malzemeler & özel mimari tasarım" },
];

const extraFeatures = [
  { id: "pool", label: "Yüzme Havuzu (Taşmalı/Skimmer)", price: 450000 },
  { id: "landscaping", label: "Peyzaj & Çevre Düzenlemesi", price: 150000 },
  { id: "smart_home", label: "Akıllı Ev Otomasyonu", price: 120000 },
  { id: "garage", label: "Kapalı Otomatik Otopark", price: 180000 },
  { id: "solar", label: "Güneş Enerjisi (GES Altyapısı)", price: 220000 },
  { id: "underfloor", label: "Yerden Isıtma & Isı Pompası", price: 160000 },
];

const CostCalculator = () => {
  const [selectedType, setSelectedType] = useState<string>("residential");
  const [area, setArea] = useState<number>(150);
  const [quality, setQuality] = useState<string>("standard");
  const [floors, setFloors] = useState<number>(1);
  const [extras, setExtras] = useState<string[]>(["smart_home"]);

  const toggleExtra = (id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedResult = useMemo(() => {
    const selectedConstruction = constructionTypes.find((type) => type.value === selectedType) || constructionTypes[1];
    const selectedQuality = qualityLevels.find((q) => q.value === quality) || qualityLevels[1];

    let baseRate = selectedConstruction.pricePerM2 * selectedQuality.multiplier;

    if (floors > 1) {
      baseRate = baseRate * (1 + (floors - 1) * 0.03);
    }

    const baseStructureCost = Math.round(area * baseRate * 0.55);
    const finishingCost = Math.round(area * baseRate * 0.45);

    const extrasCost = extras.reduce((acc, extraId) => {
      const feature = extraFeatures.find((f) => f.id === extraId);
      return acc + (feature ? feature.price : 0);
    }, 0);

    const total = baseStructureCost + finishingCost + extrasCost;

    return {
      typeLabel: selectedConstruction.label,
      qualityLabel: selectedQuality.label,
      baseStructureCost,
      finishingCost,
      extrasCost,
      totalCost: total,
    };
  }, [selectedType, area, quality, floors, extras]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const generateWhatsAppLink = () => {
    const text = `Merhaba PETEKS İnşaat Ekibi, web sitenizdeki maliyet hesaplayıcı ile bir proje tasarladım:
    
📌 Yapı Türü: ${calculatedResult.typeLabel}
📐 Toplam Alan: ${area} m² (${floors} Katlı)
⭐ Kalite Sınıfı: ${calculatedResult.qualityLabel}
🎁 Ek Özellikler: ${extras.length > 0 ? extras.map((id) => extraFeatures.find((f) => f.id === id)?.label).join(", ") : "Yok"}
💰 Tahmini Bütçe: ${formatCurrency(calculatedResult.totalCost)}

Bu projem için detaylı teklif ve ücretsiz keşif randevusu almak istiyorum.`;

    return `https://wa.me/905320550945?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="2026 İnşaat Maliyet Hesaplama | Villa, Çelik & Prefabrik m² Hesaplayıcı - PETEKS"
        description="2026 güncel inşaat m² birim fiyatlarıyla projenizin alan, kat sayısı, kalite sınıfı ve ek özelliklerine göre tahmini inşaat maliyetini saniyeler içinde hesaplayın."
        keywords="2026 inşaat maliyeti hesaplama, villa yapım maliyeti, m2 birim fiyatı 2026, prefabrik ev maliyeti, çelik villa fiyatı hesaplama, inşaat hesaplayıcı"
      />
      <StructuredData
        type="Service"
        idSuffix="calculator"
        data={{
          name: "PETEKS 2026 Online İnşaat Maliyet Hesaplayıcı",
          description:
            "Konut, lüks villa, çelik yapı, prefabrik ev ve endüstriyel fabrika projeleri için 2026 m² birim maliyet hesaplama aracı.",
          provider: {
            "@type": "GeneralContractor",
            name: "PETEKS İnşaat & Mimarlık",
            telephone: "+90-532-055-09-45",
          },
        }}
      />
      <Navbar />

      {/* Luxury Dark Hero Header */}
      <section className="pt-36 pb-20 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "2026 İnşaat Maliyet Hesaplayıcı" }]} />
          <div className="text-center mt-4 space-y-4">
            <div className="inline-flex items-center justify-center p-3.5 bg-amber-500/15 border border-amber-400/30 rounded-2xl text-amber-400">
              <Calculator className="h-7 w-7" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black">
              Akıllı İnşaat <span className="gold-gradient-text">Maliyet Hesaplayıcı</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              2026 güncel mühendislik birim fiyatlarıyla projenizin özelliklerini seçin, saniyeler içinde şeffaf bütçe dökümünü çıkarın.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form + Live Result Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <Card className="border-2 border-border/80 shadow-md rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-accent" />
                    Proje Parametreleri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Construction Type */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">1. Yapı / Proje Türü</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="h-12 text-sm bg-muted/30 rounded-xl">
                        <SelectValue placeholder="Yapı türünü seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        {constructionTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex flex-col text-left">
                              <span className="font-medium">{type.label}</span>
                              <span className="text-xs text-muted-foreground">{type.desc}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Area Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-semibold">2. Toplam İnşaat Alanı (m²)</Label>
                      <span className="text-lg font-bold text-accent px-3.5 py-1 bg-accent/10 rounded-xl border border-accent/20">
                        {area} m²
                      </span>
                    </div>
                    <Slider
                      value={[area]}
                      onValueChange={(val) => setArea(val[0])}
                      min={40}
                      max={1500}
                      step={10}
                      className="py-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>40 m²</span>
                      <span>500 m²</span>
                      <span>1500 m²</span>
                    </div>
                  </div>

                  {/* Quality Level & Floor Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">3. Malzeme Kalite Sınıfı</Label>
                      <Select value={quality} onValueChange={setQuality}>
                        <SelectTrigger className="h-11 text-sm bg-muted/30 rounded-xl">
                          <SelectValue placeholder="Kalite seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          {qualityLevels.map((q) => (
                            <SelectItem key={q.value} value={q.value}>
                              {q.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">4. Kat Sayısı</Label>
                      <Input
                        type="number"
                        min={1}
                        max={30}
                        value={floors}
                        onChange={(e) => setFloors(Math.max(1, parseInt(e.target.value) || 1))}
                        className="h-11 text-sm bg-muted/30 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Extras Checklist */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <Label className="text-sm font-semibold">5. Ek Özellik ve Konfor Paketleri</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {extraFeatures.map((feature) => {
                        const isSelected = extras.includes(feature.id);
                        return (
                          <div
                            key={feature.id}
                            onClick={() => toggleExtra(feature.id)}
                            className={`p-3.5 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? "border-accent bg-accent/10 text-accent font-semibold shadow-sm"
                                : "border-border bg-card hover:bg-muted/50 text-foreground"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center border ${
                                  isSelected ? "bg-accent border-accent text-white" : "border-muted-foreground"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                              </div>
                              <span>{feature.label}</span>
                            </div>
                            <span className="text-[11px] opacity-80">+{formatCurrency(feature.price)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Live Breakdown Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <Card className="border-2 border-accent/40 shadow-2xl bg-gradient-to-b from-card via-card to-accent/5 rounded-3xl overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 via-accent to-orange-600 p-7 text-white text-center">
                    <span className="text-xs uppercase tracking-widest font-semibold opacity-90">
                      Tahmini Proje Bütçesi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black font-heading mt-1">
                      {formatCurrency(calculatedResult.totalCost)}
                    </h2>
                    <p className="text-xs opacity-90 mt-1">
                      {area} m² • {calculatedResult.typeLabel}
                    </p>
                  </div>

                  <CardContent className="p-6 space-y-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Maliyet Kalemleri Dökümü
                    </h4>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-3.5 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-muted-foreground">Kaba İnşaat & Radye Temel (~%55)</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(calculatedResult.baseStructureCost)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3.5 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-muted-foreground">İnce İşler & Tesisat (~%45)</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(calculatedResult.finishingCost)}
                        </span>
                      </div>

                      {calculatedResult.extrasCost > 0 && (
                        <div className="flex justify-between items-center p-3.5 rounded-xl bg-accent/10 border border-accent/20">
                          <span className="text-accent font-medium">Seçilen Ekstralar ({extras.length})</span>
                          <span className="font-bold text-accent">
                            {formatCurrency(calculatedResult.extrasCost)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <a href={generateWhatsAppLink()} target="_blank" rel="noreferrer" className="block">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-sm shadow-lg shadow-emerald-600/20 rounded-xl">
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Teklifi WhatsApp'tan İsteyin (0532 055 09 45)
                        </Button>
                      </a>

                      <Button asChild variant="outline" className="w-full rounded-xl py-5 text-xs font-semibold">
                        <Link to="/contact">
                          <Send className="h-4 w-4 mr-2" />
                          Ücretsiz Keşif Randevusu Oluşturun
                        </Link>
                      </Button>
                    </div>

                    <p className="text-[11px] text-muted-foreground text-center italic">
                      * Hesaplanan tutar 2026 yılı tahmini piyasa ortalamalarıdır. Şantiye zemin etüdü ve malzeme markası seçimlerinize göre nihai resmi sözleşme teklifi hazırlanmaktadır.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CostCalculator;
