import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Phone, MapPin, Calculator, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PETEKSLogo from "@/components/PETEKSLogo";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/decoration", label: t("nav.decoration") },
    { path: "/calculator", label: t("nav.calculator") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/partnerships", label: t("nav.partnerships") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Bar - Desktop Only, hides on scroll for sleekness */}
      <div
        className={`hidden lg:block bg-slate-950 text-slate-300 border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-10 py-1.5 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400 mr-1.5" />
              Merkez: Seyhan / Adana • Hizmet Alanı: Adana, Mersin, Osmaniye, Niğde & Tüm Türkiye
            </span>
            <span className="hidden xl:flex items-center text-slate-400">
              <Clock className="h-3.5 w-3.5 text-amber-400 mr-1.5" />
              Pzt - Cmt: 09:00 - 18:00
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="tel:+905320550945"
              className="flex items-center font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              0532 055 09 45
            </a>
            <span className="text-white/20">|</span>
            <Link
              to="/calculator"
              className="text-slate-200 hover:text-amber-400 transition-colors font-medium flex items-center"
            >
              <Calculator className="h-3.5 w-3.5 mr-1 text-amber-400" />
              2026 m² Maliyet Hesapla
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)] py-2.5"
            : "bg-background/80 dark:bg-slate-950/75 backdrop-blur-md border-b border-border/40 py-3.5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center group" aria-label="PETEKS Ana Sayfa">
              <PETEKSLogo size="md" className="transition-transform duration-300 group-hover:scale-[1.02]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Ana Menü">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 relative ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-foreground/85 hover:text-accent hover:bg-muted/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Controls & CTA Button */}
            <div className="hidden md:flex items-center space-x-2.5">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-amber-500 via-accent to-orange-600 hover:opacity-95 text-white shadow-lg shadow-accent/25 rounded-full font-bold text-xs px-5 py-5 transition-all hover:scale-[1.02]"
              >
                <Link to="/contact" className="flex items-center space-x-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t("nav.getQuote")}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex xl:hidden items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-muted/70 hover:bg-muted text-foreground transition-colors border border-border/60"
                aria-label="Menüyü Aç/Kapat"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          {isOpen && (
            <div className="xl:hidden mt-3 py-4 px-3 bg-card/95 backdrop-blur-2xl border border-border/80 rounded-2xl shadow-2xl animate-in slide-in-from-top-3 duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-accent/15 text-accent font-bold border border-accent/20"
                          : "text-foreground/90 hover:bg-muted hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-3 border-t border-border mt-3 flex flex-col sm:flex-row gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl py-5 font-semibold border-accent/30 text-accent"
                >
                  <a href="tel:+905320550945">
                    <Phone className="h-4 w-4 mr-2" />
                    0532 055 09 45
                  </a>
                </Button>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl py-5 font-bold shadow-md"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    {t("nav.getQuote")}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
