"use client";

import { Card, Image, CardBody } from "@heroui/react";

import { title } from "@/components/primitives";

export default function DocsCards() {
  return (
    <div className="w-full h-full flex justify-center">
      <Card
        className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl h-[400px] sm:h-[350px] md:h-[500px] lg:h-[550px] flex items-center justify-center bg-background rounded-lg"
        radius="lg"
        shadow="md"
      >
        <Image
          isZoomed
          removeWrapper
          alt="Virtual Bar Hero"
          className="z-0 w-full h-full object-cover object-center rounded-lg"
          src="/images/confronto quote.jpg"
        />
      </Card>
    </div>
  );
}

export function HelpCard() {
  return (
    <Card
      isBlurred
      className="border-2 border-[#8E1B7F] bg-[#8E1B7F]/20 dark:bg-[#8E1B7F]/50"
      shadow="sm"
    >
      <CardBody>
        <p className="text-black dark:text-white">
          Siamo gli inventori del BREVETTO MARCATORI
          <br />
        </p>
      </CardBody>
    </Card>
  );
}

export function JoinTheCommunity() {
  return (
    <Card
      isBlurred
      className="border-2 border-[#8E1B7F] bg-[#8E1B7F]/20 dark:bg-[#8E1B7F]/50"
      shadow="sm"
    >
      <CardBody>
        <div>
          <span className={title({ size: "md" })}>
            È da qui che nascono le nostre&nbsp;
          </span>
          <span className={title({ color: "violet", size: "md" })}>
            giocate vincenti
          </span>
          <span className={title({ size: "md" })}>
            , dove gli altri non vedono&nbsp;
          </span>
          <span className={title({ color: "violet", size: "md" })}>
            noi colpiamo
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
