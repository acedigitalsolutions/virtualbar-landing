"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";

import { siteConfig } from "@/config/site";

export default function TelegramCard() {
  return (
    <Card
      isPressable
      className="max-w-[400px] cursor-pointer hover:scale-105 transition-transform"
      onPress={() =>
        window.open(siteConfig.links.telegram, "_blank", "noopener,noreferrer")
      }
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="telegram logo"
          height={40}
          radius="sm"
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-left">Telegram</p>
          <p className="text-small text-default-500">Virtual Bar</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>
          Entra nella nostra comunity Telegram. Trova Pronostici, Analisi e
          Bonus sul mondo del Calcio.
        </p>
      </CardBody>
    </Card>
  );
}

export function InstagramCard() {
  return (
    <Card
      isPressable
      className="max-w-[400px] cursor-pointer hover:scale-105 transition-transform"
      onPress={() =>
        window.open(siteConfig.links.instagram, "_blank", "noopener,noreferrer")
      }
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="instagram logo"
          height={40}
          radius="sm"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-left">Instagram</p>
          <p className="text-small text-default-500">@virtualbarnews</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>Seguici su Instagram per aggiornamenti e contenuti esclusivi.</p>
      </CardBody>
    </Card>
  );
}

export function TikTokCard() {
  return (
    <Card
      isPressable
      className="max-w-[400px] cursor-pointer hover:scale-105 transition-transform"
      onPress={() =>
        window.open(siteConfig.links.tiktok, "_blank", "noopener,noreferrer")
      }
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="tiktok logo"
          height={40}
          radius="sm"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-left">TikTok</p>
          <p className="text-small text-default-500">@virtualbar.it</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>Seguici su TikTok per video divertenti e contenuti esclusivi.</p>
      </CardBody>
    </Card>
  );
}
