export type TaskCategory = "Trámites" | "Vivienda" | "Vida en Barcelona";

export type DemoTask = {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  guideSlug: string;
  statusLabel: string;
};

export const tasks: DemoTask[] = [
  {
    id: "nie-number",
    title: "Confirma tu número NIE",
    description: "Localiza tu número en la resolución o en tu documentación.",
    category: "Trámites",
    guideSlug: "nie",
    statusLabel: "Completada",
  },
  {
    id: "housing-confirm",
    title: "Guarda los datos de tu alojamiento",
    description: "Ten a mano el contrato y confirma cómo acreditarás el domicilio.",
    category: "Vivienda",
    guideSlug: "vivienda",
    statusLabel: "Completada",
  },
  {
    id: "tie-review",
    title: "Revisa si necesitas solicitar la TIE",
    description: "Confirma la duración de tu autorización de estancia por estudios.",
    category: "Trámites",
    guideSlug: "tie",
    statusLabel: "Siguiente paso",
  },
  {
    id: "padron-docs",
    title: "Prepara el empadronamiento",
    description: "Comprueba qué documentos del domicilio corresponden a tu caso.",
    category: "Trámites",
    guideSlug: "empadronamiento",
    statusLabel: "Pendiente",
  },
  {
    id: "health-card",
    title: "Comprueba tu acceso a la TSI",
    description: "Consulta qué cobertura aplica y dónde solicitar la tarjeta.",
    category: "Trámites",
    guideSlug: "tarjeta-sanitaria",
    statusLabel: "Pendiente",
  },
  {
    id: "transport-pass",
    title: "Elige un título de transporte",
    description: "Compara zonas y trayectos para escoger el abono adecuado.",
    category: "Vida en Barcelona",
    guideSlug: "movilidad",
    statusLabel: "Pendiente",
  },
];
