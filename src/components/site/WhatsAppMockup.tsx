import { Check } from "lucide-react";

type Bubble = {
  from: "user" | "bot";
  text: string;
  time: string;
};

const messages: Bubble[] = [
  { from: "user", text: "Hola, quisiera agendar una cita para mañana 🙏", time: "10:24" },
  { from: "bot", text: "¡Hola! Soy el asistente de Clínica Sonrisa 😊\nTengo disponibilidad mañana a las 9:00, 11:30 o 3:00 pm. ¿Cuál prefieres?", time: "10:24" },
  { from: "user", text: "11:30 está perfecto", time: "10:25" },
  { from: "bot", text: "✅ Listo, agendé tu cita para mañana 11:30 am.\nTe enviaré un recordatorio 1 hora antes.", time: "10:25" },
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
        <div className="rounded-[2rem] overflow-hidden bg-[#ECE5DD]">
          {/* WhatsApp header */}
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center font-semibold text-sm">
              CS
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">Clínica Sonrisa</div>
              <div className="text-[11px] text-white/75">en línea</div>
            </div>
          </div>

          {/* Chat area */}
          <div
            className="px-3 py-4 space-y-2 min-h-[420px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 10%, rgba(0,0,0,0.03) 1px, transparent 1px), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.03) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                style={{ animation: `fade-up 0.5s ${i * 0.4}s both` }}
              >
                <div
                  className={`max-w-[78%] rounded-xl px-3 py-2 text-[13px] leading-snug shadow-sm whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-[#DCF8C6] text-[#0A0F1E] rounded-tr-sm"
                      : "bg-white text-[#0A0F1E] rounded-tl-sm"
                  }`}
                >
                  {m.text}
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-foreground/50">
                    {m.time}
                    {m.from === "user" && <Check className="h-3 w-3 text-[#34B7F1]" />}
                  </div>
                </div>
              </div>
            ))}
            {/* Typing */}
            <div className="flex justify-start">
              <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2.5 shadow-sm flex gap-1">
                <span className="h-1.5 w-1.5 bg-foreground/40 rounded-full animate-pulse-soft" />
                <span className="h-1.5 w-1.5 bg-foreground/40 rounded-full animate-pulse-soft" style={{ animationDelay: "0.2s" }} />
                <span className="h-1.5 w-1.5 bg-foreground/40 rounded-full animate-pulse-soft" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-foreground rounded-b-2xl" />
      </div>
    </div>
  );
};

export default WhatsAppMockup;
