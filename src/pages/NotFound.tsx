import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-muted/30">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
          <h1 className="mb-4 text-6xl md:text-7xl font-bold font-heading">404</h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-bold font-heading">Sayfa Bulunamadı</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/90">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Ana Sayfaya Dön
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
