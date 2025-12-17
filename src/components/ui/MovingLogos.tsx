"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


import pagueMenos from "@/assets/Logos/P_menos.png";
import lauto from "@/assets/Logos/Lauto.png";
import dupar from "@/assets/Logos/Dupar.png";
import inovation from "@/assets/Logos/Inovation.png";
import ninna from "@/assets/Logos/Ninna.png";
import prefeitura from "@/assets/Logos/Prefeitura.png";
import ufc from "@/assets/Logos/Ufc.png";
import jacinto from "@/assets/Logos/Jacinto.png";
import biox from "@/assets/Logos/Biox.png";
import stone from "@/assets/Logos/Stone.png";
import sumitomo from "@/assets/Logos/Sumitomo.png";
import pagueMenosLab from "@/assets/Logos/P_menosLab.png";
import japediu from "@/assets/Logos/Japediu.png";
import avanz from "@/assets/Logos/Avanz.png";
import mdias from "@/assets/Logos/M_dias.png";
import senai from "@/assets/Logos/Senai.png";


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
