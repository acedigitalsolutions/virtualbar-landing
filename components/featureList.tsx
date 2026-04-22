"use client";

import { CheckmarkIcon } from "@/components/icons";

const features = [
  "Statistiche esclusive raccolte da un nostro insider, grazie a lui accediamo a dati spesso nascosti",
  "Non i classici dati che trovi su Google o ChatGPT",
  "Analisi realizzate su un server privato",
  "Pronostici e tips completamente gratuiti",
];

const FeatureList = () => (
  <div className="mt-4 text-foreground-600 font-medium space-y-3">
    {features.map((feature) => (
      <div key={feature} className="flex gap-x-3 items-center">
        <CheckmarkIcon className="text-green-500 flex-shrink-0" size={18} />
        <span>{feature}</span>
      </div>
    ))}
  </div>
);

export default FeatureList;
