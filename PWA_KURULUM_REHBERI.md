# PWA Kurulum Sistemi - Taşıma Rehberi

Bu rehber, PWA kurulum sistemini başka bir projeye (ör. cebrailkara.com.tr) taşımak için gerekli tüm adımları içermektedir.

## 📋 İçindekiler

1. [Gerekli Dosyalar](#gerekli-dosyalar)
2. [Kurulum Adımları](#kurulum-adımları)
3. [Dosya İçerikleri](#dosya-içerikleri)
4. [Önemli Notlar](#önemli-notlar)

---

## 📁 Gerekli Dosyalar

### 1. InstallPWA.tsx Bileşeni
**Konum:** `src/components/InstallPWA.tsx`

### 2. Manifest Dosyası
**Konum:** `public/manifest.json`

### 3. vite.config.ts Güncellemesi
**Konum:** `vite.config.ts` (VitePWA plugin yapılandırması)

### 4. index.html Güncellemesi
**Konum:** `index.html` (iOS meta tag'leri)

### 5. App.tsx Güncellemesi
**Konum:** `src/App.tsx` (InstallPWA import ve kullanımı)

---

## 🚀 Kurulum Adımları

### Adım 1: InstallPWA Bileşenini Kopyalayın

`src/components/InstallPWA.tsx` dosyasını yeni projeye kopyalayın.

### Adım 2: Manifest Dosyası Oluşturun

`public/manifest.json` dosyasını oluşturun.

### Adım 3: vite.config.ts'yi Güncelleyin

VitePWA plugin yapılandırmasını ekleyin/güncelleyin.

### Adım 4: index.html'e Meta Tag'leri Ekleyin

iOS ve PWA için gerekli meta tag'leri ekleyin.

### Adım 5: App.tsx'e Bileşeni Ekleyin

InstallPWA bileşenini import edip kullanın.

### Adım 6: Icon Dosyalarını Hazırlayın

`public/` klasörüne PWA icon'larını ekleyin:
- `pwa-192x192.png`
- `pwa-512x512.png`
- (Opsiyonel) `apple-touch-icon.png`

### Adım 7: Bağımlılıkları Kontrol Edin

Aşağıdaki paketlerin kurulu olduğundan emin olun:
- `vite-plugin-pwa`
- `lucide-react` (ikonlar için)
- shadcn/ui bileşenleri (`Button`, `Card`, `CardContent`) veya alternatif UI kütüphanesi

---

## 📄 Dosya İçerikleri

### 1. src/components/InstallPWA.tsx

```tsx
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
    // 1. Zaten yüklü mü kontrol et
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone 
      || document.referrer.includes('android-app://');
    
    setIsStandalone(isInStandaloneMode);

    // 2. iOS kontrolü
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // 3. Android/Desktop Chrome için yükleme olayını yakala
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Daha önce kapatılmadıysa banner'ı göster
      const dismissed = localStorage.getItem('pwa-banner-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowBanner(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // 4. iOS için banner göster (otomatik prompt olmadığı için)
    if (isIOSDevice && !isInStandaloneMode) {
      const dismissed = localStorage.getItem('pwa-banner-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowBanner(true), 5000);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA yüklendi');
    }
    
    setDeferredPrompt(null);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-banner-dismissed', 'true');
  };

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
```

**NOT:** Eğer shadcn/ui yoksa, Button ve Card import'larını kaldırıp standart HTML elementleri kullanabilirsiniz.

---

### 2. public/manifest.json

```json
{
  "name": "Site Adınız",
  "short_name": "SiteAdi",
  "description": "Site açıklaması",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#22c55e",
  "icons": [
    {
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Değiştirilecek Alanlar:**
- `name`: Site adınız
- `short_name`: Kısa site adı
- `description`: Site açıklaması
- `theme_color`: Tema rengi (ör: #22c55e)
- `background_color`: Arka plan rengi
- Icon yolları (eğer farklı klasördeyse)

---

### 3. vite.config.ts (VitePWA Plugin Yapılandırması)

```typescript
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    // ... diğer pluginler
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Site Adınız",
        short_name: "SiteAdi",
        description: "Site açıklaması",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#22c55e",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
});
```

**ÖNEMLİ:** `vite-plugin-pwa` paketinin kurulu olduğundan emin olun:
```bash
npm install -D vite-plugin-pwa
```

---

### 4. index.html (Meta Tag'ler)

`<head>` bölümüne eklenecek:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="theme-color" content="#ffffff" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="SiteAdi" />
<link rel="apple-touch-icon" href="/pwa-192x192.png" />
<link rel="manifest" href="/manifest.webmanifest" />
```

**Değiştirilecek Alanlar:**
- `theme-color`: Tema renginiz
- `apple-mobile-web-app-title`: Uygulama adı
- `apple-touch-icon`: Icon yolu

---

### 5. src/App.tsx

```tsx
import InstallPWA from "./components/InstallPWA";

const App = () => {
  return (
    <div>
      {/* Diğer bileşenler */}
      <InstallPWA />
    </div>
  );
};
```

---

## ⚠️ Önemli Notlar

### Bağımlılıklar

1. **vite-plugin-pwa**: Mutlaka kurulmalı
   ```bash
   npm install -D vite-plugin-pwa
   ```

2. **lucide-react**: İkonlar için (veya alternatif ikon kütüphanesi)
   ```bash
   npm install lucide-react
   ```

3. **UI Kütüphanesi**: shadcn/ui veya alternatif
   - Eğer shadcn/ui yoksa, InstallPWA.tsx içindeki Button ve Card bileşenlerini standart HTML ile değiştirin

### Icon Dosyaları

`public/` klasöründe olması gereken dosyalar:
- `pwa-192x192.png` (192x192 piksel)
- `pwa-512x512.png` (512x512 piksel)
- (Opsiyonel) `apple-touch-icon.png`

### Test Etme

1. **Development'da test:**
   ```bash
   npm run dev
   ```

2. **Production build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Chrome DevTools:**
   - Application > Manifest (manifest doğrulaması)
   - Application > Service Workers (service worker kontrolü)
   - Lighthouse > PWA audit

### Yaygın Sorunlar

1. **Banner görünmüyor:**
   - Service worker'ın çalıştığından emin olun
   - HTTPS kullanıyorsanız (localhost dışında) kontrol edin
   - LocalStorage'da `pwa-banner-dismissed` anahtarını kontrol edin

2. **iOS'ta çalışmıyor:**
   - Safari'de test edin (Chrome iOS'ta PWA desteği yok)
   - Meta tag'lerin doğru olduğundan emin olun

3. **Icon görünmüyor:**
   - Icon dosyalarının `public/` klasöründe olduğundan emin olun
   - Manifest'teki yolların doğru olduğunu kontrol edin

---

## 📝 Checklist (Yeni Projede Kontrol Listesi)

- [ ] `vite-plugin-pwa` kurulu
- [ ] `lucide-react` kurulu
- [ ] UI kütüphanesi (shadcn/ui) kurulu veya alternatif hazır
- [ ] `InstallPWA.tsx` dosyası `src/components/` klasöründe
- [ ] `manifest.json` dosyası `public/` klasöründe
- [ ] Icon dosyaları (`pwa-192x192.png`, `pwa-512x512.png`) `public/` klasöründe
- [ ] `vite.config.ts` içinde VitePWA plugin yapılandırılmış
- [ ] `index.html` içinde meta tag'ler eklenmiş
- [ ] `App.tsx` içinde InstallPWA import edilmiş ve kullanılıyor
- [ ] Manifest içindeki site bilgileri güncellenmiş (name, description, theme_color)
- [ ] Build alındı ve test edildi

---

## 🎯 Özet

Bu sistem şunları sağlar:
- ✅ Android/Chrome için otomatik kurulum banner'ı
- ✅ iOS için manuel kurulum talimatları
- ✅ Masaüstü için kurulum önerisi
- ✅ Kurulu uygulamada banner'ın otomatik gizlenmesi
- ✅ Kullanıcı tercihinin LocalStorage'da saklanması
- ✅ Modern ve responsive tasarım

---

**Son Güncelleme:** $(date)
**Proje:** PETEKS
**Hedef Proje:** cebrailkara.com.tr


