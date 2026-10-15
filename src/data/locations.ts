export interface LocationData {
    city: string;
    regionCode: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    climateAndSoilNote: string;
    regionalFocus: string;
    districts: string[];
}

export const locations: LocationData[] = [
    {
        city: "Adana",
        regionCode: "TR-01",
        coordinates: { lat: 37.0000, lng: 35.3213 },
        climateAndSoilNote: "Çukurova'nın alüvyon zemin yapısına tam uyumlu derin radye jeneratör temel sistemleri, C35/C40 yüksek mukavemetli beton ve yaz sıcaklarına karşı A+ taşyünü/EPS termal mantolama çözümleri.",
        regionalFocus: "Merkez ofisimizin bulunduğu Adana'da kentsel dönüşüm, kat karşılığı lüks konut blokları, yayla/sayfiye çelik villaları ve OSB fabrika/depo projeleri.",
        districts: [
            "Seyhan",
            "Çukurova",
            "Yüreğir",
            "Sarıçam",
            "Ceyhan",
            "Kozan",
            "Karaisalı",
            "Pozantı",
            "Aladağ",
            "Feke",
            "İmamoğlu",
            "Karataş",
            "Saimbeyli",
            "Tufanbeyli",
            "Yumurtalık"
        ]
    },
    {
        city: "Mersin",
        regionCode: "TR-33",
        coordinates: { lat: 36.8121, lng: 34.6415 },
        climateAndSoilNote: "Akdeniz kıyı şeridinin yüksek nem ve tuzluluk oranına karşı korozyon dirençli galvaniz çelik sistemler, UV dayanımlı dış cephe kaplamaları ve kristalize su yalıtımlı temel izolasyonu.",
        regionalFocus: "Sahil bandında modern deniz manzaralı rezidans ve yazlık villa projeleri, serbest bölge ve liman aksında çelik konstrüksiyon lojistik depo ve antrepo inşaatları.",
        districts: [
            "Yenişehir",
            "Mezitli",
            "Toroslar",
            "Akdeniz",
            "Tarsus",
            "Erdemli",
            "Silifke",
            "Anamur",
            "Mut",
            "Gülnar",
            "Aydıncık",
            "Bozyazı",
            "Çamlıyayla"
        ]
    },
    {
        city: "Osmaniye",
        regionCode: "TR-80",
        coordinates: { lat: 37.0742, lng: 36.2478 },
        climateAndSoilNote: "1. derece aktif deprem kuşağında TBDY-2018 yönetmeliğinin en üst güvenlik standartlarıyla tasarlanan sismik sönümlemeli çelik karkas ve S420 nervürlü donatılı radye temel yapılar.",
        regionalFocus: "Depreme tam dayanıklı müstakil çelik ve prefabrik villalar, Organize Sanayi Bölgesi fabrika binaları, saha betonu ve güçlendirme/renovasyon projeleri.",
        districts: [
            "Merkez",
            "Kadirli",
            "Düziçi",
            "Bahçe",
            "Toprakkale",
            "Hasanbeyli",
            "Sumbas"
        ]
    },
    {
        city: "Niğde",
        regionCode: "TR-51",
        coordinates: { lat: 37.9667, lng: 34.6833 },
        climateAndSoilNote: "Karasal iklimin sert kış koşullarına ve don-çözülme etkisine dayanıklı antifriz katkılı betonarme sistemler, yüksek yoğunluklu taşyünü çatı/cephe izolasyonu ve yerden ısıtma altyapısı.",
        regionalFocus: "Dört mevsim yüksek ısı konforlu müstakil bağ/yayla villaları, tarım ve gıda sanayi soğuk hava depoları, çelik çatı ve anahtar teslim apartman projeleri.",
        districts: [
            "Merkez",
            "Bor",
            "Ulukışla",
            "Altunhisar",
            "Çiftlik",
            "Çamardı"
        ]
    }
];

export const slugify = (text: string) => {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

// Turkish character mapping for slugify
export const trSlugify = (text: string) => {
    const mapping: { [key: string]: string } = {
        'ğ': 'g', 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c',
        'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'İ': 'i', 'Ö': 'o', 'Ç': 'c'
    };

    let result = text;
    for (const key in mapping) {
        result = result.replace(new RegExp(key, 'g'), mapping[key]);
    }

    return result
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

export const getLocationBySlugs = (citySlug: string, districtSlug: string) => {
    const cityData = locations.find(l => trSlugify(l.city) === citySlug);
    if (!cityData) return null;

    const districtName = cityData.districts.find(d => trSlugify(d) === districtSlug);
    if (!districtName) return null;

    return {
        city: cityData.city,
        district: districtName,
        regionCode: cityData.regionCode,
        coordinates: cityData.coordinates,
        climateAndSoilNote: cityData.climateAndSoilNote,
        regionalFocus: cityData.regionalFocus,
        allDistrictsInCity: cityData.districts,
    };
};

export const getAllLocationPaths = () => {
    const paths: { city: string; district: string }[] = [];
    locations.forEach(cityData => {
        cityData.districts.forEach(district => {
            paths.push({
                city: trSlugify(cityData.city),
                district: trSlugify(district)
            });
        });
    });
    return paths;
};
