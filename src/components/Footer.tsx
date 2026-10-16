import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight, ShieldCheck, Award, Clock } from "lucide-react";
import PETEKSLogo from "@/components/PETEKSLogo";

const Footer = () => {
  const popularRegions = [
    { label: "Adana Seyhan İnşaat", path: "/adana/seyhan" },
    { label: "Adana Çukurova İnşaat", path: "/adana/cukurova" },
    { label: "Adana Yüreğir İnşaat", path: "/adana/yuregir" },
    { label: "Adana Sarıçam İnşaat", path: "/adana/saricam" },
    { label: "Mersin Yenişehir İnşaat", path: "/mersin/yenisehir" },
    { label: "Mersin Mezitli İnşaat", path: "/mersin/mezitli" },
    { label: "Mersin Tarsus İnşaat", path: "/mersin/tarsus" },
    { label: "Osmaniye Merkez İnşaat", path: "/osmaniye/merkez" },
    { label: "Niğde Merkez İnşaat", path: "/nigde/merkez" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid-light opacity-30 pointer-events-none" />

      {/* Top Trust Strip */}
      <div className="border-b border-white/10 bg-white/[0.02] relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-white">TBDY-2018 Deprem Yönetmeliği</div>
                <div className="text-xs text-slate-400">C35/C40 Beton & Radye Temel Güvencesi</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-white">A+ TSE Sertifikalı Malzeme</div>
                <div className="text-xs text-slate-400">25+ Yıllık Mühendislik ve Mimarlık Deneyimi</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-white">%100 Zamanında & Sözleşmeli Teslim</div>
                <div className="text-xs text-slate-400">Şeffaf Maliyet ve Anahtar Teslim Uygulama</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <PETEKSLogo variant="light" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              PETEKS İnşaat & Mimarlık; konut, lüks villa, çelik konstrüksiyon fabrika, prefabrik ev, saha betonu, kat karşılığı arsa değerlendirme ve iç mimari dekorasyon alanlarında anahtar teslim mühendislik çözümleri sunar.
            </p>
            <div className="flex space-x-3 pt-1">
              <a
                href="https://www.facebook.com/peteksinsaat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PETEKS Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/peteksinsaat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PETEKS Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PETEKS LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white text-base mb-5 tracking-wide">
              Kurumsal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  Maliyet Hesaplayıcı
                </Link>
              </li>
              <li>
                <Link to="/decoration" className="text-slate-400 hover:text-amber-400 transition-colors">
                  İç Mimari & Dekorasyon
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Yapı Rehberi & Blog
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-slate-400 hover:text-amber-400 transition-colors">
                  İştiraklerimiz
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Local SEO Hubs (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-base mb-5 tracking-wide">
              Bölgesel Hizmet Noktaları
            </h3>
            <ul className="space-y-2 text-sm">
              {popularRegions.map((region) => (
                <li key={region.path}>
                  <Link
                    to={region.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center group"
                  >
                    <span>{region.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-base mb-5 tracking-wide">
              Merkez Ofis & İletişim
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <span className="text-slate-300 leading-relaxed">
                  Gürselpaşa Mah. 75163 Sk. Bekaroğlu Blue City Pınar A Blok No:5/A, 01200 Seyhan / Adana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-400" />
                <a
                  href="tel:+905320550945"
                  className="text-white font-semibold hover:text-amber-400 transition-colors"
                >
                  0532 055 09 45
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-400" />
                <a
                  href="mailto:info@peteksinsaat.com.tr"
                  className="text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  info@peteksinsaat.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} PETEKS İnşaat Dekorasyon Tekstil San. Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
          <div className="flex items-center space-x-4">
            <a href="/sitemap.xml" className="hover:text-amber-400 transition-colors">
              Site Haritası
            </a>
            <span>•</span>
            <a href="/llms.txt" className="hover:text-amber-400 transition-colors">
              AI / LLM Rehberi
            </a>
            <span>•</span>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Ücretsiz Keşif
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
