export const site = {
  lawyerName: "Juan Pablo Gaseli Rozados",
  tagline: "Abogado Penalista",
  phoneDisplay: "221 409-0819",
  whatsappNumber: "5492214090819",
  email: "contacto@grpenal.com.ar",
  address: "La Plata, Provincia de Buenos Aires / CABA / Justicia Federal",
  officeHours: "Lunes a viernes de 9 a 18 hs",
  instagram: "@grpenal",
  instagramUrl: "https://www.instagram.com/grpenal/",
};

export const hero = {
  title: "Defensa Penal Estratégica",
  subtitle:
    "Protegemos tus derechos, tu libertad y tu tranquilidad. Acompañamiento experto en cada etapa del proceso penal.",
  ctaPrimary: "Solicitar Asesoramiento",
  ctaSecondary: "Conocer Servicios",
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Defensa Penal Estratégica",
    description:
      "Construcción de estrategias sólidas para tu defensa en procesos penales complejos, desde la investigación hasta la sentencia.",
    icon: "⚖️",
  },
  {
    title: "Denuncias y Querellas",
    description:
      "Asesoramiento integral en la presentación de denuncias o querellas, protegiendo tus derechos como víctima o querellante.",
    icon: "📋",
  },
  {
    title: "Asistencia en Detenciones",
    description:
      "Acompañamiento urgente ante una detención: protección de derechos, comunicación con la familia y primeros pasos procesales.",
    icon: "🚨",
  },
  {
    title: "Delitos Económicos",
    description:
      "Defensa especializada en casos de fraude, estafas, malversación y otros delitos de orden económico y patrimonial.",
    icon: "💼",
  },
  {
    title: "Violencia de Género",
    description:
      "Asistencia legal a víctimas de violencia de género en procesos penales, resguardando tu integridad y derecho a justicia.",
    icon: "🛡️",
  },
  {
    title: "Accidentes Viales",
    description:
      "Defensa en casos de siniestros viales con consecuencias penales: asesoramiento integral ante homicidio o lesiones culposas.",
    icon: "🚗",
  },
];

export const servicesIntro = {
  title: "Servicios Profesionales",
  subtitle:
    "Especialización en Derecho Penal con enfoque estratégico y acompañamiento integral en cada caso.",
};

export const commonSituations = [
  "Recibiste una citación judicial y no sabés cómo proceder",
  "Fuiste denunciado por un delito y necesitás armar tu defensa",
  "Estás involucrado en una investigación penal en curso",
  "Detuvieron a un familiar y necesitás asistencia legal urgente",
];

export const contact = {
  title: "Contacto",
  subtitle:
    "Contame tu situación legal y te brindo orientación a la brevedad. También podés escribirme directamente por WhatsApp.",
  consultBoxTitle: "¿Necesitás asesoramiento legal?",
  consultBoxSubtitle: "Estoy disponible para consultas sobre tu caso penal. Actuaré con urgencia en detenciones.",
};

export const professional = {
  name: "Juan Pablo Gaseli Rozados",
  title: "Abogado Penalista",
  bio: "Mi compromiso es brindar una defensa penal impecable y un acompañamiento humano constante. Entiendo que detrás de cada caso penal hay una vida, una familia y un futuro en juego. Trabajaré incansablemente para proteger tus derechos y alcanzar el mejor resultado posible.",
  credentials: [
    "Especialista en Litigación Oral y Defensa Penal",
    "Foco exclusivo en Derecho Penal",
    "Atención integral en PBA, CABA y Justicia Federal",
  ],
};

export const trust = {
  title: "Por qué elegir nuestro acompañamiento",
  items: [
    {
      icon: "🎯",
      title: "Exclusividad Penal",
      description: "Dedicación absoluta a casos de Derecho Penal, sin distracciones en otras áreas.",
    },
    {
      icon: "📈",
      title: "Trayectoria",
      description: "Experiencia probada en tribunales penales y litigación oral.",
    },
    {
      icon: "💬",
      title: "Atención Directa",
      description: "Contacto permanente sin intermediarios. Tu abogado, directamente.",
    },
    {
      icon: "🌍",
      title: "Cobertura Integral",
      description: "Asistencia en La Plata, CABA, PBA y fuero Federal.",
    },
  ],
};
