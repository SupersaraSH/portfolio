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
- **Tipografías**: `next/font/google` (JetBrains Mono — monospace, estética de programador)
- **Deploy**: AWS S3 + CloudFront (infraestructura gestionada con Terraform)
- **Gestor de paquetes**: pnpm 11

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

Sara cambia ese valor, hace commit, push, y GitHub Actions redeploya automáticamente en AWS.

### Organización de componentes

- `components/layout/` — Header (con el toggle), Footer, wrappers de página
- `components/ui/` — Primitivos reutilizables: Button, Card, Badge, Section
- `components/rigger/` — Específicos del rigger: VimeoEmbed, ProjectCard con créditos, FilmList
- `components/dev/` — Específicos del dev: TechStack, DevProjectCard, ProjectShowcase
- `components/shared/` — Usados en ambos modos: Hero, AboutBlock, ContactBlock

## Identidad visual

### Concepto

Dos vistas con carácter propio, unidas por la misma tipografía monospace y el verde arcade como acento signature.

- **Vista dev** (`/dev`, `/about`, `/contact`) — clara, estética de editor de código / terminal. La referencia visual es un IDE como VS Code: fondo blanco, texto oscuro, acento en verde brillante.
- **Vista rigger** (`/rigger`) — oscura, cinematográfica. El fondo profundo da máximo contraste a los vídeos y reels.

La inspiración estética es el juego **Space Invaders**: minimalismo, píxeles, verde fosforescente, contraste alto. No literalmente (sin sprites ni pixel art), sino como espíritu — lo esencial, nada superfluo.

### Colores

**Modo claro** — usado en `/dev` y páginas compartidas.

- Fondo: `#FFFFFF`
- Superficie (cards, bloques sutiles): `#FAFAF7`
- Texto principal: `#1A2E44` (navy — suficiente contraste sobre blanco sin ser puro negro)
- Texto secundario: `#4A5D72`
- Acento principal: `#00FF41` (arcade-green — el verde Space Invaders, usado con moderación)
- Acento secundario: `#00FFFF` (arcade-cyan), `#FF2200` (arcade-red) — para estados, badges, énfasis puntual
- Borde: `#E5E5E0`

**Modo oscuro** — usado en `/rigger`.

- Fondo: `#0F1A2A`
- Superficie: `#1A2A3F`
- Texto principal: `#A8C8E0` (warm — azul frío suave)
- Texto secundario: `#4A7A9B`
- Acento: `#00FF41` (mismo arcade-green — destaca aún más sobre oscuro)
- Borde: `#2A3B52`

Tokens Tailwind definidos en `globals.css`: `arcade-green`, `arcade-cyan`, `arcade-red`, `navy`, `navy-muted`, `surface`, `deep`, `deep-surface`, `warm`, `warm-muted`, `stroke`, `stroke-dark`.

### Tipografía

Una sola familia: **JetBrains Mono** (Google Fonts). Monospace, diseñada para código — refuerza la estética de programador en ambas vistas.

Escala orientativa:

- Nombre del hero: 64–96px, peso 700–800
- Títulos de sección: 32–48px, peso 600
- Cuerpo: 16–18px, peso 400, line-height 1.6–1.7
- Captions / labels: 12–14px, uppercase, tracking-widest

### Principios de diseño

1. **Espacio en blanco como característica.** Mucho aire; sin miedo al vacío.
2. **Estética de programador.** La referencia visual es un editor de código / terminal. Monospace, contraste alto, verde fosforescente como único acento de color.
3. **Minimalismo no austeridad.** Pocos elementos, pero cada uno bien ejecutado. No saturar.
4. **El trabajo protagonista.** En `/rigger` el reel y los proyectos dominan; la UI se aparta.
5. **Una idea por sección.** No agrupar tres conceptos en un bloque.
6. **Movimiento mínimo, solo CSS.** Fades suaves al cargar/hacer scroll. Nada de rebotes ni animaciones llamativas.

### Qué evitar

- Tipografías serif o sans-serif genéricas (Roboto, Inter, Open Sans, Poppins, Fraunces) — solo JetBrains Mono.
- Gradientes, glassmorphism, glows de neón, halos blur, fondos con mesh.
- Emojis en la UI.
- Ilustraciones de stock o clusters de iconos decorativos.
- Acento dorado (`#E8B620`) — era la paleta anterior; el acento ahora es arcade-green.
- El toggle sigue usando `localStorage` pero ya no necesita dorado como acento.

## El toggle de vista

Persistente en el header. Dos estados visibles: **Rigger** / **Developer**.

- Diseño distintivo — usa el acento arcade-green.
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
