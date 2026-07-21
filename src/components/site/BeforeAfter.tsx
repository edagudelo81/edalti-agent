import { Check } from "lucide-react";

const comparisons = [
  { label: "Tiempo de respuesta", before: "Minutos u horas", after: "Segundos" },
  { label: "Horario de atención", before: "Horario laboral", after: "24/7" },
  {
    label: "Citas gestionadas sin intervención",
    before: "Bajo",
    after: "9 de cada 10",
  },
  {
    label: "Costo por conversación",
    before: "Costo de tiempo humano (salario)",
    after: "Costo bajo de tokens",
  },
];

const BeforeAfter = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-edalti">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">El cambio</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
            No es teoría. Es lo que cambia en tu operación.
          </h2>
        </div>

        <div className="mt-12 lg:mt-14 grid gap-4 md:gap-5 max-w-4xl mx-auto">
          {comparisons.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-border bg-background shadow-card overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-border">
                <span className="text-sm font-semibold text-foreground">{row.label}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Antes (equipo humano) */}
                <div className="px-5 py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Antes (equipo humano)
                  </div>
                  <div className="mt-1.5 text-body">{row.before}</div>
                </div>
                {/* Después (con Edalti) — columna destacada */}
                <div className="px-5 py-4 bg-primary/5 ring-1 ring-inset ring-primary/15">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Después (con Edalti)
                  </div>
                  <div className="mt-1.5 flex items-start gap-2 font-bold text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {row.after}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
