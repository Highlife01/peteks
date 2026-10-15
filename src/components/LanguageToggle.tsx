import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "TR" ? "EN" : "TR")}
      className="h-9 px-2.5 rounded-full flex items-center space-x-1.5 border-border/80 hover:bg-muted text-xs font-semibold tracking-wider transition-all duration-300"
      aria-label="Dil Değiştir"
      title={language === "TR" ? "English'e Geç" : "Türkçe'ye Geç"}
    >
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      <span>{language}</span>
    </Button>
  );
}

export default LanguageToggle;
