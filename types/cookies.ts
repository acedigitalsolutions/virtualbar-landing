export type CookieConsent = "all" | "essential" | null;

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_PREFERENCES_KEY = "cookie-preferences";
