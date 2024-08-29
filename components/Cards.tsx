"use client";
import { data } from "@/data/index";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/CardsCarousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        About us
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
