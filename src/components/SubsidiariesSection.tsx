import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, CheckCircle2, FileText, Globe, Heart, Home, MapPin, Monitor, ShoppingBag, Truck, UserCheck } from "lucide-react";

type Subsidiary = {
    name: string;
    description: string;
    url: string;
    icon: string;
};

const iconMap: Record<string, LucideIcon> = {
    truck: Truck,
    "file-text": FileText,
    heart: Heart,
    home: Home,
    "user-check": UserCheck,
    "shopping-bag": ShoppingBag,
    monitor: Monitor,
    globe: Globe,
    building: Building2,
    briefcase: Briefcase,
    "map-pin": MapPin,
    "check-circle-2": CheckCircle2,
};

export const fallbackSubsidiaries: Subsidiary[] = [
    {
        name: "Kamyon Bul",
        description: "Lojistik ve nakliye arayanlar için dijital çözüm platformu. Yük taşıtmak isteyenlerle nakliyecileri buluşturan güvenilir pazar yeri.",
        url: "https://www.kamyonbul.com.tr",
        icon: "truck",
    },
    {
        name: "Kira Sözleşmesi",
        description: "Online kira sözleşmesi oluşturma ve yönetim aracı. Gayrimenkul kiralamalarında güvenli ve hızlı dijital kontrat çözümü.",
        url: "https://www.kirasozlesmesi.space",
        icon: "file-text",
    },
    {
        name: "Anatolia Heal",
        description: "Türkiye sağlık turizmi ve danışmanlık hizmetleri. Uluslararası hastalara profesyonel sağlık rehberliği ve tedavi planlaması.",
        url: "https://www.anatoliaheal.com.tr",
        icon: "heart",
    },
    {
        name: "İskan Var",
        description: "İskan sorgulama ve yapı kullanım izni danışmanlığı. Gayrimenkul alım satımında iskan durumunu doğrulayan güvenilir kaynak.",
        url: "https://www.iskanvar.com.tr",
        icon: "home",
    },
    {
        name: "Benim Yaverim",
        description: "Profesyonel kişisel asistanlık ve iş takip hizmetleri. Kurumsal ve bireysel ihtiyaçlarınız için size özel asistanlık çözümleri.",
        url: "https://www.benimyaverim.com.tr",
        icon: "user-check",
    },
    {
        name: "Üretenden Al",
        description: "Doğrudan üreticiden tüketiciye satış pazar yeri. Aracıları ortadan kaldıran, üreticiyi destekleyen e-ticaret platformu.",
        url: "https://www.uretendenal.com.tr",
        icon: "shopping-bag",
    },
    {
        name: "Cebrail Kara",
        description: "Dijital danışmanlık ve profesyonel portfolyo. Web geliştirme, SEO ve dijital pazarlama alanında uzman çözümler.",
        url: "https://www.cebrailkara.com.tr",
        icon: "monitor",
    },
    {
        name: "Proje Havuzu",
        description: "Mühendislik ve inşaat projeleri için teklif, ihale ve ekip bulma platformu. Projelerinizi yayınlayın, doğru ekiplerle hızla eşleşin.",
        url: "https://www.projehavuzu.com.tr",
        icon: "globe",
    },
    {
        name: "PDF Master",
        description: "Profesyonel PDF düzenleme ve dönüştürme araçları. Belgelerinizi yönetmek, düzenlemek ve dönüştürmek için kapsamlı online araçlar.",
        url: "https://www.pdfmaster.com.tr",
        icon: "file-text",
    },
    {
        name: "Peteks İnşaat",
        description: "Kaliteli yapı ve konut projeleri inşaat firması. Modern mimari, güvenli yapılar ve anahtar teslim inşaat projeleri.",
        url: "https://www.peteksinsaat.com.tr",
        icon: "building",
    },
    {
        name: "Tapu Takip Merkezi",
        description: "Profesyonel tapu ve kadastro işlem takibi. Gayrimenkul alım-satım süreçlerinizde güvenilir danışmanlık ve takip hizmeti.",
        url: "https://www.taputakipmerkezi.com.tr",
        icon: "briefcase",
    },
    {
        name: "Tapu Takip Adana",
        description: "Adana bölgesi tapu işlemleri ve danışmanlığı. Yerel uzmanlıkla tapu süreçlerinizi hızlandırın ve güvenle tamamlayın.",
        url: "https://www.taputakipadana.com.tr",
        icon: "map-pin",
    },
    {
        name: "Tapu Takip TR",
        description: "Ulusal çapta gayrimenkul ve tapu danışmanlığı. Türkiye genelinde tapu işlemleriniz için profesyonel destek.",
        url: "https://www.taputakipturkiye.com",
        icon: "globe",
    },
    {
        name: "Gayrimenkul Space",
        description: "Yenilikçi emlak ve yatırım fırsatları platformu. Gayrimenkul yatırımlarınız için güncel ilanlar ve piyasa analizleri.",
        url: "https://www.gayrimenkul.space",
        icon: "building",
    },
    {
        name: "Asma Tavan Adana",
        description: "Adana asma tavan ve iç mekan dekorasyon çözümleri. Modern tasarımlar ve profesyonel uygulama hizmetleri.",
        url: "https://www.asmatavanadana.com.tr",
        icon: "check-circle-2",
    },
    {
        name: "Rızaen Satış Pro",
        description: "Gayrimenkul satış işlemlerinde profesyonel rızaen satış çözümleri ve danışmanlık hizmetleri.",
        url: "https://www.rizaensatispro.com.tr",
        icon: "briefcase",
    },
    {
        name: "Ziyapaşa",
        description: "Adana'nın prestijli bölgesi Ziyapaşa'da yaşam, ticaret ve gayrimenkul projeleri.",
        url: "https://www.ziyapasa.com.tr",
        icon: "map-pin",
    },
];

const isValidSubsidiary = (item: unknown): item is Subsidiary => {
    if (!item || typeof item !== "object") return false;

    const candidate = item as Partial<Subsidiary>;
    return (
        typeof candidate.name === "string" &&
        typeof candidate.description === "string" &&
        typeof candidate.url === "string" &&
        typeof candidate.icon === "string"
    );
};

const getIcon = (iconKey: string): LucideIcon => iconMap[iconKey] ?? Building2;

const SubsidiariesSection = () => {
    const [subsidiaries, setSubsidiaries] = useState<Subsidiary[]>(fallbackSubsidiaries);

    useEffect(() => {
        let isMounted = true;

        const loadSubsidiaries = async () => {
            try {
                const response = await fetch("/subsidiaries.json", { cache: "no-store" });
                if (!response.ok) return;

                const data = await response.json();
                if (!Array.isArray(data)) return;

                const validSubsidiaries = data.filter(isValidSubsidiary);
                if (validSubsidiaries.length && isMounted) {
                    setSubsidiaries(validSubsidiaries);
                }
            } catch (error) {
                console.error("Subsidiaries fetch failed", error);
            }
        };

        loadSubsidiaries();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                        İştiraklerimiz
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Farklı sektörlerde hizmet veren güçlü markalarımız ve dijital girişimlerimiz
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subsidiaries.map((subsidiary, index) => {
                        const Icon = getIcon(subsidiary.icon);

                        return (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{subsidiary.name}</CardTitle>
                                    <CardDescription className="text-sm line-clamp-3">
                                        {subsidiary.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <a
                                        href={subsidiary.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                                    >
                                        <Globe className="mr-2 h-4 w-4" />
                                        Web Sitesini Ziyaret Et
                                    </a>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SubsidiariesSection;
