# SPEC — Sección de Confianza (Trust Stack) · Edalti Solutions

**Objetivo:** Reemplazar la barra de logos genérica y los testimonios no verificables por señales de confianza reales y verificables. Es la solución de prueba social honesta para early stage (Fase 2 del plan de optimización).
**Ubicación en la home:** donde hoy está la barra de logos / prueba social débil (zona de la sección S7). Esta sección puede coexistir con la de testimonios: los testimonios reales (ej. Sensaciones Spa) se suman cuando estén disponibles; mientras tanto, esta sección carga el peso de la confianza.
**Stack:** Vite + React 18 + TS + Tailwind + shadcn/ui. Mobile-first (validar 375–430px primero).
**Colores de marca:** azul `#006DFC` · celeste `#00CBF4`.
**Entrega en capas:** Capa 1 = esqueleto funcional (estructura + contenido + responsive). Capa 2 = refinamiento visual (íconos, hover, degradados).

---

## Contenido (copy definitivo)

**Encabezado de sección:**
> Tecnología verificada por Meta, hecha en Colombia

**Subtítulo:**
> Construido sobre la API oficial de WhatsApp Business, con los estándares de seguridad y privacidad que tu negocio necesita.

**Tres badges** (título corto + microcopy):

| # | Título | Microcopy | Ícono sugerido (lucide-react) |
|---|--------|-----------|-------------------------------|
| 1 | Meta Tech Provider verificado | Usamos la API oficial de WhatsApp Business. No somos un intermediario no autorizado. | `BadgeCheck` |
| 2 | Cumplimiento Ley 1581 | Tratamos los datos de tus pacientes conforme a la ley colombiana de Habeas Data. | `ShieldCheck` |
| 3 | Hecho en Colombia | Soporte en tu zona horaria, en español, que entiende la realidad de tu negocio. | `MapPin` |

---

## Layout

**Desktop (≥ 768px):**
- Encabezado + subtítulo centrados arriba.
- Los 3 badges en una fila de 3 columnas iguales. Cada badge: ícono arriba, título en negrita, microcopy debajo.

**Mobile (< 768px):**
- Encabezado + subtítulo centrados (tamaño de fuente reducido, sin que el encabezado ocupe más de 2-3 líneas).
- Los 3 badges apilados en columna única, ancho completo, con separación cómoda entre ellos.
- Cada badge legible sin zoom; ícono + título en una línea visual clara, microcopy debajo.

---

## Comportamiento y detalles

- El badge **Ley 1581** debe enlazar a la página `/privacidad` (refuerza la confianza: el prospecto verifica el respaldo real). Usar un enlace sutil en el microcopy o en el badge completo.
- Íconos con los colores de marca (degradado `#006DFC → #00CBF4` o azul sólido `#006DFC`).
- Capa 2: hover state suave en cada badge (elevación leve o cambio de fondo). No obligatorio en Capa 1.
- Respetar el sistema de diseño existente del repo (tipografía, spacing, componentes shadcn ya usados). No introducir una tipografía o paleta nueva.

---

## Notas de integridad (críticas — no publicar sin cumplirlas)

1. **Badge de Meta:** es una afirmación verificable. Publicar solo si Edalti figura efectivamente como Meta Tech Provider verificado. Es la credencial más fuerte precisamente porque es comprobable.
2. **Badge de Ley 1581:** debe estar respaldado por la Política de Privacidad publicada en `/privacidad` (ya lista).
3. **No agregar números de clientes, logos de negocios sin permiso, ni cifras** en esta sección. El valor está en las credenciales verificables, no en insinuar volumen.

---

## Criterio de aceptación (DoD)

- [ ] La sección reemplaza la barra de logos genérica / prueba social débil.
- [ ] Encabezado, subtítulo y 3 badges con el copy exacto de este spec.
- [ ] Validado primero en 375px: badges apilados, legibles, sin scroll horizontal.
- [ ] El badge de Ley 1581 enlaza a `/privacidad` y el enlace funciona.
- [ ] No hay testimonios inventados ni cifras de clientes en la sección.
- [ ] Coherente con el sistema de diseño existente (no introduce tipografía/paleta nueva).
