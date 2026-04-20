import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

type NavItem =
  | { to: string; label: string; href?: undefined }
  | { href: string; label: string; to?: undefined };

const navLinks: NavItem[] = [
  { to: "/inicio", label: "Inicio" },
  { to: "/precios", label: "Precios" },
  { href: "#caracteristicas", label: "Cómo funciona" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-edalti flex h-16 lg:h-20 items-center justify-between">
        <Link to="/inicio" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-primary-foreground font-bold text-lg">e</span>
          </div>
          <span className="font-bold text-lg tracking-tight">
            Edalti<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.to ? (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://agenda.edalti.com/login"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Ingresar
          </a>
          <Link
            to="/precios"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Ver precios
          </Link>
          <a
            href="https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20una%20demo%20del%20agente%20IA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar demo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-edalti py-6 flex flex-col gap-1">
            {navLinks.map((l) =>
              l.to ? (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
            <a
              href="https://agenda.edalti.com/login"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Ingresar
            </a>
            <a
              href="https://wa.me/573000000000?text=Hola%20Edalti%2C%20quiero%20una%20demo"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-3.5 rounded-lg shadow-md"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
