"use client";

import { useState, useEffect } from "react";

import {
  CookieConsent,
  CookiePreferences,
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
} from "@/types/cookies";

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedConsent = localStorage.getItem(
      COOKIE_CONSENT_KEY,
    ) as CookieConsent;
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);

      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      } else {
        // Set default preferences based on consent
        const defaultPrefs: CookiePreferences = {
          essential: true,
          analytics: savedConsent === "all",
          marketing: savedConsent === "all",
        };

        setPreferences(defaultPrefs);
        localStorage.setItem(
          COOKIE_PREFERENCES_KEY,
          JSON.stringify(defaultPrefs),
        );
      }

      if (savedConsent === "all") {
        initializeAnalytics();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const newConsent: CookieConsent = "all";
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };

    setConsent(newConsent);
    setPreferences(newPreferences);
    setShowBanner(false);

    localStorage.setItem(COOKIE_CONSENT_KEY, newConsent);
    localStorage.setItem(
      COOKIE_PREFERENCES_KEY,
      JSON.stringify(newPreferences),
    );

    initializeAnalytics();
  };

  const acceptEssential = () => {
    const newConsent: CookieConsent = "essential";
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };

    setConsent(newConsent);
    setPreferences(newPreferences);
    setShowBanner(false);

    localStorage.setItem(COOKIE_CONSENT_KEY, newConsent);
    localStorage.setItem(
      COOKIE_PREFERENCES_KEY,
      JSON.stringify(newPreferences),
    );
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem(
      COOKIE_PREFERENCES_KEY,
      JSON.stringify(newPreferences),
    );

    const hasNonEssential =
      newPreferences.analytics || newPreferences.marketing;
    const newConsent: CookieConsent = hasNonEssential ? "all" : "essential";

    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, newConsent);

    if (newPreferences.analytics) {
      initializeAnalytics();
    }
  };

  const resetConsent = () => {
    setConsent(null);
    setShowBanner(true);
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);
  };

  const initializeAnalytics = () => {
    if (typeof window === "undefined") return;

    // Initialize Google Analytics
    console.log("Analytics initialized");

    // Add your analytics initialization code here
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
  };

  return {
    consent,
    preferences,
    showBanner,
    acceptAll,
    acceptEssential,
    updatePreferences,
    resetConsent,
  };
};
