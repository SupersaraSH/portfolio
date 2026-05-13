# AGENTS.md — Portfolio Sara Hoces

## Sobre el proyecto

Web personal de **Sara Hoces Saez**.

Sara tiene más de 10 años de experiencia como Character Rigger en animación 3D, películas, series y VFX. Recientemente ha terminado un bootcamp de Full Stack Web Developer (Socratech, noviembre 2025) y prepara una transición hacia el desarrollo web mientras sigue trabajando en su estudio actual de rigging.

La web tiene un doble propósito:

- Mostrar su carrera de rigging 3D (películas, proyectos, reel)
- Mostrar sus habilidades de desarrollo web (tecnologías, proyectos, casos)

Un toggle en el header permite a quien visita la web cambiar entre los dos "modos". La **vista principal** que se renderiza en `/` es configurable mediante una sola variable, así Sara puede cambiar el foco según el tipo de oferta a la que esté aplicando en cada momento.

## Stack técnico

- **Framework**: Next.js 16.x con App Router y Turbopack
- **Lenguaje**: TypeScript (modo estricto)
- **Estilos**: Tailwind CSS 4 (usando el theme inline con `@theme`)
- **Tipografías**: `next/font/google` (Fraunces + Inter)
- **Deploy**: Vercel
- **Gestor de paquetes**: npm

El proyecto NO usa carpeta `src/`. Las rutas están en `/app`, y el código compartido en `/components`, `/lib`, `/content`, etc., directamente en la raíz.

## Arquitectura del sitio

### Rutas

- `/` — Landing. Renderiza la vista rigger o la vista dev según la configuración `primaryView`.
- `/rigger` — Portfolio completo de rigger (tema oscuro).
- `/dev` — Portfolio completo de web developer (tema claro).
- `/about` — Bio compartida. Asume y abraza la narrativa de transición — no esconde ninguna de las dos carreras.
- `/contact` — Email, LinkedIn, GitHub y CV descargable (PDF en `/public`).

### Configuración de la vista principal

Un único valor de configuración controla qué vista se muestra en `/`. Vive en `config/site.ts`:

```typescript
export const siteConfig = {
  primaryView: 'rigger' as 'rigger' | 'dev',
  // ...otros ajustes globales del sitio
};
```

Sara cambia ese valor, hace commit, push, y Vercel redeploya en segundos.

### Organización de componentes

- `components/layout/` — Header (con el toggle), Footer, wrappers de página
- `components/ui/` — Primitivos reutilizables: Button, Card, Badge, Section
- `components/rigger/` — Específicos del rigger: VimeoEmbed, ProjectCard con créditos, FilmList
- `components/dev/` — Específicos del dev: TechStack, DevProjectCard, ProjectShowcase
- `components/shared/` — Usados en ambos modos: Hero, AboutBlock, ContactBlock

## Identidad visual

### Colores

**Modo claro** — usado en `/dev` y páginas compartidas.

- Fondo: `#FFFFFF`
- Superficie (cards, bloques sutiles): `#FAFAF7`
- Texto principal: `#1A2E44` (el navy del CV de Sara)
- Texto secundario: `#4A5D72`
- Acento: `#E8B620` (el amarillo/dorado del CV)
- Borde: `#E5E5E0`

**Modo oscuro** — usado en `/rigger` y en cualquier sección de showcase de reels.

- Fondo: `#0F1A2A` (más profundo que el navy del CV, da máximo contraste al video)
- Superficie: `#1A2A3F`
- Texto principal: `#F4F1E8` (blanco roto cálido)
- Texto secundario: `#A8B5C4`
- Acento: `#E8B620` (mismo amarillo — destaca aún más sobre oscuro)
- Borde: `#2A3B52`

Definir estos colores como tokens del theme de Tailwind (`bg-navy`, `text-navy`, `accent-gold`, etc.) para que el markup se mantenga legible.

### Tipografía

- **Display / Titulares**: **Fraunces** (Google Fonts, variable). Para nombre del hero, títulos de sección, números grandes.
- **Body / UI**: **Inter** (Google Fonts, variable). Para párrafos, navegación, botones, captions.

Cargar ambas vía `next/font/google` y exponerlas como variables CSS.

Escala tipográfica orientativa:

- Nombre del hero: 64–96px, Fraunces, peso 400–500
- Títulos de sección: 32–48px, Fraunces
- Subtítulos: 20–24px, Inter, peso 500
- Cuerpo: 16–18px, Inter, peso 400, line-height 1.6–1.7
- Pequeño / captions: 14px, Inter

### Principios de diseño

1. **El espacio en blanco es una característica.** Mucho aire para respirar; sin miedo al vacío.
2. **Tipografía por encima de la decoración.** Los titulares grandes y seguros llevan el diseño — no los gráficos.
3. **El trabajo es el protagonista.** En `/rigger` el reel y los visuales de los proyectos deben dominar. La UI se aparta.
4. **Una idea por sección.** No empaquetar tres conceptos en un solo bloque.
5. **Movimiento sutil únicamente.** Fades suaves y slides al hacer scroll. Nada que rebote, gire o reclame atención.
6. **Asimetría con ritmo.** Variar anchos y desplazar elementos a propósito, pero manteniendo una sensación de estructura.

### Qué evitar

- Estética genérica de "portfolio hecho con IA": gradientes morados, glassmorphism, glows neón, fondos con mesh, halos blur.
- Emojis en la UI (el CV no los usa; mantener la coherencia).
- Ilustraciones de stock o clusters de iconos como decoración.
- Tipografías sobreusadas: Roboto, Open Sans, Lato, Poppins.
- "Modo oscuro" que es solo invertir los colores del claro — diseñar el oscuro de forma intencional.
- Spinners que bloquean el contenido — usar skeletons o placeholders conscientes del contenido.

## El toggle de vista

Persistente en el header. Dos estados visibles: **Rigger** / **Developer**.

- Diseño distintivo — usa el acento dorado.
- Persiste entre navegaciones usando `localStorage`.
- Al hacer click navega a la página equivalente del otro modo cuando aplique (por ejemplo `/rigger/projects` ↔ `/dev/projects`), o a la raíz de esa sección si no hay equivalencia.
- **No** modifica la configuración `primaryView`. Eso es la palanca de Sara para decidir qué se muestra en `/` a un visitante nuevo.

## Fuentes de contenido

El contenido vive en archivos TypeScript bajo `/content`:

- `content/rigger/projects.ts` — Array de proyectos de rigging: título, estudio, año, rol, software, descripción, URLs de medios.
- `content/rigger/reel.ts` — URL de Vimeo del reel del estudio + caption breve.
- `content/dev/projects.ts` — Proyectos web (Lynve y futuros construidos con Claude Code).
- `content/dev/skills.ts` — Stack técnico agrupado por categoría.
- `content/shared/about.ts` — Texto de la bio en castellano (y en inglés cuando se añada).
- `content/shared/cv.ts` — Ruta al PDF del CV en `/public`.

## Convenciones de código

- `.tsx` para componentes, `.ts` para lógica y datos.
- Componentes: PascalCase, uno por archivo, exports nombrados preferidos.
- Usar clases utility de Tailwind. Evitar CSS custom salvo que sea estrictamente necesario.
- Server Components por defecto. Marcar `"use client"` solo cuando se necesita interactividad o hooks.
- Imágenes: siempre vía `next/image`.
- Vimeo: componente dedicado `<VimeoEmbed>` para los reels.
- Texto de contenido en castellano; código, comentarios e identificadores en inglés.
- TypeScript: preferir `type` antes que `interface` para props; evitar `any`; activar strict null checks.

## Reglas de trabajo para el agente

1. **Construye de forma incremental.** Un componente o una página cada vez. Confirma antes de seguir con la siguiente.
2. **Sugiere verificación.** Tras cambios significativos, recomienda abrir el navegador para comprobar antes de continuar.
3. **Nunca añadas una dependencia sin preguntar.** Especialmente librerías de UI — queremos mantener el bundle pequeño y el diseño distintivo.
4. **Mantén los diffs enfocados.** No refactorices código no relacionado mientras añades una funcionalidad.
5. **Marca claramente el contenido placeholder** con `// TODO: Sara rellena con contenido real`.
6. **La accesibilidad no es negociable.** HTML semántico, alt en imágenes, navegación por teclado, contraste suficiente en ambos temas.
7. **Pregunta cuando haya ambigüedad.** Si una decisión puede ir por varios caminos razonables, propón opciones en lugar de adivinar.

## Ámbito de trabajo y seguridad

- Limitar todas las operaciones (lectura, escritura, búsqueda, ejecución de comandos) a `d:\webDeveloper\Claude_Code\sarahoces-portfolio\` y sus subcarpetas.
- No acceder a rutas absolutas fuera de este directorio. Si se necesita algo de fuera, pedir confirmación al usuario antes de actuar.
- No invocar las herramientas MCP de Google (Gmail, Google Calendar, Google Drive) en este proyecto. Si en algún momento fueran necesarias, avisar y esperar aprobación explícita.
- Antes de cualquier operación destructiva (borrar archivos, reset de git, etc.), describir lo que se va a hacer y esperar confirmación.

## Fuera del alcance (de momento)

- Integración con CMS. El contenido se queda en archivos TypeScript hasta que el proyecto crezca lo suficiente para justificar uno.
- Soporte multi-idioma. Solo castellano en el lanzamiento. La versión en inglés es una fase 2 planificada.
- Blog. Considerado para más adelante.
- Animaciones más allá de fades sutiles al hacer scroll. Nada de GSAP ni Framer Motion hasta que haya una necesidad concreta.
- Backend. El portfolio es un sitio estático. El backend vive solo dentro de los _proyectos_ que se muestran.
