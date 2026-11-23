# OLA · Estudiantes en Barcelona

Prototipo visual para acompañar a estudiantes internacionales en sus primeros pasos en Barcelona. Es una demostración de frontend; no incluye backend ni autenticación.

## Empezar

    npm run dev

Abre http://localhost:3000.

## Rutas

- / — bienvenida y presentación del producto.
- /onboarding — cuestionario de siete preguntas y confirmación.
- /dashboard — progreso, estado del perfil ficticio y próximos pasos.
- /tramites — seis guías.
- /tramites/[slug] — detalle de las guías NIE, TIE, empadronamiento, movilidad, tarjeta sanitaria y vivienda.
- /checklist — tareas con filtros y progreso temporal.
- /buscar — búsqueda en guías, documentos y conceptos.

## Interacciones

El onboarding permite elegir opciones, avanzar, retroceder y revisar el resumen. Las casillas de la checklist se actualizan al instante y el dashboard refleja el progreso mientras la app siga abierta. El buscador filtra al escribir; en el espacio de la aplicación, Cmd/Ctrl + K abre la búsqueda. La barra lateral se transforma en navegación inferior en móvil.

Los cambios son temporales y se pierden al recargar. El perfil de ejemplo usa una estudiante ficticia peruana con alojamiento y NIE confirmados, y TIE y empadronamiento pendientes.

## Guías

Cada guía incluye organismo responsable, pasos, documentación, errores frecuentes y enlaces oficiales. Requisitos que varían según la situación aparecen como pendientes de validación. La tarifa de T-usual se presenta con el importe consultado para 2026 y un recordatorio de revisar el precio vigente.

## Comprobaciones

    npx tsc --noEmit
    npm run lint
    npm run build

Los iconos SVG están implementados localmente. No se añadieron dependencias.

## Publicar una demo en GitHub Pages

El workflow de `.github/workflows/deploy-pages.yml` publica la versión estática al hacer push a `main`.

1. Crea un repositorio vacío en GitHub (sin README inicial). En cuentas con GitHub Free, Pages requiere que el repositorio sea público.
2. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
3. Conecta este checkout al repositorio y sube `main`:

       git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
       git add -A
       git commit -m "Prepare OLA for GitHub Pages"
       git push -u origin main

Cuando termine el workflow, GitHub mostrará el enlace en **Settings → Pages**. Los siguientes pushes a `main` publicarán los cambios automáticamente.
