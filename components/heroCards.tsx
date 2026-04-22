"use client";

import { Card, Image } from "@heroui/react";

export default function HeroCards() {
  return (
    <div className="w-full max-w-md lg:max-w-3xl xl:max-w-4xl h-full flex justify-center">
      <Card
        className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] lg:aspect-[21/9] xl:aspect-[21/8] max-h-[60vh] md:max-h-[45vh] lg:max-h-[42vh] xl:max-h-[45vh]"
        radius="lg"
        shadow="md"
      >
        <Image
          removeWrapper
          alt="Virtual Bar - YPD Team"
          className="z-0 w-full h-full object-cover object-center rounded-lg"
          loading="eager" // Dato che è hero image
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
          src="/images/fotolanding.jpg"
        />
      </Card>
    </div>
  );
}

export function ShowTelegramPreviewImage() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full flex justify-center">
      <Card
        className="w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] max-h-[70vh] md:max-h-[60vh] lg:max-h-[65vh] xl:max-h-[70vh]"
        radius="lg"
        shadow="md"
      >
        <Image
          removeWrapper
          alt="Virtual Bar - telegram story"
          className="z-0 w-full h-full object-cover object-center rounded-lg"
          loading="eager" // Dato che è hero image
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
          src="/images/3-4.jpg"
        />
      </Card>
    </div>
  );
}
