import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface GoogleAnalyticsProps {
  measurementId?: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Component to handle route change tracking for Google Analytics.
 * The main gtag script is loaded in index.html to ensure it's available early.
 */
const GoogleAnalytics = ({
  measurementId = "G-WFWM5412N3",
}: GoogleAnalyticsProps) => {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("config", measurementId, {
          page_path: location.pathname + location.search,
        });
      } catch (error) {
        console.error("Tracking page view error:", error);
      }
    }
  }, [location, measurementId]);

  return null;
};

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", eventName, params);
    } catch (error) {
      console.error("Tracking event error:", error);
    }
  }
};

export default GoogleAnalytics;
