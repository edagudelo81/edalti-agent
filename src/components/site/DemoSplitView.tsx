import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, MessageCircle } from "lucide-react";

const messages = [
  { from: "patient", text: "Hola, necesito agendar una cita con la doctora 🙏", time: "9:41", delay: "0s" },
  {
    from: "bot",
    text: "¡Hola! Soy el asistente de Clínica Vida Plena 😊\n\n¿Para qué especialidad necesitas la cita?",
    time: "9:41",
    delay: "0.8s",
  },
  { from: "patient", text: "Medicina general", time: "9:42", delay: "1.6s" },
  {
    from: "bot",
    text: "Tengo disponible mañana martes a las 10:00am o el jueves a las 3:00pm. ¿Cuál prefieres?",
    time: "9:42",
    delay: "2.4s",
  },
  { from: "patient", text: "El martes perfecto", time: "9:43", delay: "3.2s" },
  {
    from: "bot",
    text: "✅ ¡Listo! Tu cita quedó agendada para el martes 22 de abril a las 10:00am con la Dra. López.\n\nTe enviaré un recordatorio 24 horas antes. ¡Hasta pronto!",
    time: "9:43",
    delay: "4s",
  },
];

const appointments = [
  { time: "09:00am", name: "Juan Pérez", type: "Consulta general", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
  { time: "09:30am", name: "María González", type: "Control", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
  { time: "11:00am", name: "Carlos Ruiz", type: "Seguimiento", badge: "Pendiente", badgeClass: "bg-muted text-muted-foreground" },
  { time: "03:00pm", name: "Ana Martínez", type: "Consulta", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
];

const DemoSplitView = () => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setCycle((current) => current + 1), 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="container-edalti">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Demo en vivo</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">Mira tu agente en acción</h2>
          <p className="mt-4 text-body">
            Esto es exactamente lo que ven tus pacientes cuando escriben a tu WhatsApp — y lo que tú ves en tu panel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
            <div className="flex items-center gap-3 bg-whatsapp-header px-5 py-4 text-primary-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 text-sm font-bold">CV</div>
              <div>
                <h3 className="text-base font-bold text-primary-foreground">Clínica Vida Plena</h3>
                <p className="text-xs text-primary-foreground/80">en línea</p>
              </div>
            </div>
            <div key={`chat-${cycle}`} className="min-h-[560px] space-y-3 bg-whatsapp-chat p-4 sm:p-6">
              {messages.map((message) => {
                const isPatient = message.from === "patient";
                return (
                  <div
                    key={`${message.text}-${cycle}`}
                    className={`flex animate-demo-message ${isPatient ? "justify-end" : "justify-start"}`}
                    style={{ animationDelay: message.delay }}
                  >
                    <div
                      className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-soft ${
                        isPatient ? "bg-whatsapp-bubble text-foreground" : "bg-background text-foreground"
                      }`}
                    >
                      {message.text}
                      <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                        {message.time}
                        {isPatient && <Check className="h-3 w-3 text-primary" />}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div className="flex animate-demo-message justify-start" style={{ animationDelay: "3.65s" }}>
                <div className="flex gap-1 rounded-2xl bg-background px-4 py-3 shadow-soft">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:120ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-card sm:p-6">
            <div key={`notification-${cycle}`} className="absolute right-4 top-4 z-10 animate-demo-notification rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-lg" style={{ animationDelay: "4s" }}>
              🔔 Nueva cita agendada por el agente IA
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Tu agenda</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Martes 22 de abril</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">● En vivo</span>
            </div>

            <div key={`agenda-${cycle}`} className="mt-5 space-y-3">
              {appointments.slice(0, 2).map((appointment) => (
                <AgendaRow key={appointment.time} {...appointment} />
              ))}
              <div className="animate-demo-appointment rounded-2xl border border-primary bg-primary/10 p-4" style={{ animationDelay: "4s" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-primary">10:00am — NUEVA CITA</p>
                    <p className="mt-1 font-semibold text-foreground">Laura Rodríguez — Medicina general</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Nueva ✨</span>
                </div>
              </div>
              {appointments.slice(2).map((appointment) => (
                <AgendaRow key={appointment.time} {...appointment} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="https://cal.com/edalti-solution/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg">
            <MessageCircle className="h-5 w-5" />
            Quiero un agente así
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/precios" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-4 font-semibold text-foreground transition-all hover:bg-secondary">
            Ver precios
          </Link>
        </div>
      </div>
    </section>
  );
};

const AgendaRow = ({ time, name, type, badge, badgeClass }: (typeof appointments)[number]) => (
  <div className="rounded-2xl border border-border bg-background p-4">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-bold text-muted-foreground">{time}</p>
        <p className="mt-1 font-semibold text-foreground">{name}</p>
        <p className="text-sm text-body">{type}</p>
      </div>
      <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${badgeClass}`}>{badge}</span>
    </div>
  </div>
);

export default DemoSplitView;