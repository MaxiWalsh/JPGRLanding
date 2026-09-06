export const site = {
  lawyerName: "Dr. Juan Pérez",
  tagline: "Abogado",
  phoneDisplay: "+54 9 11 0000-0000",
  whatsappNumber: "5491100000000",
  email: "contacto@abogadoperez.com.ar",
  address: "Av. Ejemplo 1234, Ciudad Autónoma de Buenos Aires",
  officeHours: "Lunes a viernes de 9 a 18 hs",
};

export const hero = {
  title: `${site.lawyerName}`,
  subtitle:
    "Asesoramiento legal claro y cercano, con más de 15 años de experiencia defendiendo tus intereses.",
  ctaPrimary: "Consultá ahora",
  ctaSecondary: "Conocé los servicios",
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Derecho Civil",
    description:
      "Contratos, sucesiones, daños y perjuicios, y todo tipo de conflictos entre particulares.",
  },
  {
    title: "Derecho Laboral",
    description:
      "Despidos, indemnizaciones, accidentes de trabajo y reclamos ante la Justicia laboral.",
  },
  {
    title: "Derecho de Familia",
    description:
      "Divorcios, alimentos, régimen de visitas y todo lo relacionado con el derecho de familia.",
  },
  {
    title: "Derecho Comercial",
    description:
      "Constitución de sociedades, contratos comerciales y asesoramiento a pymes.",
  },
  {
    title: "Sucesiones y Herencias",
    description:
      "Trámites sucesorios, partición de bienes y asesoramiento a herederos.",
  },
  {
    title: "Consultas Generales",
    description:
      "¿Tenés una duda legal puntual? Escribime y te ayudo a encontrar el camino correcto.",
  },
];

export const servicesIntro = {
  title: "Servicios Profesionales",
  subtitle:
    "Un acompañamiento integral en las distintas áreas del derecho, con foco en resultados concretos.",
};

export const contact = {
  title: "Contacto",
  subtitle:
    "Contame tu consulta y te respondo a la brevedad. También podés escribirme directamente por WhatsApp.",
};
