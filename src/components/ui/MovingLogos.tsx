"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

import pagueMenos from "@/assets/Logos/P_menos.webp";
import lauto from "@/assets/Logos/Lauto.webp";
import dupar from "@/assets/Logos/Dupar.webp";
import inovation from "@/assets/Logos/Inovation.webp";
import ninna from "@/assets/Logos/Ninna.webp";
import prefeitura from "@/assets/Logos/Prefeitura.webp";
import ufc from "@/assets/Logos/Ufc.webp";
import jacinto from "@/assets/Logos/Jacinto.webp";
import biox from "@/assets/Logos/Biox.webp";
import stone from "@/assets/Logos/Stone.webp";
import sumitomo from "@/assets/Logos/Sumitomo.webp";
import pagueMenosLab from "@/assets/Logos/P_menosLab.webp";
import japediu from "@/assets/Logos/Japediu.webp";
import avanz from "@/assets/Logos/Avanz.webp";
import mdias from "@/assets/Logos/M_dias.webp";
import senai from "@/assets/Logos/Senai.webp";

const partners = [
  { image: pagueMenos, alt: "Pague Menos" },
  { image: lauto, alt: "L'auto Cargo" },
  { image: dupar, alt: "Dupar Participações" },
  { image: inovation, alt: "Inovation IT" },
  { image: ninna, alt: "Ninna Hub" },
  { image: prefeitura, alt: "Prefeitura" },
  { image: ufc, alt: "Universidade Federal do Ceará" },
  { image: jacinto, alt: "Jacinto Supermercado" },
  { image: biox, alt: "Biox" },
  { image: stone, alt: "Stone" },
  { image: sumitomo, alt: "Sumitomo Chemical" },
  { image: pagueMenosLab, alt: "Pague Menos Lab" },
  { image: japediu, alt: "Já Pediu" },
  { image: avanz, alt: "Avanz" },
  { image: mdias, alt: "M. Dias Branco" },
  { image: senai, alt: "Instituto SENAI" },
];

export function InfiniteMovingCardsDemo() {
  return (
    <section className="relative w-full p bg-white dark:bg-black overflow-hidden ">
      <div className=" ">
        <InfiniteMovingCards
          items={partners}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}
