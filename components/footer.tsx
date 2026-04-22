"use client";

import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import {
  TelegramIcon,
  TiktokIcon,
  InstagramIcon,
  Logo,
} from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-default-100 border-t border-divider">
      <div className="w-full py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
          {/* Logo e Descrizione */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-bold text-xl text-primary">
                Virtual Bar
              </span>
            </div>
            <p className="text-default-600 text-sm leading-relaxed max-w-md">
              La prima community in Italia ad occuparsi di intrattenimento ed
              informazione sul mondo dello Sport e degli Sport Virtuali.
            </p>
          </div>

          {/* Navigazione */}
          <div>
            <h3 className="font-semibold text-default-900 mb-4">Navigazione</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-default-600 hover:text-primary text-sm"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-semibold text-default-900 mb-4">Contatti</h3>
            <div className="space-y-2">
              <Link
                className="text-default-600 hover:text-primary text-sm block"
                href="mailto:info@virtualbarsport.it"
              >
                info@virtualbarsport.it
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-default-900 mb-4">Seguici</h3>
            <div className="flex flex-col space-y-3">
              <Link
                isExternal
                className="flex items-center gap-2 text-default-600 hover:text-primary text-sm"
                href={siteConfig.links.telegram}
                rel="noopener noreferrer"
              >
                <TelegramIcon size={16} />
                Telegram
              </Link>
              <Link
                isExternal
                className="flex items-center gap-2 text-default-600 hover:text-primary text-sm"
                href={siteConfig.links.instagram}
                rel="noopener noreferrer"
              >
                <InstagramIcon size={16} />
                Instagram
              </Link>
              <Link
                isExternal
                className="flex items-center gap-2 text-default-600 hover:text-primary text-sm"
                href={siteConfig.links.tiktok}
                rel="noopener noreferrer"
              >
                <TiktokIcon size={16} />
                TikTok
              </Link>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} Virtual Bar News. Tutti i diritti
            riservati.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              className="text-default-500 hover:text-primary text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-default-500 hover:text-primary text-sm"
              href="#"
            >
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full">
        <Image
          removeWrapper
          alt="Virtual Bar Footer"
          className="w-full h-auto object-cover"
          src="/images/footerImage.jpeg"
        />
      </div>
    </footer>
  );
};
