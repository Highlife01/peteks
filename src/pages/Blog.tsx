import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, User, ArrowRight, Search, Tag, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts, BlogPostItem } from "@/data/blogData";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = useMemo(() => {
    const set = new Set(blogPosts.map((post) => post.category));
    return ["Tümü", ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "Tümü" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Yapı Rehberi & Sektörel Blog - PETEKS İnşaat"
        description="Prefabrik ev fiyatları, çelik villa yapımı, radye temel, kentsel dönüşüm ve villa dekorasyonu hakkında uzman mühendislik makaleleri."
        keywords="inşaat rehberi, prefabrik ev fiyatları 2026, radye temel nedir, villa dekorasyon fikirleri, çelik konstrüksiyon fabrika"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-primary/10 via-muted/30 to-background border-b border-border/40 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Breadcrumbs items={[{ label: "Yapı Rehberi & Blog" }]} />
            <Badge variant="outline" className="px-3 py-1 text-accent border-accent/30 uppercase tracking-widest text-xs font-semibold">
              <Sparkles className="h-3 w-3 mr-1.5 inline" />
              Sektörel Rehber & İpuçları
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              PETEKS İnşaat & Mimarlık Rehberi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              İnşaat, villa tasarımı, çelik bina ve dekorasyon projeleriniz için uzman mühendislik yazıları
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-background border-b border-border/50 sticky top-20 z-30 backdrop-blur-md bg-background/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full text-xs font-semibold shrink-0 transition-all ${
                    selectedCategory === cat
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Makale veya konu ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-full bg-muted/50 border-border focus:border-accent text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
              <p className="text-lg text-muted-foreground mb-4">Aramanızla eşleşen makale bulunamadı.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("Tümü");
                  setSearchQuery("");
                }}
              >
                Tüm Makaleleri Göster
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group border border-border/80 hover:border-accent/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-card"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-accent" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1 text-accent" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground group-hover:text-accent transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/50 mt-4 pt-4">
                    <span className="text-xs text-muted-foreground font-medium flex items-center">
                      <User className="h-3.5 w-3.5 mr-1 text-accent" />
                      {post.author.split("-")[0]}
                    </span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform"
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Devamını Oku
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
