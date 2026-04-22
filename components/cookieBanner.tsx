"use client";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { useCookieConsent } from "@/hooks/useCookieConsent";

export const CookieBanner = () => {
  const { showBanner, acceptAll, acceptEssential } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur border border-divider">
        <CardBody className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                🍪 Utilizziamo i cookie
              </h3>
              <p className="text-sm text-default-600 leading-relaxed">
                Utilizziamo cookie essenziali per il funzionamento del sito e
                cookie di analisi per migliorare la tua esperienza. I cookie di
                marketing ci aiutano a mostrarti contenuti più rilevanti. Puoi
                gestire le tue preferenze in qualsiasi momento.
              </p>
              <div className="mt-2">
                <Link
                  className="text-primary text-sm hover:underline"
                  href="/privacy-policy"
                >
                  Leggi la nostra Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                className="text-default-600 hover:text-foreground"
                size="sm"
                variant="ghost"
                onPress={acceptEssential}
              >
                Solo Essenziali
              </Button>
              <Button
                className="font-medium"
                color="primary"
                size="sm"
                onPress={acceptAll}
              >
                Accetta Tutti
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
