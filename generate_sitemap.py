import datetime

def tr_slugify(text):
    mapping = {
        'ğ': 'g', 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c',
        'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'İ': 'i', 'Ö': 'o', 'Ç': 'c'
    }
    result = text
    for key, value in mapping.items():
        result = result.replace(key, value)
    
    result = result.lower().strip()
    result = "".join(c if c.isalnum() else "-" for c in result)
    while "--" in result:
        result = result.replace("--", "-")
    return result.strip("-")

locations = [
    {
        "city": "Adana",
        "districts": [
            "Seyhan", "Çukurova", "Yüreğir", "Sarıçam", "Ceyhan", 
            "Kozan", "Karaisalı", "Pozantı", "Aladağ", "Feke", 
            "İmamoğlu", "Karataş", "Saimbeyli", "Tufanbeyli", "Yumurtalık"
        ]
    },
    {
        "city": "Mersin",
        "districts": [
            "Yenişehir", "Mezitli", "Toroslar", "Akdeniz", "Tarsus", 
            "Erdemli", "Silifke", "Anamur", "Mut", "Gülnar", 
            "Aydıncık", "Bozyazı", "Çamlıyayla"
        ]
    },
    {
        "city": "Osmaniye",
        "districts": [
            "Merkez", "Kadirli", "Düziçi", "Bahçe", "Toprakkale", 
            "Hasanbeyli", "Sumbas"
        ]
    },
    {
        "city": "Niğde",
        "districts": [
            "Merkez", "Bor", "Ulukışla", "Altunhisar", "Çiftlik", "Çamardı"
        ]
    }
]

blog_slugs = [
    "2026-prefabrik-ev-fiyatlari-ve-yapim-sureci",
    "deprem-dayanimli-radye-temel-bina-gucclendirme",
    "villa-ic-mimari-tadilat-dekorasyon-trendleri",
    "celik-konstruksiyon-fabrika-lojistik-depo-insaati"
]

base_url = "https://www.peteksinsaat.com.tr"
static_pages = [
    ("", "1.0", "weekly"),
    ("/about", "0.85", "monthly"),
    ("/services", "0.9", "weekly"),
    ("/projects", "0.9", "weekly"),
    ("/partnerships", "0.75", "monthly"),
    ("/calculator", "0.95", "weekly"),
    ("/decoration", "0.85", "weekly"),
    ("/blog", "0.85", "weekly"),
    ("/contact", "0.85", "monthly")
]

now = datetime.datetime.now().strftime("%Y-%m-%d")

sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

# Static Pages
for page, priority, changefreq in static_pages:
    sitemap_xml += f'  <url>\n    <loc>{base_url}{page}</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>{changefreq}</changefreq>\n    <priority>{priority}</priority>\n  </url>\n'

# Blog Articles
for slug in blog_slugs:
    sitemap_xml += f'  <url>\n    <loc>{base_url}/blog/{slug}</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>\n'

# Dynamic Location Pages (without trailing slash to match React Router & canonical URLs)
for loc in locations:
    city_slug = tr_slugify(loc["city"])
    for district in loc["districts"]:
        district_slug = tr_slugify(district)
        sitemap_xml += f'  <url>\n    <loc>{base_url}/{city_slug}/{district_slug}</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n'

sitemap_xml += '</urlset>\n'

with open("public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_xml)

total_urls = len(static_pages) + len(blog_slugs) + sum(len(l['districts']) for l in locations)
print(f"Sitemap generated successfully in public/sitemap.xml with {total_urls} URLs.")
