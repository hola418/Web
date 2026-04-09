"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/brand/motogolf-logo.png"
              alt="MotoGolf"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">MotoGolf</div>
            <div className="text-xs text-zinc-300">
              Carritos • Refacciones • Servicio
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:5525226360"
            className="hidden h-10 items-center justify-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-500 sm:inline-flex"
          >
            Llamar
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10 sm:hidden"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menú
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[min(420px,92vw)] border-l border-white/10 bg-zinc-950 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">MotoGolf</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold text-zinc-200">Contacto</div>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:5525226360"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-500"
                >
                  Llamar: 5525226360
                </a>
                <a
                  href="mailto:paoliz978@gmail.com"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
                >
                  paoliz978@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
