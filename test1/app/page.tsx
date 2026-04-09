import { HeroVisualHamburger } from "./components/HeroVisualHamburger";

type Cart = {
  id: string;
  nombre: string;
  marca: string;
  modelo: string;
  anio?: string;
  estado: "Nuevo" | "Seminuevo" | "Usado";
  capacidad: string;
  motor: string;
  traccion: string;
  frenos: string;
  suspension: string;
  llantas: string;
  autonomia: string;
  velocidad: string;
  bateria: string;
  tiempoCarga: string;
  garantia: string;
  incluye: string[];
  idealPara: string[];
  disponibilidad: "Disponible" | "Bajo pedido" | "Agotado";
  precioDesde: string;
  imagen: string;
  menuTitulo: string;
};

const carts: Cart[] = [
  {
    id: "mg-1",
    nombre: "Carrito Premium 2 Plazas",
    marca: "MotoGolf",
    modelo: "MG-P2",
    anio: "2026",
    estado: "Seminuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 5–7.5 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Levantada (lift) + amortiguación reforzada",
    llantas: '14" todo terreno',
    autonomia: "40–55 km",
    velocidad: "28–32 km/h",
    bateria: "48V (litio opcional)",
    tiempoCarga: "4–6 h",
    garantia: "90 días (mecánico)",
    incluye: ["Parabrisas", "Techo", "Luces LED", "Rines", "Cargador"],
    idealPara: ["Uso rudo", "Golf", "Traslados premium"],
    disponibilidad: "Disponible",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-1.png",
    menuTitulo: "Premium 2P",
  },
  {
    id: "mg-2",
    nombre: "Carrito Premium 2 Plazas (Rojo)",
    marca: "MotoGolf",
    modelo: "MG-P2R",
    anio: "2026",
    estado: "Usado",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 5–7.5 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + amortiguación reforzada",
    llantas: '14" todo terreno',
    autonomia: "35–50 km",
    velocidad: "28–32 km/h",
    bateria: "48V (plomo/gel o litio)",
    tiempoCarga: "4–8 h",
    garantia: "30 días (mecánico)",
    incluye: ["Parabrisas", "Asientos premium", "Defensa", "Cargador"],
    idealPara: ["Imagen premium", "Resorts", "Uso diario"],
    disponibilidad: "Disponible",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-2.png",
    menuTitulo: "Rojo",
  },
  {
    id: "mg-3",
    nombre: "Carrito Premium 2 Plazas (Negro)",
    marca: "MotoGolf",
    modelo: "MG-P2B",
    anio: "2026",
    estado: "Nuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 5–7.5 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + amortiguación premium",
    llantas: '14" todo terreno',
    autonomia: "40–60 km",
    velocidad: "28–35 km/h",
    bateria: "48V (litio recomendado)",
    tiempoCarga: "4–6 h",
    garantia: "1 año (nuevo)",
    incluye: ["Luces LED", "Techo", "Parabrisas", "Cargador inteligente"],
    idealPara: ["Golf", "Terracería", "Uso nocturno (LED)"],
    disponibilidad: "Bajo pedido",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-3.png",
    menuTitulo: "Negro",
  },
  {
    id: "mg-4",
    nombre: "Carrito Premium 2 Plazas (Azul)",
    marca: "MotoGolf",
    modelo: "MG-P2AZ",
    anio: "2025",
    estado: "Seminuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 4–6 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + reforzada",
    llantas: '14" todo terreno',
    autonomia: "35–55 km",
    velocidad: "28–32 km/h",
    bateria: "48V (plomo/gel o litio)",
    tiempoCarga: "4–8 h",
    garantia: "90 días (mecánico)",
    incluye: ["Defensa", "Rines", "Parabrisas", "Cargador"],
    idealPara: ["Fraccionamientos", "Traslados", "Imagen deportiva"],
    disponibilidad: "Disponible",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-4.png",
    menuTitulo: "Azul",
  },
  {
    id: "mg-5",
    nombre: "Carrito Premium 2 Plazas (Negro Sport)",
    marca: "MotoGolf",
    modelo: "MG-SP",
    anio: "2025",
    estado: "Seminuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 4–6 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + reforzada",
    llantas: '14" todo terreno',
    autonomia: "35–50 km",
    velocidad: "28–32 km/h",
    bateria: "48V (plomo/gel o litio)",
    tiempoCarga: "4–8 h",
    garantia: "90 días (mecánico)",
    incluye: ["Defensa", "Parabrisas", "Techo", "Cargador"],
    idealPara: ["Golf", "Uso rudo", "Imagen sport"],
    disponibilidad: "Disponible",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-5.png",
    menuTitulo: "Sport",
  },
  {
    id: "mg-6",
    nombre: "Carrito Premium 2 Plazas (Blanco)",
    marca: "MotoGolf",
    modelo: "MG-W",
    anio: "2025",
    estado: "Seminuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 4–6 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + reforzada",
    llantas: '14" todo terreno',
    autonomia: "35–55 km",
    velocidad: "28–32 km/h",
    bateria: "48V (plomo/gel o litio)",
    tiempoCarga: "4–8 h",
    garantia: "90 días (mecánico)",
    incluye: ["Luces LED", "Parabrisas", "Techo", "Cargador"],
    idealPara: ["Resorts", "Traslados", "Imagen premium"],
    disponibilidad: "Disponible",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-6.png",
    menuTitulo: "Blanco",
  },
  {
    id: "mg-7",
    nombre: "Carrito Premium 2 Plazas (Blanco Sport)",
    marca: "MotoGolf",
    modelo: "MG-WS",
    anio: "2026",
    estado: "Nuevo",
    capacidad: "2 plazas",
    motor: "Eléctrico AC 5–7.5 kW",
    traccion: "RWD (trasera)",
    frenos: "Disco + estacionamiento",
    suspension: "Lift + premium",
    llantas: '14" todo terreno',
    autonomia: "40–60 km",
    velocidad: "28–35 km/h",
    bateria: "48V (litio recomendado)",
    tiempoCarga: "4–6 h",
    garantia: "1 año (nuevo)",
    incluye: ["Luces LED", "Parabrisas", "Techo", "Cargador inteligente"],
    idealPara: ["Golf", "Uso rudo", "Entrega inmediata"],
    disponibilidad: "Bajo pedido",
    precioDesde: "$ MXN (cotizar)",
    imagen: "/carts/catalogo-7.png",
    menuTitulo: "Blanco S",
  },
];

export default function Home() {
  return (
    <div id="inicio" className="w-full">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(239,68,68,0.18),transparent_40%),radial-gradient(900px_circle_at_85%_20%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,#09090b,rgba(9,9,11,0.75),#09090b)]" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
              Estilo premium • Catálogo MotoGolf
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Carritos de golf con estilo premium, listos para rodar.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-zinc-300">
              Inspirado en una vibra tipo CUPRA: diseño oscuro, detalles
              “performance” y ficha técnica clara. Cotiza por teléfono o correo
              y te asesoramos según tu uso.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#catalogo"
                className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-semibold text-white hover:bg-red-500"
              >
                Ver catálogo
              </a>
              <a
                href="tel:5525226360"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Llamar: 5525226360
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Entrega</div>
                <div className="text-xs text-zinc-300">
                  Coordinamos envío o recolección
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Refacciones</div>
                <div className="text-xs text-zinc-300">
                  Baterías, cargadores y accesorios
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Servicio</div>
                <div className="text-xs text-zinc-300">
                  Mantenimiento, diagnóstico y upgrades
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-red-500/15 via-white/5 to-transparent blur-2xl" />
            <HeroVisualHamburger />
          </div>
        </div>
      </section>

      <section id="catalogo" className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Catálogo de carritos
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-zinc-300">
            7 modelos con fotos reales y ficha técnica ampliada. Si te interesa
            uno, llámanos o mándanos correo y lo armamos a tu gusto (batería,
            iluminación, rines, defensas y accesorios).
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold tracking-wide text-zinc-300">
              Menú de modelos
            </div>
            <div className="text-xs text-zinc-500">Desliza →</div>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {carts.map((cart) => (
              <a
                key={`menu-${cart.id}`}
                href={`#${cart.id}`}
                className="group relative w-[170px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label={`Ir a ${cart.nombre}`}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(500px_circle_at_20%_0%,rgba(239,68,68,0.12),transparent_45%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-xl bg-black/20">
                  <img
                    src={cart.imagen}
                    alt={cart.nombre}
                    className="aspect-[16/10] w-full object-cover opacity-95 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-200">
                    {cart.menuTitulo}
                  </div>
                  <div className="text-[11px] text-zinc-400">{cart.modelo}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carts.map((cart) => (
            <article
              key={cart.id}
              id={cart.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="relative">
                <img
                  src={cart.imagen}
                  alt={cart.nombre}
                  className="aspect-[16/10] w-full bg-black/20 object-cover"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {cart.estado}
                  </span>
                  <span className="rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {cart.disponibilidad}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {cart.nombre}
                    </h3>
                    <p className="text-xs text-zinc-300">
                      {cart.marca} • {cart.modelo}
                      {cart.anio ? ` • ${cart.anio}` : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zinc-300">
                      Desde
                    </div>
                    <div className="text-sm font-semibold">{cart.precioDesde}</div>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <dt className="text-[11px] font-medium text-zinc-300">
                      Capacidad
                    </dt>
                    <dd className="text-sm font-semibold">{cart.capacidad}</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <dt className="text-[11px] font-medium text-zinc-300">
                      Autonomía
                    </dt>
                    <dd className="text-sm font-semibold">{cart.autonomia}</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <dt className="text-[11px] font-medium text-zinc-300">
                      Velocidad
                    </dt>
                    <dd className="text-sm font-semibold">{cart.velocidad}</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <dt className="text-[11px] font-medium text-zinc-300">
                      Batería
                    </dt>
                    <dd className="text-sm font-semibold">{cart.bateria}</dd>
                  </div>
                </dl>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white">
                    Ficha rápida
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-zinc-200">
                    <div>
                      <span className="text-zinc-400">Motor:</span> {cart.motor}
                    </div>
                    <div>
                      <span className="text-zinc-400">Tracción:</span>{" "}
                      {cart.traccion}
                    </div>
                    <div>
                      <span className="text-zinc-400">Frenos:</span>{" "}
                      {cart.frenos}
                    </div>
                    <div>
                      <span className="text-zinc-400">Suspensión:</span>{" "}
                      {cart.suspension}
                    </div>
                    <div>
                      <span className="text-zinc-400">Llantas:</span>{" "}
                      {cart.llantas}
                    </div>
                    <div>
                      <span className="text-zinc-400">Carga:</span>{" "}
                      {cart.tiempoCarga}
                    </div>
                    <div className="col-span-2">
                      <span className="text-zinc-400">Garantía:</span>{" "}
                      {cart.garantia}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white">
                    Incluye
                  </div>
                  <ul className="mt-2 grid list-none grid-cols-2 gap-x-3 gap-y-1 text-xs text-zinc-200">
                    {cart.incluye.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white">
                    Ideal para
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cart.idealPara.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="tel:5525226360"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Cotizar por teléfono
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Ver contacto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
