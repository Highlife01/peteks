import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Tag, MessageCircle, Share2, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://www.peteksinsaat.com.tr";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  // Article JSON-LD Schema
  const articleSchema = {
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PETEKS İnşaat & Dekorasyon",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  // FAQPage Schema if FAQs exist
  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title={`${post.title} - PETEKS Blog`}
        description={post.excerpt}
        keywords={post.keywords}
        ogImage={post.image}
        ogUrl={articleUrl}
        articleDate={post.date}
        author={post.author}
      />
      <StructuredData type="Article" data={articleSchema} />
      {faqSchema && <StructuredData type="FAQPage" data={faqSchema} />}
      <Navbar />

      {/* Header / Hero */}
      <section className="pt-36 pb-12 bg-gradient-to-b from-primary/10 via-muted/30 to-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Yapı Rehberi", url: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold">
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground pt-2 border-t border-border/60">
              <span className="flex items-center font-medium">
                <User className="h-4 w-4 mr-1 text-accent" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-accent" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-accent" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Container */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-12 h-[350px] md:h-[480px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* HTML Article Body */}
          <article
            className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed font-normal
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2 prose-h2:border-border
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:text-accent
              prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed
              prose-li:text-base prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQs Accordion Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <div className="flex items-center space-x-2 mb-6">
                <HelpCircle className="h-6 w-6 text-accent" />
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Sıkça Sorulan Sorular
                </h3>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {post.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl px-4">
                    <AccordionTrigger className="font-semibold text-left text-sm md:text-base py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* WhatsApp CTA Card */}
          <Card className="mt-16 border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-card to-emerald-500/5">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Bu Makale Hakkında Sorularınız mı Var?
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                PETEKS uzman mühendisleri projeniz için ücretsiz danışmanlık ve keşif hizmeti sunmaktadır.
              </p>
              <a
                href={`https://wa.me/905320550945?text=${encodeURIComponent(`Merhaba, "${post.title}" makalenizi okudum ve detaylı bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-emerald-600/20">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Mühendisimizle WhatsApp'tan Görüşün
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Navigation Back Link */}
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tüm Rehber Yazılarına Dön
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
