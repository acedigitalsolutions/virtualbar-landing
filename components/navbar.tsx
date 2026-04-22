"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { RedirectLink } from "@/components/redirect-link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TelegramIcon,
  TiktokIcon,
  InstagramIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-[#8E1B7F]">Virtual Bar</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Telegram"
            href={siteConfig.links.telegram}
            rel="noopener noreferrer"
          >
            <TelegramIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="TiktokIcon"
            href={siteConfig.links.tiktok}
            rel="noopener noreferrer"
          >
            <TiktokIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={RedirectLink}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.telegramHeader}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Scrivici
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Telegram"
          href={siteConfig.links.telegram}
          rel="noopener noreferrer"
        >
          <TelegramIcon className="text-default-500" />
        </Link>

        <Link
          isExternal
          aria-label="Instagram"
          href={siteConfig.links.instagram}
          rel="noopener noreferrer"
        >
          <InstagramIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="primary"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="mx-4 mt-2 flex items-center gap-3">
          <span className="text-primary text-lg">Cambia Tema</span>
          <ThemeSwitch />
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
