import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotoGolf | Catálogo de carritos",
  description:
    "MotoGolf: catálogo de carritos con detalles, disponibilidad y contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <Header />

        <main className="flex flex-1 flex-col">{children}</main>

        <footer
          id="contacto"
          className="border-t border-white/10 bg-zinc-950"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/brand/motogolf-logo.png"
                    alt="MotoGolf"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight">
                    MotoGolf
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Venta de carritos, refacciones y servicio. Atención por
                    teléfono o correo.
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="tel:5525226360"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-500"
                    >
                      5525226360
                    </a>
                    <a
                      href="mailto:paoliz978@gmail.com"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      paoliz978@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">Ubicación</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Tlalpan • Pedregal • CDMX
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tlalpan%20Pedregal%20CDMX"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Ver en Google Maps
                  </a>
                  <a
                    href="#catalogo"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    Volver al catálogo
                  </a>
                </div>
                <div className="mt-4 text-xs leading-5 text-zinc-400">
                  Horario y dirección exacta se comparten al confirmar tu visita
                  o entrega.
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-zinc-500">
              © {new Date().getFullYear()} MotoGolf. Todos los derechos
              reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
