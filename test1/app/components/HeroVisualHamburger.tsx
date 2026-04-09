"use client";

import Image from "next/image";
import { useState } from "react";

const VISUAL_ITEMS = [
  {
    src: "/carts/visual-lift-negro.png",
    label: "Lift negro",
    alt: "Carrito de golf lift negro 4 plazas con defensa y llantas todo terreno",
  },
  {
    src: "/carts/visual-yamaha.png",
    label: "Yamaha 2P",
    alt: "Carrito Yamaha dos plazas negro y beige",
  },
  {
    src: "/carts/visual-ev-blanco.png",
    label: "EV blanco",
    alt: "Carrito eléctrico blanco dos plazas",
  },
  {
    src: "/carts/visual-lvtong.png",
    label: "LVTONG 6P",
    alt: "Shuttle LVTONG seis plazas azul",
  },
  {
    src: "/carts/visual-naranja.png",
    label: "Sport 4P",
    alt: "Carrito sport cuatro plazas naranja y negro",
  },
] as const;

export function HeroVisualHamburger() {
  const [active, setActive] = useState(0);
  const current = VISUAL_ITEMS[active];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 shadow-inner backdrop-blur">
        <div className="relative aspect-[16/10] w-full md:aspect-[4/3]">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority
            className="object-contain p-4 md:p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 text-[11px] text-zinc-500">
          <span className="font-medium uppercase tracking-wide text-zinc-400">
            Vistas rápidas
          </span>
          <span className="hidden sm:inline">Desliza para ver todos →</span>
        </div>
        <div
          className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Seleccionar vista del carrito"
        >
          {VISUAL_ITEMS.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={
                  "group w-[132px] shrink-0 overflow-hidden rounded-2xl border bg-zinc-950/80 p-2 text-left transition " +
                  (selected
                    ? "border-white/40 ring-1 ring-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border-white/10 hover:border-white/25 hover:bg-white/[0.04]")
                }
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-black/40">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="132px"
                  />
                </div>
                <p className="mt-2 px-0.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-zinc-100">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
