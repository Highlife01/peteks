import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./components/LanguageContext";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import GoogleAnalytics from "./components/GoogleAnalytics";
import InstallPWA from "./components/InstallPWA";

// Direct imports - no lazy loading to avoid module loading errors
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import CostCalculator from "./pages/CostCalculator";
import Decoration from "./pages/Decoration";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CityDistrictSEO from "./pages/CityDistrictSEO";
import NotFound from "./pages/NotFound";

// Yönetim paneli (Firebase SDK ağır olduğu için ana pakete dahil edilmez)
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-WFWM5412N3";
  const adsId = "AW-1054391872";

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <Sonner />
            <BackToTop />
            <InstallPWA />
            <BrowserRouter>
              <GoogleAnalytics measurementId={gaId} adsId={adsId} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/hizmetler" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/calculator" element={<CostCalculator />} />
                <Route path="/decoration" element={<Decoration />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/admin"
                  element={
                    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
                      <AdminPage />
                    </Suspense>
                  }
                />
                {/* SEO Pages */}
                <Route path="/:city/:district" element={<CityDistrictSEO />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
