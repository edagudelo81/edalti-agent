import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, MessageCircle } from "lucide-react";

// sender: 'patient' | 'bot'; delay = offset acumulado (s) para animationDelay; triggersPanel opcional
const demoConversation = [
  { from: "patient", text: "Quiero agendar una cita", time: "9:41", delay: "0.6s" },
  {
    from: "bot",
    triggersPanel: "chatActive",
    text: "¡Hola! 👋 Soy Sofi, la asistente de agendamiento de Clínica Demo Edalti.\nPara agendar tu cita, por favor confírmame los siguientes datos del paciente:\n• Nombre y Apellido\n• Tipo de documento (CC, TI, CE, RC, PSP)\n• Número de documento (sin puntos ni comas)\n• Correo electrónico\n• Fecha deseada para la cita (por ejemplo: 26 de diciembre o 28/01/2026)",
    time: "9:41",
    delay: "2.2s",
  },
  {
    from: "patient",
    text: "Laura Gómez, CC, 1144055088, laura.gomez@ejemplo.com, 24 de julio",
    time: "9:42",
    delay: "3.6s",
  },
  {
    from: "bot",
    text: "Gracias por la información 😊 Dame un momento mientras valido en nuestro sistema…\n\nPor favor, selecciona el número del servicio o especialidad que deseas para tu cita:\n1. Sede El Refugio - Cali - Medicina General\n2. Sede El Refugio - Cali - Odontología general\n3. Sede El Refugio - Cali - Dermatología\n4. Sede El Refugio - Cali - Laboratorio clínico\n5. Sede Pance - Cali - Medicina General\n6. Sede Pance - Cali - Odontología general\n7. Sede Pance - Cali - Nutrición\n8. Sede Pance - Cali - Fisioterapia",
    time: "9:42",
    delay: "5.2s",
  },
  { from: "patient", text: "3", time: "9:43", delay: "6.1s" },
  {
    from: "bot",
    text: "Para la fecha solicitada, tengo disponibles los siguientes horarios (slots).\nIndícame el número de la opción que prefieres:\n1. 10:00 am – Dr. Sebastián Duarte – Dermatología\n2. 10:20 am – Dr. Sebastián Duarte – Dermatología\n3. 10:40 am – Dr. Sebastián Duarte – Dermatología\n4. 11:00 am – Dr. Sebastián Duarte – Dermatología",
    time: "9:43",
    delay: "7.7s",
  },
  { from: "patient", text: "1", time: "9:44", delay: "8.6s" },
  {
    from: "bot",
    triggersPanel: "validating",
    text: "Un momento por favor ⏳\nEstoy validando la disponibilidad del horario seleccionado…",
    time: "9:44",
    delay: "10s",
  },
  {
    from: "bot",
    triggersPanel: "booked",
    text: "✅ ¡Tu cita ha sido agendada con éxito!\n📋 Detalles de tu cita:\n• Paciente: Laura Gómez\n• Servicio: Dermatología\n• Profesional: Dr. Sebastián Duarte\n📅 Fecha: viernes, 24 de julio de 2026\n🕒 Hora: 10:00 a. m.\n🏥 Clínica Demo Edalti\n📍 Sede: Sede El Refugio\n📌 Dirección: Calle 14 # 70-30, Cali\n¡Te esperamos! 😊",
    time: "9:45",
    delay: "11.8s",
  },
];

const TYPING_INDICATOR_DELAY = "11.1s";

// Suma de los delayMs del guion real (spec-s3-demo-en-vivo-v2.md) = 11.8s hasta la confirmación.
const CONVERSATION_DURATION_MS = 11_800;
// Pausa tras la confirmación para apreciar el resultado antes de reiniciar el ciclo.
const CYCLE_PAUSE_MS = 4_200;
const CYCLE_DURATION_MS = CONVERSATION_DURATION_MS + CYCLE_PAUSE_MS;

const appointments = [
  { time: "09:00am", name: "Juan Pérez", type: "Consulta general", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
  { time: "09:30am", name: "María González", type: "Control", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
  { time: "11:00am", name: "Carlos Ruiz", type: "Seguimiento", badge: "Pendiente", badgeClass: "bg-muted text-muted-foreground" },
  { time: "03:00pm", name: "Ana Martínez", type: "Consulta", badge: "Confirmada", badgeClass: "bg-success/10 text-success" },
];

const DemoSplitView = () => {
  const [cycle, setCycle] = useState(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => setCycle((current) => current + 1), CYCLE_DURATION_MS);
    return () => window.clearInterval(interval);
  }, []);

  // Auto-scroll al último mensaje a medida que aparecen, sincronizado con los mismos
  // offsets que usan las animaciones CSS de las burbujas.
  useEffect(() => {
    const scrollDelays = [...demoConversation.map((m) => m.delay), TYPING_INDICATOR_DELAY];
    const timeouts = scrollDelays.map((delay) =>
      window.setTimeout(() => {
        chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: "smooth" });
      }, parseFloat(delay) * 1000)
    );
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [cycle]);

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
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-card lg:h-full">
            <div className="flex shrink-0 items-center gap-3 bg-whatsapp-header px-5 py-4 text-primary-foreground">
              <img src="/Sofi-Avatar.png" alt="Sofi" className="h-10 w-10 shrink-0 rounded-full object-cover" />
              <div>
                <h3 className="text-base font-bold text-primary-foreground">Clínica Demo Edalti</h3>
                <p className="text-xs text-primary-foreground/80">en línea</p>
              </div>
            </div>
            <div
              ref={chatScrollRef}
              key={`chat-${cycle}`}
              className="h-[60vh] min-h-0 flex-1 space-y-3 overflow-y-auto bg-whatsapp-chat p-4 sm:p-6 lg:h-auto"
            >
              {demoConversation.map((message) => {
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
              <div className="flex animate-demo-message justify-start" style={{ animationDelay: TYPING_INDICATOR_DELAY }}>
                <div className="flex gap-1 rounded-2xl bg-background px-4 py-3 shadow-soft">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:120ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          </div>

          {/* Panel completo del negocio — solo desktop. En móvil, ver la card compacta debajo del chat. */}
          <div className="relative hidden overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-card lg:block sm:p-6">
            <div
              key={`notification-${cycle}`}
              className="absolute right-4 top-4 z-10 animate-demo-notification rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
              style={{ animationDelay: "11.8s" }}
            >
              🔔 Nueva cita agendada por el agente IA
            </div>

            <div key={`status-${cycle}`} className="space-y-2 border-b border-border pb-4 text-sm">
              <p className="animate-demo-message flex items-center gap-2 font-medium text-foreground" style={{ animationDelay: "2.2s" }}>
                <span className="h-2 w-2 rounded-full bg-success" /> Chat activo: Laura Gómez
              </p>
              <p className="animate-demo-message flex items-center gap-2 text-muted-foreground" style={{ animationDelay: "10s" }}>
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-primary" /> Validando disponibilidad…
              </p>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 pt-5">
              <div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Tu agenda</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Viernes 24 de julio</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">● En vivo</span>
            </div>

            <div key={`agenda-${cycle}`} className="mt-5 space-y-3">
              {appointments.slice(0, 2).map((appointment) => (
                <AgendaRow key={appointment.time} {...appointment} />
              ))}
              <div className="animate-demo-appointment rounded-2xl border border-primary bg-primary/10 p-4" style={{ animationDelay: "11.8s" }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-primary">10:00 a. m. — NUEVA CITA</p>
                    <p className="mt-1 font-semibold text-foreground">Laura Gómez — Dermatología</p>
                    <p className="text-xs text-muted-foreground">Dr. Sebastián Duarte · Sede El Refugio · vie. 24 jul</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Nueva ✨</span>
                </div>
              </div>
              {appointments.slice(2).map((appointment) => (
                <AgendaRow key={appointment.time} {...appointment} />
              ))}
            </div>
          </div>

          {/* Momento de valor compacto — solo móvil. Aparece únicamente al confirmarse la cita. */}
          <div key={`mobile-booked-${cycle}`} className="lg:hidden">
            <div
              className="relative animate-demo-appointment rounded-2xl border border-primary bg-primary/10 p-4 shadow-card"
              style={{ animationDelay: "11.8s" }}
            >
              <span className="absolute -top-3 right-4 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-md">
                🔔 Nueva cita agendada
              </span>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-primary">10:00 a. m. — NUEVA CITA</p>
                  <p className="mt-1 font-semibold text-foreground">Laura Gómez — Dermatología</p>
                  <p className="text-xs text-muted-foreground">Dr. Sebastián Duarte · Sede El Refugio · vie. 24 jul</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Nueva ✨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://cal.com/edalti-solution/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Quiero un agente así
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="https://wa.me/573226868840?text=Hola%20Sofi%2C%20quiero%20agendar%20una%20cita%20de%20prueba"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition-all hover:bg-primary/5"
            >
              <MessageCircle className="h-5 w-5" />
              Probar a Sofi en WhatsApp
            </a>
            <p className="text-xs text-muted-foreground">Es una demostración, puedes usar datos de ejemplo.</p>
          </div>
          <Link
            to="/precios"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-4 font-semibold text-foreground transition-all hover:bg-secondary"
          >
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
