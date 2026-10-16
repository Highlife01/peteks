import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/components/GoogleAnalytics";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast({
        title: "Mesajınız Gönderildi!",
        description: "En kısa sürede size dönüş yapacağız.",
        variant: "default",
      });
      trackEvent("ads_conversion__deme_ba_latma_1");
    }
  }, [searchParams, toast]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    const input = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setIsSubmitting(true);
    let saved = false;
    try {
      const { submitContactMessage } = await import("@/lib/messages");
      await submitContactMessage(input);
      saved = true;
    } catch (error) {
      console.error("Mesaj kaydedilemedi:", error);
    } finally {
      setIsSubmitting(false);
    }

    if (saved) {
      form.reset();
      toast({
        title: "Mesajınız Gönderildi!",
        description: "En kısa sürede size dönüş yapacağız.",
        variant: "default",
      });
      trackEvent("ads_conversion__deme_ba_latma_1");
    } else {
      toast({
        title: "Mesaj gönderilemedi",
        description: "Lütfen tekrar deneyin veya bizi telefonla arayın: 0532 055 09 45",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="İletişim & Ücretsiz Keşif | PETEKS İnşaat & Mimarlık Adana"
        description="PETEKS İnşaat ile iletişime geçin. Adana (Seyhan) merkez ofisimiz, telefon (0532 055 09 45) ve ücretsiz keşif randevu formumuz."
        keywords="PETEKS iletişim, Peteks İnşaat iletişim, Adana inşaat firması telefon, teklif al, ücretsiz keşif, kat karşılığı danışmanlık"
      />
      <StructuredData
        type="LocalBusiness"
        idSuffix="contact"
        data={{
          name: "PETEKS İnşaat & Mimarlık Merkez Ofis",
          telephone: "+90-532-055-09-45",
          email: "info@peteksinsaat.com.tr",
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
        }}
      />
      <Navbar />

      {/* Luxury Dark Hero Section */}
      <section className="pt-36 pb-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 architectural-grid-light opacity-35 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "İletişim & Ücretsiz Keşif" }]} />
          <div className="text-center space-y-4 mt-4">
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-400/30 uppercase tracking-widest text-xs px-3.5 py-1">
              7/24 Mühendislik & Danışmanlık Hattı
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black">
              Bizimle <span className="gold-gradient-text">İletişime</span> Geçin
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Projeniz için ücretsiz yerinde keşif, kat karşılığı emsal analizi ve detaylı fiyat teklifi almak için bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Adres",
                content: "Gürselpaşa Mah. 75163 Sk. Bekaroğlu Blue City Pınar A Blok No:5/A, Gürselpaşa, 01200 Seyhan/Adana, Türkiye",
              },
              {
                icon: Phone,
                title: "Telefon",
                content: "0532 055 09 45",
                link: "tel:+905320550945",
              },
              {
                icon: Mail,
                title: "E-posta",
                content: "info@peteksinsaat.com.tr",
                link: "mailto:info@peteksinsaat.com.tr",
              },
              {
                icon: Clock,
                title: "Çalışma Saatleri",
                content: "Pzt-Cmt: 09:00-18:00",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6 text-center">Bize Ulaşın</h2>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ad Soyad *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ad Soyad"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="0532 055 09 45"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Konu *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Proje hakkında bilgi almak istiyorum"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mesajınız *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Gönder
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Konumumuz</h2>
            <div className="aspect-video rounded-xl overflow-hidden border-2">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent("Gürselpaşa Mah. 75163 Sk. Bekaroğlu Blue City Pınar A Blok No:5/A, Gürselpaşa, 01200 Seyhan/Adana, Türkiye")}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PETEKS Konum Haritası"
                aria-label="PETEKS ofis konumu haritası"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
