import { Component, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Error caught by boundary:", error, errorInfo);
    // Error reporting could go here (e.g., Sentry, LogRocket, etc.)
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        (window as any).gtag("event", "exception", {
          description: error.message,
          fatal: true,
        });
      } catch (e) {
        // Ignore analytics errors
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
          <Card className="max-w-md w-full border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Bir Hata Oluştu</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
              </p>
              {this.state.error && (
                <details className="text-sm" open>
                  <summary className="cursor-pointer text-muted-foreground hover:text-foreground mb-2">
                    Hata Detayları
                  </summary>
                  <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto max-h-60">
                    <div className="font-semibold mb-1">Hata Mesajı:</div>
                    <div className="mb-3">{this.state.error.message || this.state.error.toString()}</div>
                    {this.state.error.stack && (
                      <>
                        <div className="font-semibold mb-1">Stack Trace:</div>
                        <div className="whitespace-pre-wrap">{this.state.error.stack}</div>
                      </>
                    )}
                    {this.state.error.name && (
                      <>
                        <div className="font-semibold mb-1 mt-3">Hata Tipi:</div>
                        <div>{this.state.error.name}</div>
                      </>
                    )}
                  </pre>
                </details>
              )}
              <div className="flex gap-3">
                <Button
                  onClick={() => window.location.reload()}
                  className="flex-1"
                >
                  Sayfayı Yenile
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                  className="flex-1"
                >
                  Ana Sayfaya Dön
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

