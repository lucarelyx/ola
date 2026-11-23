import type { IconName } from "@/components/ui/icon";

export type Guide = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  icon: IconName;
  tone: string;
  purpose: string;
  requirements: string[];
  documents: string[];
  steps: string[];
  responsible: string;
  timing: string;
  cost: string;
  commonMistakes: string[];
  keywords: string[];
  sources: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: "nie",
    title: "Número NIE",
    category: "Identificación",
    summary: "Entiende qué es el NIE y cómo comprobar si ya tienes uno asignado.",
    icon: "file",
    tone: "blue",
    purpose:
      "El NIE es un número personal de identificación para personas extranjeras. No es una tarjeta física: puede aparecer en una resolución o en otros documentos oficiales.",
    requirements: [
      "La asignación y la vía dependen del motivo por el que te relacionas con España.",
      "La Policía indica que puede solicitarse si existen intereses económicos, profesionales o sociales en España y se cumplen las condiciones aplicables.",
      "Pendiente de validación: confirma si tu autorización de estudios ya incluye un NIE antes de iniciar otra solicitud.",
    ],
    documents: [
      "El formulario oficial EX-15 contempla la solicitud de NIE y certificados.",
      "La documentación justificativa concreta depende del motivo y de la situación de cada persona. Pendiente de validación.",
    ],
    steps: [
      "Busca el número en tu resolución, visado o documentación de extranjería.",
      "Si no aparece, revisa la vía aplicable en la información oficial y el formulario EX-15.",
      "Confirma cita, canal de presentación y documentos para tu caso antes de entregar la solicitud.",
    ],
    responsible: "Dirección General de la Policía · información de Extranjería.",
    timing: "Pendiente de validación para el procedimiento y la provincia.",
    cost: "Pendiente de validación.",
    commonMistakes: [
      "Confundir el NIE (número) con la TIE (tarjeta física).",
      "Iniciar una segunda solicitud sin comprobar los documentos que ya tienes.",
      "Dar por hecho que todas las solicitudes siguen el mismo canal.",
    ],
    keywords: ["número de identidad extranjero", "ex15", "policía", "documentación", "identificación"],
    sources: [
      {
        label: "Policía Nacional · información de Extranjería",
        href: "https://www.policia.es/_es/extranjeria_extranjeros.php",
      },
      {
        label: "Ministerio de Inclusión · formulario EX-15",
        href: "https://www.inclusion.gob.es/documents/d/migraciones/ex15-formulario-solicitud-numero-de-identidad-de-extranjero-y-certificados",
      },
    ],
  },
  {
    slug: "tie",
    title: "Tarjeta TIE",
    category: "Identificación",
    summary: "Prepara la solicitud de tu tarjeta de identidad de extranjero.",
    icon: "shield",
    tone: "orange",
    purpose:
      "La TIE es la tarjeta que acredita la situación administrativa en España. La Policía diferencia la tarjeta del documento con el que acreditas tu identidad.",
    requirements: [
      "La Policía indica que las personas con un visado o autorización para permanecer más de seis meses deben solicitar la TIE personalmente.",
      "La solicitud se realiza en la unidad de documentación policial de la provincia de residencia.",
      "La documentación concreta cambia según sea una primera expedición, renovación o duplicado. Confirma el supuesto antes de acudir.",
    ],
    documents: [
      "La Policía publica una relación de documentos por tipo de solicitud.",
      "Comprueba el impreso, la cita, la fotografía y los justificantes que correspondan a tu autorización. Lista exacta para tu caso: pendiente de validación.",
    ],
    steps: [
      "Comprueba la duración y las condiciones de tu autorización de estancia por estudios.",
      "Consulta la información oficial y solicita la cita para la expedición de TIE en Barcelona.",
      "Prepara solo los documentos indicados para tu tipo de solicitud y acude personalmente.",
    ],
    responsible: "Policía Nacional · Unidad de Documentación de Barcelona.",
    timing:
      "La Policía indica un plazo de un mes desde la entrada en España o desde la concesión de la autorización, según el supuesto, para estancias superiores a seis meses.",
    cost: "La tasa depende del trámite. Importe vigente: pendiente de validación.",
    commonMistakes: [
      "Confundir el número NIE con la tarjeta TIE.",
      "Elegir una cita distinta a expedición o toma de huellas.",
      "Usar una lista de documentos de una renovación para una primera expedición.",
    ],
    keywords: ["huellas", "cita", "policía", "tarjeta de identidad", "estancia estudios"],
    sources: [
      {
        label: "Policía Nacional · documentación de personas extranjeras",
        href: "https://www.policia.es/_es/extranjeria_extranjeros.php",
      },
      {
        label: "Cita previa de extranjería",
        href: "https://icp.administracionelectronica.gob.es/icpplus/index.html",
      },
    ],
  },
  {
    slug: "empadronamiento",
    title: "Empadronamiento",
    category: "Trámites locales",
    summary: "Registra tu residencia en Barcelona y consulta la documentación según tu vivienda.",
    icon: "map-pin",
    tone: "green",
    purpose:
      "El padrón municipal deja constancia de que resides habitualmente en Barcelona y conecta tu domicilio con determinados servicios y gestiones.",
    requirements: [
      "El Ajuntament solicita documentación de identificación y documentos relativos al domicilio.",
      "Los justificantes válidos dependen de si eres titular del contrato, vives con otra persona o tienes otra situación de vivienda.",
      "Pendiente de validación: revisa el asistente oficial con tu caso concreto.",
    ],
    documents: [
      "Documento de identificación de las personas que se empadronan.",
      "Documento que acredite el domicilio; el Ajuntament define alternativas según la situación.",
      "Si otra persona es titular de la vivienda, consulta la documentación adicional que exige el Ajuntament.",
    ],
    steps: [
      "Identifica qué opción describe tu vínculo con la vivienda.",
      "Consulta el trámite oficial de alta y reúne los documentos de identidad y domicilio.",
      "Presenta la solicitud por el canal disponible y conserva el justificante.",
    ],
    responsible: "Ajuntament de Barcelona · Oficina d'Atenció Ciutadana.",
    timing: "Pendiente de validación para la vía de presentación y tu expediente.",
    cost: "Pendiente de validación.",
    commonMistakes: [
      "Preparar documentos de domicilio que no corresponden al tipo de alojamiento.",
      "Olvidar revisar si el titular de la vivienda debe autorizar o aportar documentos.",
      "Dar por válido un archivo sin comprobar el formato aceptado por la sede.",
    ],
    keywords: ["padrón", "padró", "domicilio", "alquiler", "ayuntamiento", "OAC"],
    sources: [
      {
        label: "Ajuntament de Barcelona · alta en el padrón",
        href: "https://seuelectronica.ajuntament.barcelona.cat/APPS/portaltramits/es/ciudadano/descripcio/T135i/default.html",
      },
    ],
  },
  {
    slug: "movilidad",
    title: "Tarjeta de movilidad",
    category: "Vida en Barcelona",
    summary: "Compara opciones de transporte y elige una que encaje con tus trayectos.",
    icon: "train",
    tone: "purple",
    purpose:
      "Los títulos integrados permiten usar distintos medios de transporte dentro de las zonas incluidas. La T-usual es personal y válida durante 30 días consecutivos desde su primera validación.",
    requirements: [
      "El precio y la cobertura dependen del título y del número de zonas.",
      "La T-usual requiere llevar un documento identificativo equivalente al registrado.",
      "Comprueba que tu ruta y el aeropuerto, si aplica, están cubiertos por el título elegido.",
    ],
    documents: [
      "Documento identificativo para usar la T-usual.",
      "Soporte compatible: tarjeta, móvil con NFC o soporte disponible mediante T-mobilitat.",
    ],
    steps: [
      "Calcula cuántas zonas usarás con frecuencia.",
      "Compara los títulos vigentes en la web oficial de TMB/ATM.",
      "Compra o carga el soporte disponible y revisa las condiciones de uso.",
    ],
    responsible: "Autoritat del Transport Metropolità · TMB y T-mobilitat.",
    timing: "Compra y activación: consultar canales y disponibilidad actual.",
    cost: "T-usual: desde 22,80 € para 1 zona en 2026. Verifica el precio vigente y las zonas antes de comprar.",
    commonMistakes: [
      "Comprar un abono de menos zonas que las que exige tu trayecto habitual.",
      "No llevar el documento identificativo asociado al soporte.",
      "Asumir que todos los títulos sirven para el metro del aeropuerto.",
    ],
    keywords: ["t-usual", "t-mobilitat", "metro", "bus", "tmb", "atm", "zonas"],
    sources: [
      {
        label: "TMB · T-usual y condiciones",
        href: "https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-usual",
      },
      {
        label: "TMB · títulos y tarifas vigentes",
        href: "https://www.tmb.cat/es/tarifas-metro-bus-barcelona/precios-titulos-transporte",
      },
    ],
  },
  {
    slug: "tarjeta-sanitaria",
    title: "Tarjeta sanitaria",
    category: "Salud",
    summary: "Descubre cómo solicitar la TSI y qué cambia según tu cobertura.",
    icon: "heart",
    tone: "rose",
    purpose:
      "La Tarjeta Sanitaria Individual (TSI) identifica a la persona usuaria dentro del sistema sanitario público de Cataluña.",
    requirements: [
      "CatSalut establece el empadronamiento en un municipio de Cataluña como requisito básico para recibir la TSI física definitiva.",
      "Si tienes alta en el INSS puedes solicitarla directamente; si no, CatSalut asigna una cobertura según tu situación personal.",
      "El acceso concreto a la asistencia depende de las circunstancias individuales. Pendiente de validación.",
    ],
    documents: [
      "Para solicitarla presencialmente en un CAP, CatSalut indica documento de identificación (DNI, NIE o pasaporte).",
      "Certificado de empadronamiento con fecha de emisión inferior a tres meses, salvo que la administración pueda consultar los datos.",
    ],
    steps: [
      "Confirma si ya tienes derecho sanitario reconocido por el INSS.",
      "Solicita la TSI por internet o en el CAP correspondiente a tu domicilio.",
      "Si no tienes acceso reconocido por el INSS, consulta a CatSalut para conocer la cobertura aplicable.",
    ],
    responsible: "CatSalut · Servei Català de la Salut.",
    timing: "Pendiente de validación; consulta el canal de solicitud.",
    cost: "La tarjeta se envía gratuitamente según CatSalut. La cobertura se determina según tu situación.",
    commonMistakes: [
      "Solicitar la TSI antes de confirmar la situación de cobertura sanitaria.",
      "Usar un certificado de empadronamiento con fecha fuera del periodo que indica CatSalut.",
      "Pensar que el número NIE por sí solo acredita el derecho sanitario.",
    ],
    keywords: ["salud", "catsalut", "tsi", "CAP", "médico", "cobertura"],
    sources: [
      {
        label: "CatSalut · obtención de la primera TSI",
        href: "https://catsalut.gencat.cat/ca/coneix-catsalut/acces-sistema-salut/la-tsi/obtencio-tsi",
      },
    ],
  },
  {
    slug: "vivienda",
    title: "Vivienda",
    category: "Vida en Barcelona",
    summary: "Revisa los básicos antes de firmar y guarda los documentos de tu alojamiento.",
    icon: "house",
    tone: "gold",
    purpose:
      "Una vivienda confirmada facilita el empadronamiento y ayuda a organizar el resto de tu llegada. Revisa el contrato, el estado del piso y los suministros antes de comprometerte.",
    requirements: [
      "Las condiciones dependen del tipo de alojamiento y del contrato.",
      "La guía municipal recomienda comprobar la cédula de habitabilidad y aclarar los servicios básicos.",
      "Los requisitos legales y de alquiler aplicables a cada vivienda están pendientes de validación.",
    ],
    documents: [
      "Contrato o confirmación escrita del alojamiento.",
      "Datos de contacto de la propiedad o agencia y justificantes de pagos.",
      "Pregunta qué documento te permitirá acreditar el domicilio para el padrón.",
    ],
    steps: [
      "Lee las condiciones, duración, gastos y reglas de salida antes de firmar.",
      "Confirma quién figura en el contrato y qué suministros están incluidos.",
      "Guarda contrato, recibos y la información necesaria para el empadronamiento.",
    ],
    responsible: "Ajuntament de Barcelona · Habitatge; el contrato es entre las partes.",
    timing: "Depende de la búsqueda, el acuerdo y el tipo de alojamiento.",
    cost: "Depende de la vivienda y del acuerdo. Pendiente de validación para cada oferta.",
    commonMistakes: [
      "Enviar dinero antes de verificar la vivienda y quién la ofrece.",
      "Firmar sin entender gastos, duración o condiciones de devolución.",
      "No preguntar si el contrato sirve para acreditar el domicilio.",
    ],
    keywords: ["alquiler", "contrato", "habitación", "piso", "suministros", "cédula"],
    sources: [
      {
        label: "Habitatge Barcelona · guía de servicios y vivienda",
        href: "https://habitatge.barcelona/sites/default/files/-guia_serveis_i_ajuts_accessible_es.pdf",
      },
      {
        label: "Ajuntament de Barcelona · información de vivienda",
        href: "https://www.habitatge.barcelona/es",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
