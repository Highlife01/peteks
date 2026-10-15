import React from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProjectItem {
  id?: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image?: string;
  details?: string[];
}

interface LightboxModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasMultiple?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasMultiple = false,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="rounded-full bg-background/80 backdrop-blur-md hover:bg-destructive hover:text-white transition-colors border-border/50"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Container */}
          <div className="relative bg-black/40 min-h-[300px] md:min-h-[420px] flex items-center justify-center overflow-hidden group">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground bg-gradient-to-br from-slate-900 to-slate-800 w-full h-full">
                <span className="text-6xl mb-4">🏗️</span>
                <p className="text-sm font-medium">{project.title} Görseli</p>
              </div>
            )}

            {/* Navigation Arrows */}
            {hasMultiple && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-md hover:bg-background text-foreground transition-all shadow-md"
                  aria-label="Önceki Proje"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-md hover:bg-background text-foreground transition-all shadow-md"
                  aria-label="Sonraki Proje"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Details Container */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold border-accent/20">
                  <Tag className="h-3 w-3 mr-1" />
                  {project.category}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.year}
                </Badge>
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                {project.title}
              </h2>

              <p className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1 text-accent shrink-0" />
                {project.location}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {project.details && project.details.length > 0 && (
                <div className="border-t border-border pt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Proje Öne Çıkan Özellikleri
                  </h4>
                  <ul className="space-y-1.5">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-xs flex items-center text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <a
                href={`https://wa.me/905321350616?text=${encodeURIComponent(`Merhaba, ${project.title} projeniz hakkında detaylı bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:opacity-95 text-white font-medium shadow-md">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bu Proje Hakkında Bilgi Alın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
