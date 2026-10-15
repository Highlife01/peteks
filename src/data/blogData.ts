import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string;
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPostItem[] = [
  {
    id: "1",
    slug: "2026-prefabrik-ev-fiyatlari-ve-yapim-sureci",
    title: "2026 Prefabrik Ev Fiyatları, Çelik Villa Yapım Süreci ve Avantajları",
    category: "Prefabrik & Çelik Yapı",
    author: "İnş. Müh. Ahmet Yılmaz - PETEKS Mühendislik",
    date: "2026-07-20",
    readTime: "6 dk okuma",
    image: hero2,
    keywords: "prefabrik ev fiyatları 2026, çelik villa yapımı, prefabrik ev ruhsatı, depreme dayanıklı prefabrik",
    excerpt: "Prefabrik ev ve çelik villa yaptırmak isteyenler için 2026 m² maliyetleri, izin süreçleri, ısı yalıtım detayları ve avantaj rehberi.",
    content: `
      <h2>Prefabrik Ev Nedir ve Neden Tercih Edilmelidir?</h2>
      <p>Prefabrik evler, fabrika ortamında milimetrik hassasiyetle üretilen çelik ve kompozit panellerin arsa üzerinde kısa sürede montajı ile kurulan modern yaşam alanlarıdır. 2026 yılı itibarıyla özellikle deprem güvenliği, hızlı teslimat ve yüksek ısı yalıtımı avantajları nedeniyle müstakil ev yaptırmak isteyenlerin ilk tercihi haline gelmiştir.</p>
      
      <h3>2026 Prefabrik Ev Yapım Aşamaları</h3>
      <ol>
        <li><strong>Arsa Etüdü ve Zemin Betonu:</strong> İlgili belediyeden alınan ruhsat sonrası radye su basman betonu dökülür.</li>
        <li><strong>Fabrika Üretimi:</strong> Statik hesaplamalara uygun galvaniz çelik karkas paneller hazırlanır.</li>
        <li><strong>Saha Montajı:</strong> 100 m² bir villa ortalama 7-10 gün içinde anahtar teslim kurulur.</li>
        <li><strong>İç & Dış Çatı ve Yalıtım:</strong> Taşyünü ve sandviç panel yalıtımı ile A+ enerji verimliliği sağlanır.</li>
      </ol>

      <h3>Deprem Güvenliği ve Çelik Karkas Dayanımı</h3>
      <p>Prefabrik yapılarda kullanılan hafif çelik konstrüksiyon, deprem esnasında esneme kabiliyetine sahip olduğu için yıkılma riski betonarmeye oranla %90 daha düşüktür. PETEKS olarak tüm prefabrik ve çelik projelerimizi 1. derece deprem bölgesine uygun statik hesaplarla imal ediyoruz.</p>
    `,
    faqs: [
      {
        question: "Prefabrik ev için belediyeden ruhsat almak zorunlu mudur?",
        answer: "Evet, imarlı tüm arsalarda prefabrik ev yapımı için mimari proje ve belediye ruhsatı alınması zorunludur."
      },
      {
        question: "Prefabrik evlerin kullanım ömrü ne kadardır?",
        answer: "Galvanizli çelik karkas ve kaliteli yalıtım malzemeleri kullanılan prefabrik evlerin kullanım ömrü 50 ila 70 yıl arasındadır."
      }
    ]
  },
  {
    id: "2",
    slug: "deprem-dayanimli-radye-temel-bina-gucclendirme",
    title: "Deprem Dayanımlı Radye Temel Uygulaması ve Bina Güçlendirme Teknikleri",
    category: "Mühendislik & Yapı",
    author: "Dr. Selim Arslan - Statik Proje Uzmanı",
    date: "2026-07-15",
    readTime: "8 dk okuma",
    image: hero1,
    keywords: "radye temel nedir, deprem dayanıklı bina, bina güçlendirme, kentsel dönüşüm adana",
    excerpt: "Binaların deprem performansını artıran radye jeneratör temel sistemleri, C35/40 beton kullanımı ve kentsel dönüşüm kriterleri.",
    content: `
      <h2>Radye Temel Sisteminin Önemi</h2>
      <p>Radye temel (radye jeneratör), binanın yükünü tüm zemin yüzeyine eşit olarak dağıtan yekpare betonarme temel türüdür. Zemin taşıma gücü düşük veya zayıf alüvyon zeminlerde binanın oturmasını ve deprem anında devrilmesini engeller.</p>
      
      <h3>C35/C40 Beton ve Nervürlü Demir Kullanımı</h3>
      <p>PETEKS projelerinde kullanılan yüksek dayanımlı C35 ve C40 sınıfı hazır betonlar ile TS 708 standartlarındaki S420 nervürlü donatı çelikleri, yapılara uzun ömür ve maksimum deprem mukavemeti kazandırmaktadır.</p>

      <h3>Kentsel Dönüşümde Sıfırdan İnşaat Süreci</h3>
      <p>Eski binaların karot testi ve risk analizi sonrası yıkımı yapılıp, yeni yönetmeliğe uygun radye temel üzerine yükselen konut projeleri hem can güvenliği sağlamakta hem de gayrimenkul değerini 3 katına çıkarmaktadır.</p>
    `,
    faqs: [
      {
        question: "Radye temel ile mütemadi temel arasındaki fark nedir?",
        answer: "Mütemadi (şerit) temel sadece duvar altlarına dökülürken, radye temel binanın tüm taban alanını kaplayan yekpare beton plak sistemidir."
      }
    ]
  },
  {
    id: "3",
    slug: "villa-ic-mimari-tadilat-dekorasyon-trendleri",
    title: "Villa İç Mimari Tadilatı ve 2026 Lüks Dekorasyon Trendleri",
    category: "Dekorasyon & İç Mimari",
    author: "Mimar Merve Demir - PETEKS Dekorasyon",
    date: "2026-07-10",
    readTime: "5 dk okuma",
    image: hero3,
    keywords: "villa dekorasyonu, anahtar teslim tadilat, iç mimarlık adana, lüks dekorasyon",
    excerpt: "Villalarda salon, mutfak, banyo renovasyonu ve akıllı ev otomasyonu entegrasyonu ile yaşam alanlarınızı yeniden tasarlayın.",
    content: `
      <h2>2026 İç Mimari Trendleri: Doğallık ve Akıllı Teknolojiler</h2>
      <p>Yeni nesil iç mimaride doğal mermer kaplamalar, gizli LED aydınlatmalar, sıcak ahşap dokular ve iklimlendirmeyi otomatik yöneten akıllı ev sistemleri ön plana çıkmaktadır.</p>
      
      <h3>Anahtar Teslim Tadilatta Dikkat Edilmesi Gerekenler</h3>
      <p>Kapsamlı bir konut veya villa tadilatında su ve elektrik tesisatlarının altyapıdan yenilenmesi, seramik ve parke seçimlerinde A sınıfı aşınma dirençli malzemeler tercih edilmesi gerekmektedir.</p>
    `
  },
  {
    id: "4",
    slug: "celik-konstruksiyon-fabrika-lojistik-depo-insaati",
    title: "Endüstriyel Çelik Konstrüksiyon Fabrika ve Lojistik Depo İnşaatı",
    category: "Endüstriyel Yapılar",
    author: "Şantiye Şefi Mehmet Can - PETEKS Endüstri",
    date: "2026-07-02",
    readTime: "7 dk okuma",
    image: hero4,
    keywords: "çelik fabrika inşaatı, endüstriyel depo yapımı, saha betonu, çelik makas sistemi",
    excerpt: "Geniş açıklıklı endüstriyel tesisler, heavy-duty vinç yolları ve tozumaz parlak saha betonu uygulaması rehberi.",
    content: `
      <h2>Endüstriyel Yapılarda Çelik Çözümlerinin Avantajları</h2>
      <p>Büyük kapalı alan gerektiren fabrika ve lojistik depolarda kolonsuz geniş açıklıklar geçebilmek için hafif ve ağır çelik konstrüksiyon çözümleri uygulanmaktadır.</p>
    `
  }
];
