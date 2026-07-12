import { Link } from "react-router-dom";
import LegalPage, { LegalSection } from "@/components/site/LegalPage";

const sections: LegalSection[] = [
  {
    title: "1. Descripción del servicio",
    blocks: [
      "Edalti es una plataforma SaaS que permite a empresas gestionar conversaciones con sus clientes a través de WhatsApp Business API y otros canales de comunicación. Entre sus funcionalidades se incluyen:",
      {
        list: [
          "Automatización de la gestión de citas y recordatorios vía WhatsApp.",
          "Agentes de inteligencia artificial para atención y soporte al cliente.",
        ],
      },
      "El servicio se presta bajo modalidad de suscripción y está destinado exclusivamente a empresas y profesionales.",
    ],
  },
  {
    title: "2. Uso aceptable",
    blocks: [
      "Al utilizar Edalti, el usuario se compromete a:",
      {
        list: [
          "Usar la plataforma únicamente para fines lícitos y conforme a la legislación vigente.",
          "No enviar comunicaciones no solicitadas (spam), contenido engañoso, ilegal o que infrinja derechos de terceros.",
          "Obtener el consentimiento explícito de sus usuarios finales antes de iniciarles conversaciones vía WhatsApp.",
          "Cumplir en todo momento con las Políticas de uso de WhatsApp Business de Meta Platforms, Inc., incluyendo la Política de Uso Aceptable y la Política Comercial de WhatsApp.",
          "No utilizar la plataforma para actividades que violen los términos de servicio de cualquier proveedor externo integrado.",
        ],
      },
      "Edalti se reserva el derecho de suspender o cancelar el acceso de cualquier usuario que incumpla estas condiciones.",
    ],
  },
  {
    title: "3. Responsabilidad del usuario y tratamiento de datos",
    blocks: [
      "El usuario es el único responsable de:",
      {
        list: [
          "El contenido de los mensajes enviados a través de la plataforma.",
          "Contar con las autorizaciones necesarias para comunicarse con sus destinatarios.",
          "Mantener la confidencialidad de sus credenciales de acceso.",
          "Garantizar que el uso que hace de Edalti cumple con las leyes de protección de datos aplicables en su jurisdicción.",
          "Notificar a Edalti de inmediato ante cualquier uso no autorizado de su cuenta.",
        ],
      },
      <p key="privacy-ref" className="mt-4 text-body leading-relaxed">
        En relación con los datos personales de sus usuarios finales (por ejemplo, pacientes), el usuario actúa
        como <strong>Responsable del tratamiento</strong> y Edalti como <strong>Encargado</strong>, tratando dichos
        datos por cuenta del usuario y conforme a sus instrucciones. El usuario es responsable de obtener la
        autorización previa, expresa e informada de los titulares, en especial cuando se trate de datos sensibles o
        de salud. Para más detalle, consulta nuestra{" "}
        <Link to="/privacidad" className="text-primary hover:underline">
          Política de Privacidad
        </Link>
        .
      </p>,
    ],
  },
  {
    title: "4. Integración con terceros",
    blocks: [
      "La plataforma Edalti utiliza servicios de terceros para su funcionamiento, incluyendo la API oficial de WhatsApp Business proporcionada por Meta Platforms, Inc.",
      "El usuario reconoce que el uso de WhatsApp está sujeto a los términos y políticas de Meta, y que Edalti actúa únicamente como intermediario tecnológico que facilita la comunicación entre empresas y sus clientes.",
      "Edalti no es responsable por interrupciones, cambios o restricciones impuestas por proveedores externos como Meta.",
    ],
  },
  {
    title: "5. Limitación de responsabilidad",
    blocks: [
      "En la máxima medida permitida por la ley aplicable, Edalti no será responsable por:",
      {
        list: [
          "Pérdidas de datos, ingresos o beneficios derivadas del uso o la imposibilidad de uso de la plataforma.",
          "Interrupciones del servicio causadas por terceros, fuerza mayor o mantenimiento programado.",
          "Daños indirectos, incidentales, especiales o consecuentes.",
          "Decisiones empresariales tomadas con base en información procesada por la plataforma.",
        ],
      },
      "La responsabilidad total de Edalti frente al usuario, por cualquier concepto, estará limitada al importe abonado por el usuario en los tres meses anteriores al evento que originó el daño.",
    ],
  },
  {
    title: "6. Terminación del servicio",
    blocks: [
      "Edalti podrá suspender o cancelar el acceso del usuario a la plataforma en los siguientes casos:",
      {
        list: [
          "Incumplimiento de estos Términos y Condiciones.",
          "Falta de pago de la suscripción.",
          "Solicitud expresa del usuario.",
          "Obligación legal o requerimiento de autoridad competente.",
        ],
      },
      "El usuario podrá cancelar su suscripción en cualquier momento notificándolo a info@edalti.com. La cancelación tendrá efecto al final del período de facturación en curso.",
    ],
  },
  {
    title: "7. Modificaciones",
    blocks: [
      "Edalti se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas al usuario con al menos 15 días de antelación mediante correo electrónico o aviso en la plataforma.",
      "El uso continuado de la plataforma tras la entrada en vigor de los cambios implica la aceptación de los nuevos términos. Si el usuario no acepta las modificaciones, deberá cancelar su cuenta antes de la fecha de entrada en vigor.",
    ],
  },
  {
    title: "8. Contacto",
    blocks: [
      "Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos en:",
      {
        list: ["**Email:** info@edalti.com", "**Ubicación:** Cali, Colombia"],
      },
    ],
  },
];

const Terminos = () => (
  <LegalPage title="Términos y Condiciones" lastUpdated="julio de 2026" sections={sections} />
);

export default Terminos;
