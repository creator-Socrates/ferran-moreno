import Link from "next/link";

export const metadata = {
  title: "Testimonios — Ferran Moreno",
  description: "46 testimonios de clientes de distintos paises y profesiones.",
};

const all = [
  {
    name: "Madeleine Cooke",
    role: "World-class English Coaching for Leaders and High Performing Individuals",
    text: "Los cambios que experimente, tanto emocionales como fisicos, iniciaron un proceso que tendra un gran impacto en mi vida. Ferran tiene una profunda experiencia que comparte con generosidad, y al mismo tiempo es increiblemente gentil y de apoyo. Me siento muy afortunada por el notable cambio y crecimiento que siento.",
  },
  {
    name: "Cristina · Ukraine",
    text: "Y ahora estoy muy tranquila. Tan tranquila que no puedo entender por que estaba llorando antes. Siento que muchas de las cosas que estaba contando ya no son verdad. Muy extrano.",
  },
  {
    name: "Marc Pujol · Marketing Manager, Barcelona",
    text: "Ferran lo ha vuelto a hacer. Con dolor en el brazo llegue a la consulta. Sin que me diera tiempo de darle pistas, identifico donde tenia dolor y su origen. Diagnostico clavado. La rotunda interpretacion de mi y quitar el dolor que he arrastrado dos dolorosas semanas, me obliga a interesarme mas en que soy. Parece que no hay misterios para el.",
  },
  {
    name: "Tom Bourdon · Award-winning Travel Photographer · Founder @ Raw Tours",
    text: "La mejora fue increible y la experiencia se sintio como reencontrarse con un viejo amigo.",
  },
  {
    name: "Aisha Al Said · UNICEF",
    text: "Con Ferran aprendo a quitar el ruido interior. Poco a poco, elimino las capas para encontrar silencio. Me esta dando mucho.",
  },
  {
    name: "Jose Luis Pagan · Bombero, Barcelona",
    text: "Pense que quiza no podria continuar con mi trabajo como bombero. En poco tiempo mi cuerpo cambio y mi mente se volvio mas fuerte y conectada. Volvi al deporte con confianza.",
  },
  {
    name: "Maria C · Germany",
    text: "Mi profesora de yoga me recomendo ir a ver a Ferran. Tengo cancer y habia vuelto. Ferran fue muy comprensivo. Me senti mejor al instante. Dias despues me di cuenta de que aquellos pensamientos negativos habian desaparecido. Mi mente estaba clara, limpia, como si la hubieran barrido. Me sentia feliz, normal y viviendo el presente. Gracias, Ferran.",
  },
  {
    name: "Victoria Osa · Barcelona",
    text: "Despues de mi accidente de coche pase por varias rehabilitaciones y diferentes terapias, pero fue cuando me puse en manos de Ferran cuando recupere mi salud y desaparecieron todos mis dolores. Lo recomiendo 100%.",
  },
  {
    name: "Rodrigo Penafiel · Emprendedor · Founder Another Co · Mexico",
    text: "A Ferran lo conoci despues de muchos anos de dolor en la rodilla. Ya a mis 45 la rodilla era muy debil. En una sola sesion note un cambio inmediato. Lo super recomiendo, es un gran especialista. Me sorprendio.",
  },
  {
    name: "Neus Ribes · Trade Distribution · Banco Sabadell · Barcelona",
    text: "Me faltan palabras para explicar lo que hace Ferran. Tiene un don muy especial para interpretar tu cuerpo y tus emociones y hacer un trabajo profundo a todos los niveles. Tras casi cinco anos con distintos terapeutas, encontrar a Ferran fue mi regalo de ese verano. Con su terapia estoy consiguiendo salir de una lesion cronificada y evitar una nueva operacion.",
  },
  {
    name: "Julian Santamaria Hernandez · Digital Performance & Project Manager · Barcelona",
    text: "Despues de 10 anos con dolor lumbar permanente y pensando que viviria siempre con ese dolor, conocer a Ferran y su metodo fue una experiencia indescriptible. Desde la primera sesion el dolor fisico desaparecio. Su trabajo va mas alla de lo fisico, integrando tambien lo emocional.",
  },
  {
    name: "Laura Cabre · Interior Designer · Barcelona",
    text: "En solo dos sesiones logro eliminar un vertigo, un bruxismo y varias dolencias cronicas derivadas de un accidente de moto. Ademas, en cada sesion salgo con una profunda sensacion de paz interior. Solo puedo dar las gracias.",
  },
  {
    name: "Anna Diez · Barcelona",
    text: "Ferran me ha ayudado a recuperar estabilidad, no solo fisica, sino mental y emocional. Me ha ayudado a volver a equilibrar la parte derecha de mi cuerpo con la izquierda, a la vez que me ha hecho darme cuenta de que llevaba lastre acumulado. Ahora me siento serena y tranquila. Me ha sacado brillo.",
  },
  {
    name: "Alicia · Barcelona",
    text: "El trabajo de Ferran es excepcional. Trabaja el cuerpo de una manera unica junto con la parte emocional. Me ha cambiado la postura, los dolores y molestias de antiguas lesiones y cicatrices. Me siento mas radiante y mas segura que nunca.",
  },
  {
    name: "Ruben Torres · Galerista · Barcelona",
    text: "Para definir las sesiones y los resultados que se consiguen con Ferran se deberian crear nuevos terminos. No se muy bien lo que hace, pero funciona. Incluso siendo una persona muy racional, los resultados aparecen tanto a nivel fisico como emocional.",
  },
  {
    name: "Lorena S. T. · Funcionaria · Valencia",
    text: "Las sesiones con Ferran han sido el descubrimiento del verano. Desde la primera sesion note mejora. Mi ansiedad desaparecio, mi postura cambio y me siento mas fuerte y con mas seguridad.",
  },
  {
    name: "Amy K · USA",
    text: "Ferran fue muy amable y muy paciente. Aunque no sentia ningun dolor o malestar particular, el pudo reconocer el desequilibrio en mi forma y me ayudo a solucionarlo. Me senti mas ligera despues de la sesion.",
  },
  {
    name: "Willemijn De Koning · Jewellery Designer · Holanda",
    text: "No se que hizo realmente, pero funciona! Ferran me hizo sentir como una especie de plenitud otra vez, y este sentimiento persiste. Es tan bueno!",
  },
  {
    name: "Philip Thompson · USA",
    text: "Estuvimos de visita por Barcelona unos dias y un amigo nos recomendo a Ferran. Fuimos con nuestros tres hijos y nos vio a todos. Fue absolutamente asombroso. Resolvio mi tendon de Aquiles distendido, trabajo en un viejo problema de espalda y me ayudo a corregir mi postura. Este hombre realmente sabe lo que hace. Hugely recommended.",
  },
  {
    name: "Natalia Miranda · Propietaria · Merceria · Barcelona",
    text: "100% recomendable. Ferran transmite seguridad y confianza. Se siente la pasion por su trabajo y los resultados que consigue con sus clientes.",
  },
  {
    name: "Javier Guerrero · Taxista, Barcelona",
    text: "Pone tu cuerpo como si fuese de un nino. Te corrige malas desviaciones corporales y te ayuda emocionalmente. He visto quitar el lumbago.",
  },
  {
    name: "Claudia Medina · Emprendedora · Girona",
    text: "Parece magia... A mi hija le ayuda un monton. Se acabo el dolor y el estado de cansancio permanente.",
  },
  {
    name: "Jose Jimenez · Funcionario · Barcelona",
    text: "Alinea cuerpo-mente-espiritu sin que tu te des cuenta, ni sepas como. Agradable en el trato y estupendo profesional.",
  },
  {
    name: "Angel Martinez · Conductor de autocares, Barcelona",
    text: "Muy recomendable. Ferran identifico rapidamente la causa de mi problema y lo soluciono.",
  },
  {
    name: "Maria Gorchs · Olost (Barcelona)",
    text: "Las sesiones con Ferran son unicas y siempre utiles. Confia en ti antes que tu misma y te acompana a hacerlo posible, cambiando la perspectiva y el foco.",
  },
  {
    name: "Ester Subira · Profesora · Lluca (Barcelona)",
    text: "No puedo explicar exactamente que hace Ferran, pero despues de sus sesiones mi cuerpo y mi mente se sienten completamente diferentes.",
  },
  {
    name: "Alba Blesa · Logistic Manager · Suiza",
    text: "No solo como terapeuta sino tambien como mentor. Ferran me ayudo a ganar claridad y conciencia emocional.",
  },
  {
    name: "Carla Tozini · Argentina",
    text: "Me alegro mucho de haber encontrado a Ferran! No solo tiene mucho conocimiento y el don de reconectarte con tu yo superior, sino que tambien es increiblemente acogedor y profesional.",
  },
  {
    name: "Ania K · Ucrania",
    text: "Durante las siguientes semanas despues de las sesiones mi vida cambio en muchas dimensiones y muy rapidamente, lo que pense que no era posible. Confio en el al 100%.",
  },
  {
    name: "Monica C · Funcionaria, Barcelona",
    text: "He salido de la sesion sintiendo un cuerpo perfecto y sin dolores. Ferran tiene todo un repertorio de herramientas para trabajar tanto a nivel fisico como emocional.",
  },
  {
    name: "Tommy O'Ceilea · Ireland",
    text: "He estado buscando una solucion para mi problema de espalda desde mi caida hace muchos anos y despues de 2 visitas a Ferran ya estoy viendo los beneficios. El hombre es un genio.",
  },
  {
    name: "Susanna Izquierdo · Barcelona",
    text: "Ferran tiene muchos conocimientos y una gran capacidad para realizar una mirada al cuerpo de forma holistica. El efecto se nota despues de cada sesion.",
  },
  {
    name: "Melissa Wang · Mexico",
    text: "Para algunos eres un mago, para otros un psicologo o un osteopata. En realidad eres muchas cosas a la vez. Cada sesion es una experiencia unica y muy bella. Tienes mi admiracion y mi respeto.",
  },
  {
    name: "Jesus Aragon Valverde · Terapeuta y profesor de Pilates · Cantabria",
    text: "Bonitas sesiones, es dinero bien invertido. Salgo mas calmado, contento y sabiendo un poco mas sobre mi. Me produce una gran fascinacion lo que hace. Si que parece magico.",
  },
  {
    name: "Beatriz Gonzalez · Enfermera · Barcelona",
    text: "Ideas y sentimientos ordenados, cuerpo y mente alineados. La palabra seria... sorprendente. Un placer interactuar con la energia de Ferran.",
  },
  {
    name: "Jordi Vizcaino · Manager · Barcelona",
    text: "Grandisimo terapeuta. Para mi es un mago que ha traido bienestar y salud a mi vida y tambien a mi familia. Con la tecnica Rolfing consigue recolocar el cuerpo y devolver equilibrio fisico, mental y emocional.",
  },
  {
    name: "Jenny · Terapeuta y profesora de Terapia Bowen · Australia",
    text: "Ferran irradia energia y sabiduria. Ha desarrollado una increible caja de herramientas durante mas de dos decadas trabajando alrededor del mundo. Su combinacion de conocimiento, intuicion y presencia ayuda a que el cuerpo y la vida vuelvan a encontrar equilibrio.",
  },
  {
    name: "Bianca Porcar · Mentora en Coherencia Cardiaca (HeartMath) · Barcelona",
    text: "Acabo de dar a luz y gracias a su metodo he notado un cambio radical en mi cuerpo. Lo recomiendo enormemente, en especial a todas aquellas mujeres que acaban de ser mamas.",
  },
  {
    name: "Quim Clark · CEO MQ Events · Barcelona",
    text: "Trabajo bajo mucha presion en el sector de eventos y sali de la sesion literalmente distinto: entre doblado y sali recto, con ganas de comerme el mundo.",
  },
  {
    name: "Mercedes Carneros · Peluquera · Sant Adria del Besos",
    text: "Me he sentido acompanada durante todo el proceso. Aparte de reducir y eliminar el dolor, te hace sentir parte de tu propio proceso de recuperacion.",
  },
  {
    name: "Fran Ascon · Barista · Tornado Coffee Roasters · Barcelona",
    text: "Te ayuda a escuchar tus sentimientos y a equilibrar tu yo interior desde una zona neutra que permite analizar y pausar las emociones, aportando paz y calma al dia a dia. Ademas sali fisicamente descontraido, algo que tambien me sorprendio mucho.",
  },
  {
    name: "Clara Torres · Disenadora · Barcelona",
    text: "Sucede algo en cada sesion, no sabes que pero hay algo que te llevas y sientes. Te ensena y ayuda incondicionalmente, y aquella magia obra su espacio.",
  },
  {
    name: "Laura Ceppelli · Profesora de Pilates · Barcelona",
    text: "Ferran es increible, utiliza su habilidad y experiencia para cambiar vidas de una manera unica y magica. Es un absoluto privilegio trabajar con Ferran y ver los resultados de su increible talento una y otra vez.",
  },
  {
    name: "Bob Schrei · Certified Advanced Rolfer · SourcePoint Therapy · Santa Fe, USA",
    text: "Ferran es un practicante unico y con un talento especial dentro de las artes de sanacion. Esta combinacion de formaciones, junto con sus dones naturales y su buen humor, hacen que trabajar con el sea una experiencia muy especial.",
  },
  {
    name: "Rajesh Ramani · Life Transformation Teacher · Chennai, India",
    text: "Ferran tiene las manos de un sanador y el corazon para conectar y ayudar de verdad. Hoy puedo volver a correr fisicamente, algo que antes no era posible.",
  },
  {
    name: "Juan Jose Moreno · Funcionario · Soria",
    text: "Un metodo muy interesante. Ferran lleva mas de 20 anos formandose y viajando por todo el mundo para completar su aprendizaje. No ha parado! Es muy profesional y se enfoca en ayudar a cada persona a alcanzar sus objetivos, ya sea aliviar un dolor, mejorar el rendimiento o trabajar ciertos pensamientos. Yo no entiendo del todo su trabajo, pero he podido ver todo su potencial. Quizas tambien pueda ayudarte a ti.",
  },
];

export default function Testimonios() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            &larr; Volver
          </Link>
          <div className="text-sm font-medium">Ferran Moreno</div>
          <a
            href="mailto:contact.ferran@proton.me"
            className="bg-neutral-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16 border-b border-neutral-100">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Testimonios</p>
        <h1 className="text-4xl lg:text-5xl font-normal leading-tight mb-6">
          Lo que cambia despues<br />
          <span className="text-neutral-400">de trabajar juntos</span>
        </h1>
        <p className="text-neutral-500 max-w-xl leading-relaxed">
          {all.length} testimonios de clientes de distintos paises y profesiones. Cada uno es real, sin editar.
        </p>
      </section>

      {/* ALL TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border flex flex-col ${
                i === all.length - 1
                  ? "border-neutral-300 bg-neutral-50"
                  : "border-neutral-100 bg-white"
              }`}
            >
              <p className="text-neutral-700 leading-relaxed text-sm flex-1 mb-5">
                "{t.text}"
              </p>
              <div>
                <div className="text-sm font-medium text-neutral-900">{t.name}</div>
                {t.role && (
                  <div className="text-xs text-neutral-400 mt-0.5">{t.role}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-normal mb-6">
            Si el patron sigue ahi, hablemos.
          </h2>
          <a
            href="mailto:contact.ferran@proton.me?subject=Primera%20conversacion&body=Hola%20Ferran,%0A%0ANombre:%0AQue%20quieres%20mejorar%20o%20resolver:%0ADisponibilidad:"
            className="inline-block bg-white text-neutral-900 px-8 py-4 rounded-full text-base hover:bg-neutral-100 transition-colors"
          >
            Solicitar primera conversacion
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">Ferran Moreno · Lluca (Barcelona) · Online</div>
          <div className="text-xs text-neutral-300">© {new Date().getFullYear()} Ferran Moreno</div>
        </div>
      </footer>

    </div>
  );
}
