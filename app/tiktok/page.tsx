import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TelegramIcon } from "@/components/icons";
import HeroCards, { ShowTelegramPreviewImage } from "@/components/heroCards";
import DocsCard from "@/components/docsCard";
import FeatureList from "@/components/featureList";
import { Footer } from "@/components/footer";

export default function TikTokPage() {
  return (
    <>
      <section className="py-2 md:py-10">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 px-4 w-full">
          {/* Contenuto sulla sinistra */}
          <div className="flex flex-col items-start justify-center md:w-1/2">
            <div className="max-w-xl">
              <span className={title({ size: "md" })}>
                Entra ora nella nostra&nbsp;
              </span>
              <span className={title({ color: "violet", size: "md" })}>
                Community
              </span>
              <br />
              <div className={subtitle({ class: "mt-4" })}>
                Gli unici in Italia{" "}
                <span className="font-extrabold">
                  a portare pronostici costruiti su statistiche
                  ultra-dettagliate e campionati minori
                </span>{" "}
                che il 99% dei tipster nemmeno sa esistere.
                <br />
              </div>

              <div className="mt-6">
                <FeatureList />
              </div>

              <div className="mt-6">
                <div>
                  <span className={title({ size: "smm" })}>
                    È da qui che nascono le nostre&nbsp;
                  </span>
                  <span className={title({ color: "violet", size: "smm" })}>
                    giocate vincenti
                  </span>
                  <span className={title({ size: "smm" })}>
                    , dove gli altri non vedono&nbsp;
                  </span>
                  <span className={title({ color: "violet", size: "smm" })}>
                    noi colpiamo
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "shadow",
                    radius: "full",
                    color: "primary",
                  })}
                  href={siteConfig.links.telegramForTikTok}
                >
                  <TelegramIcon size={20} />
                  ENTRA NELLA COMMUNITY
                </Link>
              </div>
            </div>
          </div>

          {/* Card con immagini sulla destra */}
          <div className="md:w-1/2 md:pl-4 lg:pl-6 xl:pl-8 flex justify-center items-center">
            <HeroCards />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center my-8">
        <Divider className="max-w-xs bg-primary" />
      </div>

      <section
        className="relative z-10 gap-2 w-full flex flex-col items-center py-8 md:py-12 lg:py-16 scroll-mt-20"
        id="community"
      >
        <div className="text-center mb-8">
          <span className={title({ size: "md" })}>Siamo una&nbsp;</span>
          <span className={title({ color: "violet", size: "md" })}>
            community italiana indipendente
          </span>{" "}
          <span className={subtitle({})}>
            Viviamo di calcio, analisi e intrattenimento. Non vendiamo metodi
            per diventare ricchi, non promettiamo magie. Condividiamo strategie,
            giocate studiate e contenuti esclusivi,costruiti su numeri veri.
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center my-8">
        <Divider className="max-w-xs bg-primary" />
      </div>

      <section className="py-8 md:py-10 mt-8 md:mt-16 scroll-mt-20" id="about">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 px-4 w-full">
          {/* Contenuto sulla sinistra */}
          <div className="flex flex-col items-start justify-center md:w-1/2">
            <div className="max-w-xl">
              <span className={title({ size: "md" })}>
                Non il solito gruppo di&nbsp;
              </span>
              <span className={title({ color: "violet", size: "md" })}>
                Tipster
              </span>
              <br />
              <div className={subtitle({ class: "mt-2" })}>
                Nel nostro team c&apos;è chi il calcio lo vive quotidianamente
                non solo dietro lo schermo,{" "}
                <span className="font-extrabold">Ale e il Barman</span> portano
                nella community la vera passione vissuta sugli spalti. Hanno
                girato,{" "}
                <span className="font-extrabold">
                  gli stadi di mezzo mondo,{" "}
                </span>
                visto dal vivo le partite più folli, respirato il calcio vero
                tra cori, trasferte e adrenalina. Non si limitano a guardare i
                numeri:{" "}
                <span className="font-extrabold">
                  vivono il calcio ogni giorno,{" "}
                </span>
                tra emozione e analisi, e creano contenuti che parlano al cuore
                di chi tifa sul serio. Con loro, ogni pronostico è anche una
                storia da raccontare.
                <br />
              </div>
              <div className={subtitle({ class: "mt-2" })}>
                E poi c&apos;è lui, il nostro asso nella manica:{" "}
                <span className="font-extrabold">il Prof. Franco</span>, mente
                brillante e personaggio irriverente, specializzato in campionati
                minori esteri e marcatori poco conosciuti. Con il suo{" "}
                <span className="font-extrabold">Brevetto Marcatori</span> ha
                già fatto vincere centinaia di utenti.
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "shadow",
                    radius: "full",
                    color: "primary",
                  })}
                  href={siteConfig.links.telegramForTikTok}
                >
                  <TelegramIcon size={20} />
                  ENTRA NELLA COMMUNITY
                </Link>
              </div>
            </div>
          </div>

          {/* Card con immagini sulla destra */}
          <div className="md:w-1/2 md:pl-4 lg:pl-6 xl:pl-8 flex justify-center items-center">
            <ShowTelegramPreviewImage />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center my-8">
        <Divider className="max-w-xs bg-primary" />
      </div>

      <section className="py-8 md:py-12 lg:py-16 scroll-mt-20" id="docs">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 px-4 w-full">
          {/* Contenuto sulla destra */}
          <div className="flex flex-col items-start justify-center md:w-1/2">
            <div className="w-full md:max-w-xl">
              <span className={subtitle({ class: "mt-6" })}>
                Perchè dovresti seguirci
              </span>{" "}
              <span className={title({ size: "md" })}>
                Siamo gli inventori del
              </span>{" "}
              <span className={title({ color: "violet", size: "md" })}>
                Brevetto Marcatori
              </span>{" "}
              {/* DocsCard per mobile - visibile solo su schermi piccoli */}
              <div className="md:hidden my-8 flex justify-center">
                <DocsCard />
              </div>
              <div className={title({ size: "smm" })}>
                <span>Non hai bisogno di un</span>{" "}
                <span className={title({ size: "smm" })}>
                  tipster che ti suggerisca un
                </span>{" "}
                <span className={title({ color: "violet", size: "smm" })}>
                  goal di Lukaku.
                </span>
              </div>
              <div className={subtitle({ class: "mt-6" })}>
                Noi andiamo dove i riflettori non arrivano: campionati esteri
                minori, squadre dai nomi stravaganti e soprattutto marcatori
                sconosciuti ai più. Dietro questa scelta c&apos;è un metodo
                preciso: i bookmakers, su questi eventi, commettono spesso{" "}
                <span className="font-extrabold">
                  errori di valutazione sulle quote.
                </span>
              </div>
              <div className={subtitle({ class: "mt-6" })}>
                <span className="font-extrabold">
                  Noi li analizziamo, li studiamo e li sfruttiamo a nostro
                  vantaggio.
                </span>
              </div>
              <div className={subtitle({ class: "mt-6" })}>
                Grazie all&apos;esperienza decennale del Prof. Franco,
                appassionato maniaco del calcio underground, e al suo celebre{" "}
                <span className="font-extrabold">Brevetto Marcatori</span>,
                sappiamo dove trovare valore reale e margine di guadagno più
                alto, con giocate spesso più semplici di quanto sembri.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:items-center">
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "shadow",
                    radius: "full",
                    color: "primary",
                  })}
                  href={siteConfig.links.telegramForTikTok}
                >
                  {/* contenuto del link */}
                  <TelegramIcon size={20} />
                  SCOPRI IL BREVETTO MARCATORI
                </Link>
              </div>
            </div>
          </div>

          {/* Card con immagine sulla destra - visibile solo su schermi grandi */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <DocsCard />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center my-8">
        <Divider className="max-w-xs bg-primary" />
      </div>

      <section
        className="relative z-10 gap-2 w-full flex flex-col items-center py-8 md:py-12 lg:py-16 mb-16 lg:mb-24 scroll-mt-20"
        id="community"
      >
        <div className="text-center mb-8">
          <span className={title({ size: "md" })}>Ancora non&nbsp;</span>
          <span className={title({ color: "violet", size: "md" })}>
            sei dentro?
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Mentre stai leggendo questa pagina, nella nostra community{" "}
            <span className="font-extrabold">
              sono già partiti i prossimi pronostici.
            </span>
            <div className={subtitle({ class: "mt-2" })}>
              Le giocate più calde. I marcatori nascosti. Le{" "}
              <span className="font-extrabold">quote sbagliate</span> dai
              bookmakers.
            </div>
            <div className={subtitle({ class: "mt-2" })}>
              Tutto GRATIS, senza abbonamenti, senza sorprese.{" "}
              <span className="font-extrabold">Chi è già dentro</span> lo sa.
              Chi resta fuori, arriverà dopo.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <Link
            isExternal
            className={buttonStyles({
              variant: "shadow",
              radius: "full",
              color: "primary",
            })}
            href={siteConfig.links.telegramForTikTok}
          >
            <TelegramIcon size={20} />
            ENTRA ORA!
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
