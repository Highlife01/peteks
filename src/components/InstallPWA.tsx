import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Wifi, Bell, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Server-side rendering kontrolü
    if (typeof window === 'undefined') return;

    try {
      // 1. Zaten yüklü mü kontrol et
      const isInStandaloneMode = 
        window.matchMedia('(display-mode: standalone)').matches ||
        ((window.navigator as any).standalone === true) ||
        document.referrer.includes('android-app://');
      
      setIsStandalone(isInStandaloneMode);

      // Kuruluysa banner gösterme
      if (isInStandaloneMode) {
        return;
      }

      // 2. iOS kontrolü
      const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      setIsIOS(isIOSDevice);

      // 3. localStorage'dan kapatılmış mı kontrol et
      let dismissed = false;
      try {
        dismissed = localStorage.getItem('pwa-banner-dismissed') === 'true';
      } catch (error) {
        console.warn('localStorage erişilemedi:', error);
      }

      // Daha önce kapatılmışsa gösterme
      if (dismissed) {
        return;
      }

      // 4. Android/Desktop Chrome için yükleme olayını yakala
      const handleBeforeInstall = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        // Event geldiğinde banner'ı göster
        setTimeout(() => setShowBanner(true), 2000);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstall);

      // 5. iOS için banner göster (otomatik prompt olmadığı için)
      if (isIOSDevice) {
        setTimeout(() => setShowBanner(true), 3000);
      } else {
        // Masaüstü/Android için de banner göster (beforeinstallprompt gelmese bile)
        // Chrome/Edge kontrolü
        const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        const isEdge = /Edg/.test(navigator.userAgent);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Chrome/Edge ve mobile değilse veya Android ise banner göster
        if ((isChrome || isEdge) && !isInStandaloneMode) {
          setTimeout(() => setShowBanner(true), 3000);
        }
      }

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      };
    } catch (error) {
      console.error('InstallPWA initialization error:', error);
    }
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA yüklendi');
      }
      
      setDeferredPrompt(null);
      setShowBanner(false);
    } catch (error) {
      console.error('PWA kurulum hatası:', error);
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    try {
      localStorage.setItem('pwa-banner-dismissed', 'true');
    } catch (error) {
      // localStorage erişim hatası (ör. private browsing)
      console.warn('localStorage kaydedilemedi:', error);
    }
  };

  // Server-side rendering kontrolü
  if (typeof window === 'undefined') return null;
  
  if (isStandalone || !showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
      <Card className="shadow-2xl border-green-200 overflow-hidden bg-white">
        <div className="h-1 bg-gradient-to-r from-green-500 to-green-600" />
        <CardContent className="p-4 relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={18} className="text-gray-400" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Smartphone size={28} className="text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Uygulamayı Yükle</h3>
              <p className="text-sm text-gray-600 mb-3">
                Uygulamamızı ana ekranınıza ekleyin, daha hızlı erişin!
              </p>

              {/* Faydalar */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  <Wifi size={12} /> Çevrimdışı
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  <Bell size={12} /> Bildirimler
                </span>
              </div>

              {isIOS ? (
                <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  <p className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">1</span>
                    Safari'de <Share size={14} className="text-blue-500" /> paylaş butonuna tıklayın
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">2</span>
                    "Ana Ekrana Ekle" seçeneğini seçin
                  </p>
                </div>
              ) : (
                <Button 
                  onClick={handleInstall}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download size={18} className="mr-2" />
                  Uygulamayı Yükle
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstallPWA;
