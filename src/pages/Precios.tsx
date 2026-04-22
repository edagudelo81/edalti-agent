import { Link } from "react-router-dom";
import { Check, MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";

type Plan = {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  annualTotal: number;
  highlight?: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
};

type Billing = "monthly" | "annual";

const plans: Plan[] = [
  {
    name: "Esencial",
    tagline: "Para negocios pequeños empezando con automatización",
    monthlyPrice: 149000,
    annualMonthlyPrice: 119000,
    annualTotal: 1428000,
    features: [
      "1 agente IA en WhatsApp",
      "Hasta 500 conversaciones/mes",
      "Agendamiento básico",
      "1 calendario integrado",
      "Recordatorios automáticos",
      "Soporte por email",
    ],
    cta: "Empezar con Esencial",
    ctaHref: "https://cal.com/edalti-solution/30min",
  },
  {
    name: "Profesional",
    tagline: "Lo más elegido por PyMEs en crecimiento",
    monthlyPrice: 349000,
    annualMonthlyPrice: 279000,
    annualTotal: 3348000,
    highlight: true,
    features: [
      "1 agente IA personalizado",
      "Hasta 2.500 conversaciones/mes",
      "Agendamiento avanzado con reglas",
      "Hasta 3 calendarios / sedes",
      "Recordatorios + confirmaciones",
      "Reportes de rendimiento",
      "Integración con Google Calendar / Calendly",
      "Soporte prioritario por WhatsApp",
    ],
    cta: "Empezar con Profesional",
    ctaHref: "https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20el%20plan%20Profesional",
  },
  {
    name: "Empresarial",
    tagline: "Para empresas con alto volumen y múltiples sedes",
    monthlyPrice: 799000,
    annualMonthlyPrice: 639000,
    annualTotal: 7668000,
    features: [
      "Agentes IA ilimitados",
      "Conversaciones ilimitadas",
      "Sedes y calendarios ilimitados",
      "Flujos personalizados a medida",
      "Integración con tu CRM o ERP",
      "Panel multiusuario para tu equipo",
      "Onboarding y entrenamiento dedicado",
      "Soporte 24/7 con SLA",
    ],
    cta: "Hablar con ventas",
    ctaHref: "https://wa.me/573000000000?text=Hola%20Edalti%2C%20me%20interesa%20el%20plan%20Empresarial",
  },
];

const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

const includedAll = [
  "API oficial de WhatsApp Business",
  "Agente IA conversacional en español",
  "Datos cifrados y alojados de forma segura",
  "Actualizaciones continuas del modelo IA",
];

const faqs = [
  {
    q: "¿Hay costo de implementación?",
    a: "El setup inicial está incluido en todos los planes. Solo pagas la mensualidad desde el día 1.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, puedes subir o bajar de plan en cualquier momento. Los cambios aplican al siguiente ciclo de facturación.",
  },
  {
    q: "¿Cómo es la facturación?",
    a: "Facturamos mensualmente en pesos colombianos (COP). Aceptamos transferencia, tarjeta y PSE. Emitimos factura electrónica DIAN.",
  },
  {
    q: "¿Qué pasa si supero las conversaciones de mi plan?",
    a: "Te notificamos antes de llegar al límite. Puedes subir de plan o pagar conversaciones adicionales sin interrupciones.",
  },
  {
    q: "¿Tienen periodo de prueba?",
    a: "Ofrecemos una demo personalizada gratuita donde te mostramos el agente funcionando con tu caso de uso real.",
  },
];

const Precios = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [billing, setBilling] = useState<Billing>("monthly");
  const isAnnual = billing === "annual";

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-hero-gradient">
        <div className="container-edalti pt-12 pb-12 lg:pt-20 lg:pb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            Precios simples en pesos colombianos
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Un plan para cada{" "}
            <span className="text-primary">tamaño de negocio</span>.
          </h1>
          <p className="mt-5 text-lg text-body">
            Sin costos ocultos. Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="pb-20 lg:pb-28">
        <div className="container-edalti mb-10 flex flex-col items-center gap-3">
          <div className="inline-flex rounded-2xl bg-secondary p-1 border border-border">
            {(["monthly", "annual"] as Billing[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                  billing === option
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {option === "monthly" ? "Mensual" : "Anual"}
              </button>
            ))}
          </div>
          {isAnnual && (
            <span className="rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground animate-fade-in">
              Ahorra hasta 20%
            </span>
          )}
        </div>
        <div className="container-edalti grid md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 lg:p-8 flex flex-col transition-all ${
                p.highlight
                  ? "bg-foreground text-background shadow-lg ring-2 ring-primary lg:scale-[1.02]"
                  : "bg-background border border-border shadow-card hover:-translate-y-0.5"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              )}
              <div>
                <h3 className={`text-2xl font-bold ${p.highlight ? "text-background" : "text-foreground"}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tight">
                    {formatCOP(isAnnual ? p.annualMonthlyPrice : p.monthlyPrice)}
                  </span>
                </div>
                <span className={`text-sm ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                  COP / mes + IVA
                </span>
                {isAnnual && (
                  <p className={`mt-2 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                    facturado como {formatCOP(p.annualTotal)} COP/año
                  </p>
                )}
              </div>
              <a
                href={p.ctaHref}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex items-center justify-center gap-2 font-semibold px-5 py-3.5 rounded-xl transition-all ${
                  p.highlight
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {p.cta}
              </a>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${
                        p.highlight ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <Check className={`h-3 w-3 ${p.highlight ? "text-accent" : "text-primary"}`} />
                    </span>
                    <span className={p.highlight ? "text-background/90" : "text-body"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {isAnnual && (
          <p className="container-edalti mt-6 text-center text-sm font-semibold text-primary animate-fade-in">
            Ahorra hasta $1.920.000 COP al año con el plan Empresarial anual.
          </p>
        )}

        {/* Included in all */}
        <div className="container-edalti mt-16">
          <div className="bg-secondary rounded-3xl p-8 lg:p-10 border border-border">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">Incluido en todos los planes</h3>
                <p className="mt-2 text-body text-sm">
                  Sin importar qué plan elijas, recibes la base completa de Edalti.
                </p>
              </div>
              <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                {includedAll.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container-edalti max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Preguntas sobre precios</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Lo que más nos preguntan</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-background rounded-xl border border-border overflow-hidden">
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
      <section className="py-16 lg:py-24">
        <div className="container-edalti text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold">¿Aún no estás seguro qué plan elegir?</h2>
          <p className="mt-4 text-body">
            Agenda una demo gratuita y te recomendamos el plan ideal según tu volumen y caso de uso.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20una%20demo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar demo gratis
            </a>
            <Link
              to="/inicio"
              className="inline-flex items-center justify-center gap-2 bg-background hover:bg-secondary border border-border text-foreground font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Precios;
