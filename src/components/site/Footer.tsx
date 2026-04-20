import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container-edalti py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/inicio" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">e</span>
            </div>
            <span className="font-bold text-lg">Edalti Solutions</span>
          </Link>
          <p className="mt-4 text-background/70 text-sm max-w-md leading-relaxed">
            Automatización con IA para negocios colombianos.
            Agentes inteligentes que trabajan 24/7 por WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-background/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Colombia 🇨🇴
            </span>
            <a href="mailto:hola@edalti.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" /> hola@edalti.com
            </a>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp directo
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-background">Producto</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li><Link to="/inicio" className="hover:text-accent transition-colors">Agente IA</Link></li>
            <li><Link to="/precios" className="hover:text-accent transition-colors">Precios</Link></li>
            <li><a href="#caracteristicas" className="hover:text-accent transition-colors">Características</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">Preguntas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-background">Empresa</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li>
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-edalti py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <span>© {new Date().getFullYear()} Edalti Solutions. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
