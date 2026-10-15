export interface ServiceSector {
  id: string;
  emoji: string;
  title: string;
  cleanTitle: string;
  count: string;
  shortDesc: string;
  detailedText: string;
  items: string[];
}

export const SECTORS_CATALOG: ServiceSector[] = [
  {
    id: "bina",
    emoji: "🏢",
    title: "🏢 Bina & Konut İnşaatları",
    cleanTitle: "Bina & Konut İnşaatları",
    count: "27 Kalem",
    shortDesc:
      "Rezidans, toplu konut, kamu hizmet binaları, otel, hastane ve iş merkezleri için anahtar teslim üst ve altyapı inşaat çözümleri.",
    detailedText:
      "PETEKS İnşaat & Mimarlık olarak, konut projelerinden gökdelen ve rezidans inşaatlarına, kamu hizmet binalarından hastane ve okul komplekslerine kadar geniş bir yelpazede yüksek standartlı yapı çözümleri sunuyoruz. Zemin etüdünden başlayarak temel kazısı, betonarme ve çelik karkas yapımı, cephe kaplama ve ince işçilik süreçlerini ISO 9001 ve ISO 45001 iş güvenliği normlarına tam uyumla yönetiyoruz. Saha mühendislerimiz ve uzman ekiplerimiz ile temel altı dolguları, kazık başı kırma, bohçalama su yalıtımı ve çevre düzenleme dâhil tüm mühendislik disiplinlerinde sıfır hata prensibiyle çalışmaktayız.",
    items: [
      "Konut İnşaatları",
      "Villa İnşaatları",
      "Apartman İnşaatları",
      "Site İnşaatları",
      "Rezidans İnşaatları",
      "Toplu Konut İnşaatları",
      "Ofis Binaları",
      "İş Merkezi İnşaatları",
      "Plaza İnşaatları",
      "AVM (Alışveriş Merkezi) İnşaatları",
      "Otel İnşaatları",
      "Hastane İnşaatları",
      "Sağlık Merkezi İnşaatları",
      "Okul İnşaatları",
      "Üniversite Kampüsü İnşaatları",
      "Kreş ve Anaokulu İnşaatları",
      "Yurt İnşaatları",
      "Spor Salonu İnşaatları",
      "Stadyum İnşaatları",
      "Kültür Merkezi İnşaatları",
      "Kongre Merkezi İnşaatları",
      "Cami & Dini Yapı İnşaatları",
      "Kamu Hizmet Binaları",
      "Adliye Binaları",
      "Belediye Hizmet Binaları",
      "Cezaevi & İtfaiye Binaları",
      "Emniyet Binaları",
    ],
  },
  {
    id: "endustriyel",
    emoji: "🏭",
    title: "🏭 Endüstriyel İnşaatlar & Tesisler",
    cleanTitle: "Endüstriyel İnşaatlar & Tesisler",
    count: "17 Kalem",
    shortDesc:
      "OSB fabrika yapıları, ağır sanayi tesisleri, soğuk hava depoları, antrepo ve üretim hangarları için çelik & betonarme entegre çözümler.",
    detailedText:
      "Endüstriyel tesis projelendirme ve yapımında zaman, yüksek tork ve zemin mukavemeti kritik önem taşır. Organize Sanayi Bölgeleri (OSB) bünyesindeki fabrikalar, çimento ve kimya tesisleri, lojistik antrepolar ve soğuk hava depoları için ağır yük taşıma kapasitesine sahip özel temel ve üstyapı çözümleri üretiyoruz. Yüksek tavanlı çelik konstrüksiyon montajlarında kule vinç ve teleskopik mobil vinç sistemleri aktif rol oynar. Zemin vibrasyonunu önleyen aksiyel şap ve sönümleme betonları dökülerek ağır makine kurulumlarına uygun altyapı hazırlanır.",
    items: [
      "Fabrika İnşaatları",
      "Üretim Tesisi İnşaatları",
      "Organize Sanayi (OSB) Tesisleri",
      "Depo İnşaatları",
      "Antrepo İnşaatları",
      "Lojistik Merkezleri",
      "Soğuk Hava Deposu İnşaatları",
      "Atölye İnşaatları",
      "Hangar İnşaatları",
      "Rafineri İnşaatları",
      "Çimento Fabrikaları",
      "Demir-Çelik Tesisleri",
      "Kimya Tesisleri",
      "Gıda Üretim Tesisleri",
      "İlaç Üretim Tesisleri",
      "Enerji Santrali İnşaatları",
      "Ağır Sanayi Tesisleri",
    ],
  },
  {
    id: "altyapi",
    emoji: "🚧",
    title: "🚧 Altyapı & Boru Hatları",
    cleanTitle: "Altyapı & Boru Hatları",
    count: "24 Kalem",
    shortDesc:
      "Otoyol, demiryolu, tünel, viyadük, içme suyu, doğalgaz ve petrol boru hatları için kesintisiz kazı ve altyapı mühendisliği.",
    detailedText:
      "Altyapı projeleri bir ülkenin ve şehrin omurgasını oluşturur. Şehir içi ve şehirlerarası otoyollar, metro ve hızlı tren altyapıları, petrol ve doğalgaz boru hatları ile kanalizasyon/drenaj şebekelerinde 25 yılı aşkın tecrübemizle hizmet veriyoruz. 3D lazer terazi sistemleri sayesinde boru yatağı kumlama ve meyil kazıları milimetrik hassasiyetle tamamlanır. Taş dolgulu drenaj kanalları ve bypass hatları ile altyapı ömrü maksimuma çıkarılır.",
    items: [
      "Yol & Otoyol İnşaatları",
      "Köprü & Viyadük İnşaatları",
      "Tünel İnşaatları",
      "Demiryolu & Metro İnşaatları",
      "Tramvay Hatları",
      "Hızlı Tren Altyapısı",
      "Havalimanı & Pist İnşaatları",
      "Liman & Marina İnşaatları",
      "Baraj & Gölet İnşaatları",
      "Sulama Kanalları",
      "İçme Suyu Hatları",
      "Kanalizasyon Hatları",
      "Yağmur Suyu Drenaj Sistemleri",
      "Doğalgaz Hatları",
      "Petrol Boru Hatları",
      "Elektrik İletim Hatları",
      "Telekomünikasyon Altyapısı",
      "Fiber Optik Altyapısı",
    ],
  },
  {
    id: "saha-beton",
    emoji: "🏗️",
    title: "🏗️ Saha Betonları & Zemin",
    cleanTitle: "Saha Betonları & Zemin",
    count: "12 Kalem",
    shortDesc:
      "Lazer perdahlı helikopterli endüstriyel saha betonları, ağır yük otopark betonları, beton apronlar ve yüzey sertleştiricili zemin kaplamaları.",
    detailedText:
      "Fabrika içi, depo yükleme alanları ve konteyner sahaları sürekli tonajlı araç trafiğine maruz kalır. Bu alanlarda çatlama ve tozumayı önleyen özel lif takviyeli, kuars/korund yüzey sertleştiricili ve lazer perdahlı helikopter şapı uygulamaları gerçekleştiriyoruz. Zemin önce stabilize malzeme ile sıkıştırılır, ardından çelik hasır çekilerek transmikser ve beton pompaları ile C30/C35 sınıfı hazır beton dökülür. İki yönlü lazer nivoyla sıfır kod sapması sağlandıktan sonra derz kesimi ve derz dolgusu (poliüretan mastik) tamamlanır.",
    items: [
      "Fabrika Saha Betonları",
      "Endüstriyel Zemin Betonları",
      "Otopark Betonları",
      "Depo Saha Betonları",
      "Ağır Yük Betonları",
      "Helikopter Perdahlı Betonlar",
      "Baskı Beton Uygulamaları",
      "Beton Yollar",
      "Beton Apronlar",
      "Yükleme Alanı Betonları",
      "Konteyner Saha Betonları",
      "Stabilize Zemin Dolgusu",
    ],
  },
  {
    id: "ustyapi",
    emoji: "🏬",
    title: "🏬 Üstyapı & Taşıyıcı Sistemler",
    cleanTitle: "Üstyapı & Taşıyıcı Sistemler",
    count: "6 Kalem",
    shortDesc:
      "Betonarme, endüstriyel çelik konstrüksiyon, prefabrik ve hafif çelik taşıyıcı sistem imalat ve montajı.",
    detailedText:
      "Deprem yönetmeliğine %100 uyumlu, yüksek mukavemetli taşıyıcı üstyapı sistemleri inşa ediyoruz. Çelik konstrüksiyon yapılarda geniş açıklıklı makas ve kolon montajları güvenle yürütülür. Prefabrik beton elemanların sahada montajı ve birleşim detayları uluslararası statik normlara uygun yapılır.",
    items: [
      "Betonarme Yapılar",
      "Çelik Yapılar",
      "Prefabrik Yapılar",
      "Ahşap Yapılar",
      "Karma (Hibrit) Yapılar",
      "Hafif Çelik Yapılar",
    ],
  },
  {
    id: "enerji",
    emoji: "⚡",
    title: "⚡ Enerji Yapıları & Santraller",
    cleanTitle: "Enerji Yapıları & Santraller",
    count: "8 Kalem",
    shortDesc:
      "GES, RES, HES, trafo merkezleri ve enerji depolama sahaları için hafriyat, zemin düzenleme ve beton altyapı.",
    detailedText:
      "Güneş Enerji Santrallerinde (GES) çakma kazık yatakları ve saha tesviyesi, Rüzgar Enerji Santrallerinde (RES) ise yüksek tonajlı türbin kanat ve kule montajı için ağır beton temel ayakları hazırlarız. Ağır trafo ve enerji depolama alanları için yüksek mukavemetli izolasyon betonları dökülmektedir.",
    items: [
      "Hidroelektrik Santraller (HES)",
      "Termik Santraller",
      "Doğalgaz Çevrim Santralleri",
      "Güneş Enerji Santralleri (GES)",
      "Rüzgar Enerji Santralleri (RES)",
      "Biyogaz Tesisleri",
      "Trafo Merkezleri",
      "Enerji Depolama Tesisleri",
    ],
  },
  {
    id: "su",
    emoji: "💧",
    title: "💧 Su Yapıları & Arıtma",
    cleanTitle: "Su Yapıları & Arıtma",
    count: "8 Kalem",
    shortDesc:
      "Baraj gövde dolguları, arıtma tesisleri, su depoları, terfi merkezleri ve taşkın koruma tahkimatları.",
    detailedText:
      "Su kaynaklarının korunması ve iletimi için su geçirimsiz yüksek performanslı betonarme havuzlar, çökeltim tankları ve isale hatları inşa ediyoruz. Dere ıslahı ve taşkın koruma projelerinde sert taş dolguları yapılarak kıyı koruma duvarları oluşturulmaktadır.",
    items: [
      "Barajlar & Göletler",
      "Su Depoları",
      "Arıtma Tesisleri",
      "Atık Su Arıtma Tesisleri",
      "Terfi Merkezleri",
      "İsale Hatları",
      "Taşkın Koruma Yapıları",
      "Kıyı Tahkimatları",
    ],
  },
  {
    id: "ulasim",
    emoji: "🚄",
    title: "🚄 Ulaşım & Karayolları",
    cleanTitle: "Ulaşım & Karayolları",
    count: "10 Kalem",
    shortDesc:
      "Karayolu, viyadük, havalimanı pistleri, liman iskeleleri ve metro istasyonları altyapı ve üstyapı imalatı.",
    detailedText:
      "Liman yanaşma iskeleleri, ağır yük apronları ve otoban bağlantı viyadüklerinde dekapaj ve dolgu yürütülür. Havalimanı pistlerinde özel beton asfalt kaplama zemin iyileştirmeleri yapılır.",
    items: [
      "Karayolları & Demiryolları",
      "Köprüler & Viyadükler",
      "Tüneller",
      "Havalimanları",
      "Limanlar & İskeleler",
      "Metro İstasyonları",
      "Otobüs Terminalleri",
      "Hızlı Tren Altyapıları",
    ],
  },
  {
    id: "ticari",
    emoji: "🏢",
    title: "🏢 Ticari Yapılar & Showroom",
    cleanTitle: "Ticari Yapılar & Showroom",
    count: "8 Kalem",
    shortDesc:
      "AVM, plaza, araç showroomları, zincir marketler ve akaryakıt istasyonları için modern ticari mimari.",
    detailedText:
      "Ticari yapılarda estetik, fonksiyonellik ve hızlı teslimat ön plandadır. Akaryakıt istasyonu kanopi ve tonoz kazılarından AVM derin bodrum zemin iksa sistemlerine (kazık ve şatkrit) kadar tüm ticari altyapıları tamamlamaktayız.",
    items: [
      "AVM'ler & İş Merkezleri",
      "Ofis Binaları",
      "Showroomlar",
      "Marketler",
      "Zincir Mağazalar",
      "Banka Şubeleri",
      "Akaryakıt İstasyonları",
      "Plazalar",
    ],
  },
  {
    id: "turizm",
    emoji: "🏖️",
    title: "🏖️ Turizm & Konaklama Yapıları",
    cleanTitle: "Turizm & Konaklama Yapıları",
    count: "7 Kalem",
    shortDesc:
      "5 yıldızlı oteller, tatil köyleri, marinaya entegre tesisler ve doğayla uyumlu ahşap/bungalov yapılar.",
    detailedText:
      "Turizm yapılarında peyzajla entegre, falez ve kıyı yapısına zarar vermeyen hassas kazı teknikleri uygulanır. Yüzme havuzları, termal kaplıca betonarme depoları ve otel kompleksleri anahtar teslim tamamlanır.",
    items: [
      "Oteller & Tatil Köyleri",
      "Butik Oteller",
      "Termal Tesisler",
      "Kamp Alanları",
      "Bungalov Tesisleri",
      "Marina Tesisleri",
      "Sosyal Tesisler",
    ],
  },
  {
    id: "tarim",
    emoji: "🌾",
    title: "🌾 Tarım & Hayvancılık Yapıları",
    cleanTitle: "Tarım & Hayvancılık Yapıları",
    count: "8 Kalem",
    shortDesc:
      "Modern sera kurulumları, yüksek kapasiteli besi çiftlikleri, silolar ve tarımsal depo betonları.",
    detailedText:
      "Büyükbaş ve küçükbaş hayvan tesislerinde hijyenik yıkanabilir şap zeminler, silo temelleri ve otomatik havalandırmalı ahır/kümes karkasları inşa edilmektedir.",
    items: [
      "Sera İnşaatları",
      "Ahırlar & Besi Çiftlikleri",
      "Kümesler",
      "Süt Üretim Tesisleri",
      "Tarım Depoları",
      "Silolar",
      "Sulama Tesisleri",
      "Soğuk Hava Depoları",
    ],
  },
  {
    id: "cevre",
    emoji: "🌳",
    title: "🌳 Çevre & Peyzaj Yapıları",
    cleanTitle: "Çevre & Peyzaj Yapıları",
    count: "8 Kalem",
    shortDesc:
      "Millet bahçeleri, rekreasyon alanları, kentsel parklar, tartan pist yürüyüş ve bisiklet yolları.",
    detailedText:
      "Şehirlerin nefes almasını sağlayan kent parkları ve rekreasyon alanlarında bitkisel toprak serme, drenaj kanalları ve kilit taşı/baskı beton yürüyüş yolları yapılmaktadır.",
    items: [
      "Parklar & Millet Bahçeleri",
      "Rekreasyon Alanları",
      "Peyzaj Düzenlemeleri",
      "Çocuk Oyun Alanları",
      "Spor Sahaları",
      "Yürüyüş Yolları",
      "Bisiklet Yolları",
      "Açık Spor Tesisleri",
    ],
  },
  {
    id: "kentsel",
    emoji: "🛠️",
    title: "🛠️ Kentsel Dönüşüm & Restorasyon",
    cleanTitle: "Kentsel Dönüşüm & Restorasyon",
    count: "6 Kalem",
    shortDesc:
      "Riskli bina yıkımı, karbon elyaf ve çelik mantolama ile bina güçlendirme, tarihi eser restorasyonu.",
    detailedText:
      "Kentsel dönüşüm alanlarında bitişik nizam riskli yapıların çevreye zarar vermeden kontrollü yıkılması, hafriyatın taşınması ve mevcut sağlam yapılarda karbon elyaf/mantolama güçlendirmeleri yapılmaktadır.",
    items: [
      "Kentsel Dönüşüm Projeleri",
      "Bina Güçlendirme Çalışmaları",
      "Restorasyon Projeleri",
      "Renovasyon Projeleri",
      "Tarihi Eser Restorasyonları",
      "Cephe Yenileme Uygulamaları",
    ],
  },
  {
    id: "ozel",
    emoji: "🔒",
    title: "🔒 Özel Yapılar & Data Center",
    cleanTitle: "Özel Yapılar & Data Center",
    count: "8 Kalem",
    shortDesc:
      "TIER-3/TIER-4 standartlarında Data Center veri merkezleri, savunma sanayi sığınak ve Ar-Ge tesisleri.",
    detailedText:
      "Yüksek güvenlikli Data Center projelerinde EMI/RFI elektromanyetik zırhlama betonları, iklimlendirme kanalları ve kesintisiz güç jeneratör temelleri TIER standartlarında inşa edilir.",
    items: [
      "Veri Merkezi (Data Center) İnşaatları",
      "Laboratuvar Binaları",
      "Ar-Ge Merkezleri",
      "Askeri Tesisler",
      "Savunma Sanayi Tesisleri",
      "Ceza İnfaz Kurumları",
      "Afet ve Acil Durum Merkezleri",
      "Lojistik Üsler",
    ],
  },
];
