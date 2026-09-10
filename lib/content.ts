export const site = {
  lawyerName: "Juan Pablo Gaseli Rozados",
  tagline: "Abogado Penalista",
  phoneDisplay: "221 409-0819",
  whatsappNumber: "5492214090819",
  email: "jpgrpenal@gmail.com",
  address: "La Plata, Provincia de Buenos Aires · CABA · Justicia Federal",
  instagram: "@grpenal",
  instagramUrl: "https://www.instagram.com/grpenal/",
};

export const hero = {
  title: "Defensa Penal Estratégica",
  subtitle:
    "Protejo tus derechos, tu libertad y tu tranquilidad. Te acompaño y asumo personalmente la defensa de tu caso en cada etapa del proceso penal.",
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
      "Acompañamiento y defensa desde el primer momento, durante la etapa de investigación, el juicio oral, la etapa recursiva y la ejecución penal.",
    icon: "scale",
  },
  {
    title: "Denuncias y Querellas",
    description:
      "Asesoramiento en la presentación de denuncias, querellas y constitución como particular damnificado, protegiendo tus derechos como víctima.",
    icon: "document",
  },
  {
    title: "Asistencia en Detenciones",
    description:
      "Acompañamiento urgente ante una detención, con protección de derechos, comunicación con la familia y orientación sobre los primeros pasos procesales.",
    icon: "alert",
  },
  {
    title: "Homicidios, Lesiones y Abusos",
    description:
      "Defensa en causas por homicidio, lesiones y delitos contra la integridad sexual.",
    icon: "shield",
  },
  {
    title: "Delitos Económicos",
    description:
      "Defensa en casos de estafas, fraudes, defraudaciones, administración fraudulenta y otros delitos económicos y patrimoniales.",
    icon: "briefcase",
  },
  {
    title: "Siniestros Viales",
    description:
      "Defensa en causas penales derivadas de accidentes de tránsito, incluyendo imputaciones por homicidio o lesiones culposas.",
    icon: "car",
  },
];

export const servicesIntro = {
  title: "Servicios Profesionales",
};

export const commonSituations = [
  "Recibiste una citación judicial y no sabés cómo proceder",
  "Fuiste denunciado por un delito y necesitás armar tu defensa",
  "Estás involucrado en una investigación penal en curso",
  "Detuvieron a un familiar y necesitás asistencia legal urgente",
  "Fuiste víctima de un delito",
];

export const contact = {
  title: "Contacto",
  subtitle:
    "Agendamos una consulta presencial o virtual para analizar tu situación y definir los pasos a seguir. También podés escribirme directamente por WhatsApp.",
  consultBoxTitle: "¿Necesitás hablar sobre tu caso?",
  consultBoxSubtitle: "Estoy disponible para conversar sobre tu situación y orientarte sobre los pasos a seguir.",
};

export const professional = {
  name: "Juan Pablo Gaseli Rozados",
  title: "Abogado Penalista",
  bio: "Mi nombre es Juan Pablo Gaseli Rozados y soy abogado por la Universidad Nacional de La Plata. Mi compromiso es brindar una defensa penal estratégica, personalizada y comprometida con cada caso, junto con un acompañamiento humano constante. Entiendo que detrás de cada caso penal hay una persona, una familia y un futuro en juego. Por eso, trabajo con precisión y dedicación en cada etapa del proceso, desde investigaciones y audiencias iniciales hasta juicios orales, pedidos de libertad en etapa de ejecución, hábeas corpus, revisiones y control de medidas de coerción.",
  credentials: [
    "Defensa penal estratégica y personalizada",
    "Dedicación exclusiva al Derecho Penal",
    "Actuación en PBA, CABA y Justicia Federal",
  ],
};

export const trust = {
  title: "¿Mi forma de trabajar?",
  items: [
    {
      icon: "target",
      title: "Exclusividad Penal",
      description: "Me dedico exclusivamente al Derecho Penal.",
    },
    {
      icon: "message",
      title: "Atención Directa",
      description: "Contacto directo y permanente, sin intermediarios. Soy quien lleva personalmente tu caso.",
    },
    {
      icon: "globe",
      title: "Ámbito de actuación",
      description: "Brindo asistencia legal en La Plata, CABA, Provincia de Buenos Aires y fuero Federal, con alcance en todo el país.",
    },
  ],
};
