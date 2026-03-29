import Link from "next/link";

const featuredTestimonials = [
  {
    name: "Madeleine Cooke",
    role: "World-class English Coaching for Leaders and High Performing Individuals",
    text: "Los cambios que experimente, tanto emocionales como fisicos, iniciaron un proceso que tendra un gran impacto en mi vida. Ferran tiene una profunda experiencia que comparte con generosidad, y al mismo tiempo es increiblemente gentil y de apoyo.",
  },
  {
    name: "Tom Bourdon",
    role: "Award-winning Travel Photographer · Founder @ Raw Tours",
    text: "La mejora fue increible. He estado buscando una solucion desde hace anos — en dos visitas ya estoy viendo los resultados. La experiencia se sintio como reencontrarse con un viejo amigo.",
  },
  {
    name: "Marc Pujol",
    role: "Marketing Manager, Barcelona",
    text: "Sin que me diera tiempo de darle pistas, identifico donde tenia dolor y su origen. Diagnostico clavado. Parece que no hay misterios para el. La rotunda interpretacion de mi y quitar el dolor que arrastre dos semanas me obliga a interesarme mas en que soy.",
  },
  {
    name: "Quim Clark",
    role: "CEO MQ Events · Barcelona",
    text: "Pocos somos conscientes de la importancia de tener a un profesional que te ayude con como te sientes. Ferran es mucho mas que eso. Entre doblado y sali recto, con ganas de comerme el mundo.",
  },
  {
    name: "Jose Luis Pagan",
    role: "Bombero, Barcelona",
    text: "Pense que quiza no podria continuar con mi trabajo. En poco tiempo mi cuerpo cambio y mi mente se volvio mas fuerte y conectada. Volvi al deporte con confianza.",
  },
  {
    name: "Aisha Al Said",
    role: "UNICEF",
    text: "Con Ferran aprendo a quitar el ruido interior. Poco a poco, elimino las capas para encontrar silencio. Me esta dando mucho.",
  },
];

const services = [
  {
    tag: "Primera sesion",
    title: "Sesion inicial",
    duration: "2 horas",
    price: "360 EUR",
    description: "Una sesion completa para leer el sistema, identificar el patron real y hacer un primer trabajo profundo. Incluye evaluacion estructural, intervencion y orientacion para continuar.",
    cta: "Reservar sesion inicial",
    featured: false,
  },
  {
    tag: "Seguimiento",
    title: "Sesion individual",
    duration: "1 hora",
    price: "180 EUR",
    description: "Sesion de seguimiento presencial u online. Cada encuentro se adapta a tu estado fisico, emocional y energetico del momento.",
    cta: "Reservar sesion",
    featured: false,
  },
  {
    tag: "Proceso profundo",
    title: "Programa de 6 meses",
    duration: "6 meses",
    price: "2.700 EUR",
    description: "El proceso mas completo. Trabajo sostenido en el tiempo para reorganizar el sistema desde la raiz. Incluye sesiones, seguimiento y acompanamiento entre sesiones.",
    cta: "Solicitar informacion",
    featured: true,
  },
];

const goodFor = [
  "Llevas tiempo con el mismo problema aunque hayas probado varias terapias.",
  "Notas que lo fisico y lo mental estan conectados — y nadie ha trabajado eso junto.",
  "Tienes alta exigencia personal o profesional y tu cuerpo ya no sigue el ritmo.",
  "Intuyes que el problema es de sistema, no de pieza.",
  "Buscas un cambio real, no alivio temporal.",
];

const notFor = [
  "Quieres quitar un sintoma puntual sin ver el patron que lo genera.",
  "Buscas que te hagan algo sin implicarte en el proceso.",
  "Preguntas el precio antes de entender que cambia.",
  "Prefieres acumular tratamientos en lugar de reorganizar desde la raiz.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <div className="text-base font-medium tracking-tight">Ferran Moreno</div>
            <div className="text-xs text-neutral-400 tracking-widest uppercase mt-0.5">Lluca · Barcelona · Online</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-500">
            <a href="#metodo" className="hover:text-neutral-900 transition-colors">Metodo</a>
            <a href="#para-quien" className="hover:text-neutral-900 transition-colors">Para quien</a>
            <a href="#testimonios" className="hover:text-neutral-900 transition-colors">Testimonios</a>
            <a href="#servicios" className="hover:text-neutral-900 transition-colors">Servicios</a>
          </nav>
          <a
            href="mailto:contact.ferran@proton.me?subject=Primera%20conversacion&body=Hola%20Ferran,%0A%0ANombre:%0AQue%20quieres%20mejorar%20o%20resolver:%0ADisponibilidad:"
            className="bg-neutral-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
            Reorganizacion estructural · Trabajo corporal · Regulacion del sistema nervioso
          </p>
          <h1 className="text-5xl lg:text-7xl font-normal leading-tight tracking-tight text-neutral-900 mb-8">
            El cuerpo no falla.{" "}
            <span className="text-neutral-400">Se desorganiza.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-6 max-w-2xl">
            Trabajo sobre el sistema. No sobre el sintoma.
          </p>
          <p className="text-lg text-neutral-500 leading-relaxed mb-12 max-w-xl">
            La mayoria de personas que llegan aqui ya han probado de todo.
            El patron sigue ahi. Ese es exactamente el punto de partida.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact.ferran@proton.me?subject=Primera%20conversacion&body=Hola%20Ferran,%0A%0ANombre:%0AQue%20quieres%20mejorar%20o%20resolver:%0ADisponibilidad:"
              className="bg-neutral-900 text-white px-8 py-4 rounded-full text-base hover:bg-neutral-700 transition-colors"
            >
              Solicitar primera conversacion
            </a>
            <a
              href="#metodo"
              className="border border-neutral-200 text-neutral-700 px-8 py-4 rounded-full text-base hover:border-neutral-400 transition-colors"
            >
              Ver como trabajo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-16 border-t border-neutral-100">
          {[
            { n: "20+", label: "anos de experiencia" },
            { n: "45+", label: "testimonios de clientes" },
            { n: "1:1", label: "trabajo personalizado" },
            { n: "Online", label: "y presencial" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-normal text-neutral-900">{s.n}</div>
              <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Metodo</p>
              <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-8">
                Una lectura precisa<br />
                <span className="text-neutral-400">del sistema completo</span>
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                No aplico tecnicas como fin. La tecnica es una herramienta dentro de una lectura global.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Cada sesion empieza leyendo como se organiza el cuerpo — su estructura, su regulacion, sus interferencias energeticas. La intervencion surge de esa lectura, no de un protocolo estandar.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { n: "01", title: "Estructura", desc: "Leer el cuerpo como sistema organizado, no como piezas separadas." },
                { n: "02", title: "Regulacion", desc: "Devolver margen al sistema nervioso para salir de la compensacion cronica." },
                { n: "03", title: "Energia", desc: "Limpiar interferencias y recuperar eje interno." },
                { n: "04", title: "Integracion", desc: "Llevar el cambio a decisiones, habitos y presencia real." },
              ].map((p) => (
                <div key={p.n} className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                  <div className="text-xs text-neutral-600 mb-2">{p.n}</div>
                  <div className="text-white font-medium mb-1">{p.title}</div>
                  <div className="text-neutral-400 text-sm leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-20 pt-16 border-t border-neutral-800">
            {[
              { title: "Leer el sistema", text: "Observar como se organiza el cuerpo, que compensa y que esta pidiendo reorganizacion real." },
              { title: "Intervenir con precision", text: "Trabajo manual, regulacion y lectura energetica para crear un cambio concreto." },
              { title: "Integrar el nuevo orden", text: "Hacer que el cambio se sostenga en tu vida, tu ritmo y tu forma de habitar el cuerpo." },
            ].map((s) => (
              <div key={s.title} className="pt-6">
                <div className="text-neutral-600 text-sm mb-3">→</div>
                <div className="text-white font-medium mb-2">{s.title}</div>
                <div className="text-neutral-400 text-sm leading-relaxed">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIEN */}
      <section id="para-quien" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Para quien es</p>
            <h2 className="text-3xl font-normal mb-10 leading-tight">
              Personas para quienes<br />este trabajo tiene sentido
            </h2>
            <div className="space-y-3">
              {goodFor.map((item) => (
                <div key={item} className="flex gap-4 items-start py-4 border-b border-neutral-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 flex-shrink-0" />
                  <p className="text-neutral-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Para quien no es</p>
            <h2 className="text-3xl font-normal mb-10 leading-tight">
              Casos donde este trabajo<br />no es lo que buscas
            </h2>
            <div className="space-y-3">
              {notFor.map((item) => (
                <div key={item} className="flex gap-4 items-start py-4 border-b border-neutral-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2.5 flex-shrink-0" />
                  <p className="text-neutral-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-neutral-50 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 leading-relaxed">
                Este filtro protege el proceso. El trabajo requiere implicacion real — no solo recibir, sino observar, integrar y comprometerse con el cambio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Testimonios</p>
              <h2 className="text-4xl font-normal leading-tight">
                Lo que cambia despues<br />de trabajar juntos
              </h2>
            </div>
            <p className="hidden lg:block text-sm text-neutral-400 text-right">
              45+ testimonios<br />de clientes de distintos paises
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {featuredTestimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-neutral-100">
                <p className="text-neutral-700 leading-relaxed mb-6 text-base">"{t.text}"</p>
                <div>
                  <div className="text-sm font-medium text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {featuredTestimonials.slice(3).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-neutral-100">
                <p className="text-neutral-700 leading-relaxed mb-6 text-base">"{t.text}"</p>
                <div>
                  <div className="text-sm font-medium text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/testimonios"
            className="text-sm text-neutral-500 border border-neutral-200 px-6 py-3 rounded-full hover:border-neutral-400 transition-colors"
          >
            Ver todos los testimonios →
          </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Servicios</p>
        <h2 className="text-4xl font-normal mb-4 leading-tight max-w-xl">
          Formatos de trabajo
        </h2>
        <p className="text-neutral-500 mb-16 max-w-xl leading-relaxed">
          Cada proceso se adapta a lo que el sistema necesita. Para un cambio real y duradero, el trabajo en profundidad requiere consistencia — no sesiones aisladas.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-8 border flex flex-col ${
                s.featured
                  ? "bg-neutral-950 text-white border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
            >
              <div className={`text-xs uppercase tracking-widest mb-6 ${s.featured ? "text-neutral-500" : "text-neutral-400"}`}>
                {s.tag}
              </div>
              <div className={`text-xl font-medium mb-1 ${s.featured ? "text-white" : "text-neutral-900"}`}>
                {s.title}
              </div>
              <div className="text-sm text-neutral-400 mb-6">{s.duration}</div>
              <div className={`text-3xl font-normal mb-6 ${s.featured ? "text-white" : "text-neutral-900"}`}>
                {s.price}
              </div>
              <p className={`text-sm leading-relaxed mb-8 flex-1 ${s.featured ? "text-neutral-400" : "text-neutral-500"}`}>
                {s.description}
              </p>
              <a
                href="mailto:contact.ferran@proton.me"
                className={`text-center text-sm py-3 px-6 rounded-full transition-colors ${
                  s.featured
                    ? "bg-white text-neutral-900 hover:bg-neutral-100"
                    : "border border-neutral-200 text-neutral-700 hover:border-neutral-400"
                }`}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-neutral-50 rounded-2xl p-6 text-sm text-neutral-500 leading-relaxed max-w-2xl">
          Primera conversacion de 15 minutos sin coste para entender que esta pasando y ver si este trabajo tiene sentido para ti.{" "}
          <a href="mailto:contact.ferran@proton.me" className="text-neutral-900 underline underline-offset-2">
            Escribeme para coordinar.
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Primera conversacion</p>
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-8">
              Si el patron sigue ahi<br />
              <span className="text-neutral-400">hablemos.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg">
              Presencial en Lluca (Barcelona) o online en cualquier parte del mundo. 15 minutos para entender si este trabajo tiene sentido para ti.
            </p>
            <a
              href="mailto:contact.ferran@proton.me?subject=Primera%20conversacion&body=Hola%20Ferran,%0A%0ANombre:%0AQue%20quieres%20mejorar%20o%20resolver:%0ADisponibilidad:"
              className="inline-block bg-white text-neutral-900 px-8 py-4 rounded-full text-base hover:bg-neutral-100 transition-colors"
            >
              contact.ferran@proton.me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-medium text-neutral-900">Ferran Moreno</div>
            <div className="text-xs text-neutral-400 mt-1">Reorganizacion estructural · Lluca (Barcelona) · Online</div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-neutral-400">
            <a href="mailto:contact.ferran@proton.me" className="hover:text-neutral-700 transition-colors">contact.ferran@proton.me</a>
            <a href="https://www.instagram.com/ferran__moreno_" target="_blank" rel="noreferrer" className="hover:text-neutral-700 transition-colors">@ferran__moreno_</a>
          </div>
          <div className="text-xs text-neutral-300">© {new Date().getFullYear()} Ferran Moreno</div>
        </div>
      </footer>

    </div>
  );
}
