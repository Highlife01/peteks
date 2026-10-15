import { HardHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SubsidiariesSection from "@/components/SubsidiariesSection";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="İştiraklerimiz & Dijital Girişimlerimiz | PETEKS"
        description="PETEKS bünyesinde gayrimenkul, inşaat, lojistik ve dijital teknoloji alanlarında faaliyet gösteren güçlü markalarımız ve iş ortaklıklarımız."
        keywords="PETEKS iştirakler, iş ortaklıkları, Kamyon Bul, Proje Havuzu, İskan Var, Tapu Takip Merkezi, Ziyapaşa"
      />
      <Navbar />

      {/* Luxury Dark Hero Section */}
      <section className="bg-slate-950 text-white py-20 pt-36 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "İştiraklerimiz" }]} />
          <div className="text-center space-y-4 mt-4">
            <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-400">
              <HardHat className="h-8 w-8" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black">
              Güçlü <span className="gold-gradient-text">İştiraklerimiz</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              İnşaat, gayrimenkul, lojistik ve dijital ekosistemde değer üreten grup markalarımız
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <SubsidiariesSection />

      {/* CTA Section */}
      <section className="py-20 bg-muted/40 border-t border-border/60">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge variant="outline" className="border-accent/40 text-accent uppercase text-xs font-bold">
            Stratejik İş Birliği
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            İş Ortağımız Olmak İster Misiniz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Güçlü iş ortaklıklarımıza katılın, projelerimizi ve yatırımlarımızı birlikte büyütelim.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-6 rounded-2xl shadow-lg"
          >
            <Link to="/contact">
              Bizimle İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Partnerships;
