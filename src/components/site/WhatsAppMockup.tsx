import { Check } from "lucide-react";

type Bubble = {
  from: "user" | "bot";
  text: string;
  time: string;
};

const messages: Bubble[] = [
  {
    from: "bot",
    text: "¡Hola! 👋 Soy Sofi, la asistente virtual de Clínica Demo Edalti 😊\n¿Para qué servicio deseas agendar tu cita?",
    time: "10:24",
  },
  { from: "user", text: "Necesito una cita de odontología general", time: "10:24" },
  {
    from: "bot",
    text: "¡Perfecto! Para odontología general tengo disponibilidad mañana a las 9:00 am, 11:30 am o 3:00 pm. ¿Cuál prefieres?",
    time: "10:25",
  },
  { from: "user", text: "11:30 am está perfecto", time: "10:25" },
  {
    from: "bot",
    text: "✅ ¡Listo! Tu cita de odontología general quedó agendada para mañana a las 11:30 am.\nTe enviaré un recordatorio 1 hora antes 🙌",
    time: "10:26",
  },
];

const WhatsAppMockup = () => {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-50"
        style={{ background: "radial-gradient(closest-side, hsl(var(--accent) / 0.35), transparent)" }}
      />
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] bg-foreground p-3 shadow-lg">
        <div className="rounded-[2rem] overflow-hidden bg-background">
          {/* Header — colores de marca */}
          <div
            className="flex items-center gap-2 px-3 py-3 text-primary-foreground"
            style={{ background: "var(--gradient-cta)" }}
          >
            <img
              src="/Sofi-Avatar.png"
              alt="Sofi"
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white/40"
            />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold leading-tight truncate">Sofi · Clínica Demo Edalti</div>
              <div className="text-[11px] text-white/80">en línea</div>
            </div>
          </div>

          {/* Chat area */}
          <div className="px-3 py-4 space-y-2 min-h-[400px] bg-secondary">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                style={{ animation: `fade-up 0.5s ${i * 0.3}s both` }}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-[12.5px] leading-snug shadow-sm whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-background text-foreground border border-border rounded-tl-sm"
                  }`}
                >
                  {m.text}
                  <div
                    className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${
                      m.from === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {m.time}
                    {m.from === "user" && <Check className="h-3 w-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-foreground rounded-b-2xl" />
      </div>
    </div>
  );
};

export default WhatsAppMockup;
