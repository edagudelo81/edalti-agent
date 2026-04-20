import { Link } from "react-router-dom";
import {
  MessageCircle, Calendar, Clock, Bot, BellRing, Users, ShieldCheck,
  ArrowRight, Sparkles, Check, ChevronDown, MailQuestion, PhoneCall, CalendarX,
} from "lucide-react";
import { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import WhatsAppMockup from "@/components/site/WhatsAppMockup";

const stats = [
  { value: "100%", label: "de pacientes atendidos" },
  { value: "24/7", label: "sin interrupciones" },
  { value: "48h", label: "para estar activo" },
  { value: "0", label: "conocimientos técnicos" },
];

const problems = [
  {
    icon: MailQuestion,
    title: "Pacientes sin respuesta",
    desc: "Tu WhatsApp no puede atender a las 2am. El paciente escribe, no obtiene respuesta y llama a otra clínica.",
  },
  {
    icon: PhoneCall,
    title: "Confirmaciones manuales",
    desc: "Horas al día llamando para confirmar citas que igual no se cumplen. Tiempo que debería ir a tus pacientes.",
  },
  {
    icon: CalendarX,
    title: "Ausentismo sin aviso",
    desc: "El paciente simplemente no llegó. Tu agenda tiene huecos vacíos que cuestan dinero real.",
  },
];

const features = [
  {
    icon: Bot,
    title: "Conversaciones naturales con IA",
    desc: "Tu agente entiende lenguaje natural, responde con tono humano y aprende del contexto de tu negocio.",
  },
  {
    icon: Calendar,
    title: "Agenda en tiempo real",
    desc: "Sincroniza con Google Calendar, Calendly y tus sistemas. Cero choques de horarios.",
  },
  {
    icon: BellRing,
    title: "Recordatorios automáticos",
    desc: "Confirma asistencia y reduce los 'no-shows' hasta en un 85% con mensajes inteligentes.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    desc: "Tus clientes agendan a las 11pm un domingo. Tú duermes tranquilo.",
  },
  {
    icon: Users,
    title: "AI + humano: lo mejor de los dos mundos",
    desc: "El 92% de las citas se gestionan solas. Cuando el paciente lo necesita, el agente transfiere la conversación a tu equipo con todo el contexto ya visible — el humano continúa donde el AI paró, sin que el paciente tenga que repetir nada.",
  },
  {
    icon: ShieldCheck,
    title: "100% seguro",
    desc: "API oficial de WhatsApp Business. Tus datos cifrados y protegidos en Colombia.",
  },
];

const steps = [
  {
    n: "01",
    title: "Conectamos tu WhatsApp",
    desc: "Activamos la API de WhatsApp Business en tu número actual. Sin cambios para tus clientes.",
  },
  {
    n: "02",
    title: "Entrenamos tu agente",
    desc: "Personalizamos el agente con tus servicios, horarios, ubicación y tono de marca.",
  },
  {
    n: "03",
    title: "Empieza a vender mientras duermes",
    desc: "Tu agente atiende, agenda y recuerda citas automáticamente desde el día 1.",
  },
];

const industries = [
  "Consultorios médicos",
  "Centros de estética y spa",
  "Clínicas dentales",
  "Salones y barberías",
];

const testimonials = [
  {
    quote: "Pasamos de perder 30% de citas por no responder a tiempo, a tener la agenda llena. El agente trabaja mejor que un recepcionista.",
    name: "María Camila R.",
    role: "Dueña, Clínica Dental Bogotá",
  },
  {
    quote: "Lo conectamos un viernes. El sábado teníamos 14 citas agendadas sin que nadie en el equipo levantara un dedo.",
    name: "Andrés Gómez",
    role: "Gerente, Centro Estético Lumina · Medellín",
  },
  {
    quote: "Recuperamos 12 horas a la semana del equipo. Ahora se enfocan en atender, no en agendar.",
    name: "Laura Pinzón",
    role: "Spa Wellness, Cali",
  },
];

const faqs = [
  {
    q: "¿Funciona con mi número de WhatsApp actual?",
    a: "Sí. Migramos tu número a la API oficial de WhatsApp Business sin que tus clientes noten el cambio. Conservas tu historial y contactos.",
  },
  {
    q: "¿Cuánto tiempo toma implementarlo?",
    a: "Entre 3 y 7 días hábiles dependiendo de la complejidad. Incluye configuración, entrenamiento del agente y pruebas.",
  },
  {
    q: "¿El agente puede atender en otros idiomas?",
    a: "Sí, el agente entiende español, inglés y otros idiomas. Puedes definir el idioma principal según tu mercado.",
  },
  {
    q: "¿Qué pasa si un cliente quiere hablar con una persona?",
    a: "El agente detecta automáticamente cuándo escalar a un humano y transfiere la conversación a tu equipo sin fricciones.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nosotros nos encargamos de todo: integración, entrenamiento y mantenimiento. Tú solo recibes las citas en tu calendario.",
  },
];

const Inicio = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="container-edalti pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              Nuevo • IA conversacional para PyMEs en Colombia
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Tu agenda se llena sola.</span>
              <span className="block mt-3 text-accent">
                Tu agente de IA responde, agenda y recuerda por WhatsApp, las 24 horas.
              </span>
            </h1>
            <p className="mt-6 text-lg text-body leading-relaxed max-w-xl">
              Especializado para consultorios médicos, centros de estética, clínicas dentales y salones de belleza en Colombia. Sin conocimientos técnicos — nosotros configuramos todo en 48 horas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20una%20demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar demo gratis
              </a>
              <Link
                to="/precios"
                className="inline-flex items-center justify-center gap-2 bg-background hover:bg-secondary border border-border text-foreground font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Ver precios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Sin tarjeta de crédito
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Implementación en 7 días
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Soporte en español
              </span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <WhatsAppMockup />
          </div>
        </div>

        {/* Stats */}
        <div className="container-edalti pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-6 lg:p-8 text-center">
                <div className="text-2xl lg:text-4xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs lg:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container-edalti">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">El problema</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
              ¿Cuántas citas estás perdiendo hoy?
            </h2>
            <p className="mt-5 text-body leading-relaxed">
              Cada WhatsApp sin responder es una cita — y un ingreso — que se va a la competencia.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-background rounded-2xl p-7 lg:p-8 border border-border shadow-card hover:border-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <p.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="caracteristicas" className="py-20 lg:py-28 bg-secondary">
        <div className="container-edalti">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Características</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
              Todo lo que necesitas para vender mientras duermes.
            </h2>
            <p className="mt-4 text-body">
              Una plataforma completa diseñada para negocios que viven de las citas.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-6 lg:p-7 shadow-card border border-border hover:border-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28">
        <div className="container-edalti">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cómo funciona</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Listo en 3 pasos simples</h2>
            <p className="mt-4 text-body">De cero a agente funcionando en menos de una semana.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="bg-background rounded-2xl p-7 border border-border h-full">
                  <span className="text-5xl font-bold text-primary/15">{s.n}</span>
                  <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-body text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container-edalti text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Para tu industria</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold">Diseñado para negocios que viven de citas</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <span
                key={i}
                className="bg-background border border-border text-sm font-medium px-4 py-2.5 rounded-full text-foreground hover:border-primary/40 transition-colors"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="container-edalti">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Casos reales</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
              Negocios colombianos que ya están vendiendo en piloto automático.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-background rounded-2xl p-7 border border-border shadow-card flex flex-col"
              >
                <blockquote className="text-body leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-secondary">
        <div className="container-edalti max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Preguntas frecuentes</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Resolvemos tus dudas</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-body text-sm leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-edalti">
          <div
            className="rounded-3xl p-10 lg:p-16 text-center text-primary-foreground relative overflow-hidden"
            style={{ background: "var(--gradient-cta)" }}
          >
            <div aria-hidden className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px, 24px 24px",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                Cada minuto sin responder es dinero que se pierde.
              </h2>
              <p className="mt-5 text-primary-foreground/90 text-lg max-w-xl mx-auto">
                Activa tu agente IA en menos de una semana y empieza a llenar tu agenda.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20una%20demo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-background text-primary hover:bg-secondary font-semibold px-7 py-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar demo gratis
                </a>
                <Link
                  to="/precios"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-primary-foreground border border-white/30 font-semibold px-7 py-4 rounded-xl transition-all"
                >
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Inicio;
