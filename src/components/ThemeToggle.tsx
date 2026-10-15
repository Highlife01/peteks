import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-muted hover:scale-110 active:scale-95"
      title={isDark ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
      aria-label="Tema değiştirici"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 dark:text-slate-200 transition-transform duration-500 hover:-rotate-12" />
      )}
    </Button>
  );
}

export default ThemeToggle;
