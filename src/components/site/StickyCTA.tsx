import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <a
      href="https://cal.com/edalti-solution/30min"
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-4 inset-x-4 z-30 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      Agendar demo gratis
    </a>
  );
};

export default StickyCTA;
