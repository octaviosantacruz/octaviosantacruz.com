# Portfolio: revisión visual y propuesta de rediseño

Fecha: **2026-10-21 (America/Asuncion)**.
Checkout revisado: `e8084e28ec72a3c2ee8120a5426aa810000aafc2`, limpio al
comenzar. Estado: **propuesta para revisión del dueño; sin implementación ni
publicación**. El dueño pidió documentarla y revisarla después.

## Encargo y objetivos

El dueño dio libertad para replantear la presentación completa y pidió trabajar
especialmente UI, estilo y movimiento, incluyendo evaluar Framer Motion.
Confirmó que el sitio debe servir a **los tres públicos**:

- Responsables técnicos y selección que buscan incorporar su perfil.
- Usuarios y colaboradores interesados en sus proyectos propios.
- Equipos que necesitan consultoría o colaboración en seguridad.

Lectura de diseño: portfolio personal de ingeniería de seguridad, con lenguaje
editorial técnico y evidencia de trabajo. Una sola identidad y recorrido
principal, con entradas claras a los tres objetivos. La propuesta visual no
convierte los proyectos en productos maduros ni cambia su disponibilidad.

## Recomendación

**Rehacer la composición visual conservando Astro y la base estática bilingüe.**
El sitio actual funciona como un CV extenso: identidad fija a la izquierda y
documento a la derecha, con muchos párrafos, badges y chips. Para los objetivos
pedidos, conviene una portada más expresiva, proyectos con evidencia visual,
casos de trabajo y acceso directo a conversación profesional.

La mejora principal no es instalar una librería de animación. Es cambiar la
jerarquía: propuesta profesional, trabajo demostrado y caminos de contacto.
Sobre esa estructura, una capa de movimiento puede aportar carácter.

Conservar: rutas `/` y `/es/`, datos profesionales reales, estados honestos de
proyectos, enlaces de verificación, HTML semántico, acceso por teclado y
preferencias de movimiento. El rediseño no requiere un backend ni cambiar a
Next.js o convertir todo en React.

## Evidencia visual

- [Concepto de portada propuesto](design-review-2026-10-21/hero-concept.png).
- [Build local, escritorio ES, 1440 × 900](design-review-2026-10-21/current-desktop-es.png).
- [Build local, móvil ES, 390 × 844](design-review-2026-10-21/current-mobile-es.png).
- [Build local, laptop ES, 1024 × 768](design-review-2026-10-21/current-laptop-es.png).
- [Sitio público observado, escritorio EN](design-review-2026-10-21/public-desktop-en.png).
- [Resultado automático de accesibilidad](design-review-2026-10-21/a11y-desktop.json).

La imagen de propuesta se generó con la herramienta integrada `imagegen`, como
referencia de composición, color y tipografía. **No es una captura de una página
construida ni demuestra interacciones**. La escultura es una ilustración
conceptual, no una interfaz ni evidencia de los proyectos. El
[prompt final](design-review-2026-10-21/imagegen-prompt.txt) queda conservado.

## Diagnóstico de la presentación actual

### Composición y jerarquía

`src/styles/global.css:19` fija una columna de 34rem; desde 1024px se mantiene
el layout de dos columnas (`:828–848`). En la medición a 1024 × 768, la columna
de identidad conserva 544px y el contenedor principal queda en unos 465px;
la tarjeta de proyecto mide aproximadamente 369px. El contenido de la columna
fija tiene 822px de alto dentro de una caja de 768px. Es un problema de reparto
del espacio y adaptación a pantallas bajas, aunque no haya overflow horizontal.

En 1440 × 900, el primer proyecto empieza en torno a y=861. En móvil ES,
390 × 844, empieza en y=1859 y el documento mide 7767px de alto. En EN a
320 × 740 empieza en y=2086. Son coordenadas del build y viewport indicados,
no una métrica universal ni una medición de abandono.

La introducción del lateral y «Sobre mí» repiten especialidades antes de
mostrar trabajo (`src/components/Portfolio.astro:138–159,279–332`). Las métricas
y competencias ocupan espacio temprano. Los proyectos ya subieron de orden en
el checkout, pero siguen llegando después de esa introducción extensa.

**Cambio propuesto:** encabezado horizontal compacto, hero a todo el ancho y
primer proyecto visible o claramente anunciado al terminar el primer viewport.
Una vez presentada la persona, liberar el ancho para mostrar su trabajo.

### Color, tipografía y ritmo

El código declara parentesco visual con Switchboard/SIGEA: grafito frío,
Manrope, IBM Plex Mono y acento azul (`src/styles/global.css:4–17`). Eso aporta
consistencia, pero el portfolio personal puede tener una identidad más propia.
El fondo punteado, el brillo del nombre y el indicador parpadeante refuerzan
un lenguaje de herramienta técnica, mientras los proyectos son casi sólo texto.

Los títulos de sección miden 1.05rem, los chips 0.72rem y los badges 0.64rem
(`src/styles/global.css:337–343,400–407,519–526,572–584`). Se observaron badges
de 10.24px y chips de 11.52px en móvil. No se declara un fallo WCAG sólo por
ese tamaño; sí una oportunidad clara de mejorar legibilidad y jerarquía.

**Cambio propuesto:** menos metadatos visibles, títulos que organicen de verdad,
cuerpo de 16–18px, texto auxiliar relevante de 13–14px, más variedad en el
tamaño de las piezas y menos contenedores con la misma apariencia. Mantener
Manrope es viable; primero resolver escala, pesos, interlineado y composición.
IBM Plex Mono queda para fechas, stack breve y metadatos puntuales.

### Los proyectos necesitan demostrar trabajo

Las tres tarjetas repiten título, subtítulo, dos badges, metadatos, párrafo,
disponibilidad y chips (`src/components/Portfolio.astro:335–368`). En el build
no hay imágenes dentro de `main`; en `public/` sólo hay favicon e imagen OG.

**Cambio propuesto:** cada proyecto debe explicar el problema, la contribución
personal, una decisión técnica y lo que se puede observar hoy. Acompañarlo con
captura real revisada, diagrama explicado o evidencia pública adecuada. No
reemplazar pruebas con dashboards inventados, logos de clientes o resultados
supuestos. La ilustración de portada no sustituye esas evidencias.

Switchboard puede abrir la selección por su recorrido operativo; Custodia
demuestra relación con el trabajo profesional y las fuentes empresariales;
SIGEA muestra criterio de inventario, cambios y evidencia. Revisar los estados
con sus fuentes antes de publicar: este análisis no reaudita esos proyectos.
Server Ops podría entrar después como caso breve de operación y recuperación,
si agrega una historia distinta; no aumentar la lista sólo por tener más repos.

### Los tres objetivos todavía no tienen recorridos claros

El hero local ofrece proyectos y contacto. El cierre es genérico y contiene
Email/LinkedIn/GitHub (`src/components/Portfolio.astro:251–258,287–289,443–478`).
No hay una presentación concreta de formas de colaboración, casos desarrollados
ni un CV descargable en los assets revisados.

**Cambio propuesto:** un recorrido principal basado en trabajo, con enlaces
claros a experiencia, proyectos y colaboración. En contacto, distinguir
oportunidad laboral, consulta profesional y colaboración sobre un proyecto.
Pueden usar correo con asuntos sugeridos; no hace falta crear un formulario
sin backend. Incorporar CV sólo cuando exista el archivo real revisado.

La sección de colaboración debería describir problemas y entregables posibles
en PAM/identidad, protección de datos y automatización. Evitar paquetes,
garantías, testimonios o alcance comercial que el dueño no haya definido.

### Experiencia y credenciales

La experiencia contiene material valioso, pero se presenta como una lista larga
de responsabilidades y tecnologías (`src/components/Portfolio.astro:161–205`).
Los números actuales pertenecen a ámbitos distintos: compañías, incorporaciones
a PSM y tareas automatizadas. No sumarlos ni convertirlos en resultados de los
proyectos personales.

**Cambio propuesto:** destacar primero resultados y decisiones con contexto,
y dejar el resto para la trayectoria o el CV. Separar acreditaciones de
fabricante, cursos y credenciales expiradas. Conservar la nota de expiración
existente; no renovar ni reclasificar una credencial por estética. Eliminar
duplicaciones de texto, no hechos profesionales.

## Dirección visual recomendada

**Editorial técnico oscuro**, con superficies planas, composición asimétrica,
tipografía protagonista y una ilustración material sobria. El parentesco con
los proyectos puede conservarse en cuidado tipográfico y precisión, sin repetir
su tablero, color o fondo.

Lectura orientativa de la base: variación 4/10, movimiento 2/10, densidad 6/10.
Objetivo propuesto: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`,
`VISUAL_DENSITY: 3`. Son criterios de dirección, no puntuaciones de calidad.

| Uso | Color propuesto |
|---|---|
| Fondo grafito cálido | `#111310` |
| Superficie secundaria | `#1B1E18` |
| Texto principal | `#F0F1E9` |
| Texto secundario | `#B6BCAE` |
| Acento lima apagado | `#D4E577` |

Contraste calculado para colores sólidos: texto principal/fondo **16.42:1**,
secundario/fondo **9.60:1**, acento/fondo **13.58:1**. El botón con fondo lima
y texto grafito tiene la misma relación de 13.58:1. Son pares de tokens,
no una certificación de la futura página completa.

Usar el acento para CTA principal, enlaces seleccionados y un detalle del
visual. Reservar el resto al contenido. Mantener un solo tema coherente por
página, sin bloques que cambien de claro a oscuro por decoración. Un tema
claro completo puede evaluarse después, con revisión independiente de tokens.

Retirar en la propuesta el punteado omnipresente, el brillo por letra, los
números decorativos de secciones y el parpadeo de disponibilidad. Expresar
disponibilidad con texto actualizable. No añadir cursores personalizados,
scroll secuestrado, carruseles obligatorios ni efectos que dificulten leer.

## Composición propuesta

1. **Encabezado compacto.** Nombre, navegación breve, idioma y contacto.
   Preservar las rutas y los destinos existentes durante la transición.
2. **Hero.** Una frase de posición, una línea de apoyo y dos acciones claras.
   Borrador visual: «Seguridad que se puede operar.» Apoyo: «Identidad,
   accesos y automatización. De la operación al código.» Es copy propuesto,
   pendiente de que el dueño lo haga suyo. El rol y nombre deben seguir claros.
3. **Trabajo seleccionado.** Un proyecto principal con visual grande; los
   siguientes con composiciones más compactas. Explicar aportación, decisión,
   evidencia y estado. Enlaces a sitios reales, sin llamarlos demos funcionales
   si no lo son.
4. **Experiencia que respalda el trabajo.** Dos o tres resultados con contexto,
   y trayectoria concisa. No repetir el hero ni una nube de competencias.
5. **Cómo colaborar.** Problemas en los que el perfil puede aportar, alcance
   inicial y forma de conversar. Contacto orientado a los tres objetivos.
6. **Perfil y credenciales.** Formación, acreditaciones y enlaces verificables
   en un bloque más compacto. Casos detallados o CV amplían lo necesario.
7. **Cierre personal y contacto.** Correo visible y accesos profesionales,
   con una invitación concreta y sin un formulario ficticio.

El orden se prueba en móvil antes de cerrar desktop. Criterio orientativo:
propuesta y CTA dentro de 390 × 844 y primer proyecto cerca del siguiente
viewport; no interponer dos pantallas de biografía. Conservar los IDs de
anclas actuales cuando se reordenen bloques. Nuevas páginas de casos pueden
añadirse con equivalencia ES/EN, sin eliminar la información de la portada.

## Movimiento: dónde usarlo y con qué ritmo

Motion encaja como herramienta, conservando contenido estático y legible.
El proyecto no tiene React ni Motion instalados. La primera opción propuesta
es **Motion para JavaScript sobre Astro**, que permite animar HTML sin añadir
React. Si una galería o transición compartida necesita componentes React,
usar una isla concreta con Motion for React; no hidratar todo el portfolio.
Referencias oficiales: [Motion JS](https://motion.dev/docs/quick-start) y
[componentes e islas de Astro](https://docs.astro.build/en/guides/framework-components/).

| Elemento | Propuesta de movimiento | Propósito |
|---|---|---|
| Entrada del hero | Título y apoyo con desplazamiento de 12–20px y opacidad; duración aproximada 450–650ms, desfases de 60–90ms. Terminar la secuencia principal antes de 900ms. | Presentar una jerarquía, sin esperar para leer o usar el CTA. |
| Visual editorial | Entrada única suave. Si aporta, desplazamiento ligado al scroll de 16–24px en desktop, desactivado en móvil y con movimiento reducido. | Dar profundidad a la composición. No es un visor 3D obligatorio. |
| Proyecto destacado | Revelar el visual y luego su texto al entrar en viewport; no animar una sección de 1900px como una sola unidad. | Guiar la lectura del caso. |
| Enlaces y CTA | Estado de foco visible, subrayado y flecha con recorrido de 3–4px; feedback de unos 160–220ms. | Comunicar interacción con respuesta inmediata. |
| Imagen de proyecto | Zoom muy leve, máximo aproximado 1.02, sólo si el área es interactiva. | Dar feedback sin sugerir que toda tarjeta no enlazada se puede pulsar. |
| Navegación entre casos | Transición breve de opacidad o continuidad de imagen, si se crean páginas de detalle. | Mantener orientación. Respetar atrás, URL y teclado. |

Los valores son un punto de partida para prototipar, no una implementación.
Con `prefers-reduced-motion`, retirar parallax y desplazamientos grandes;
mantener contenido y acciones disponibles. Si se usa React, configurar su
[soporte de movimiento reducido](https://motion.dev/docs/react-accessibility).
Evitar esconder el contenido hasta que llegue JavaScript y repetir la entrada
cada vez que la persona vuelve a un bloque.

El rediseño no necesita GSAP, Lenis y Motion a la vez. Elegir una herramienta
para la coreografía y CSS para estados simples. Un scroll normal y una buena
composición tienen prioridad sobre añadir efectos.

## Revisión técnica y accesibilidad

Aspectos presentes que conviene conservar:

- Layout y contenido estáticos con Astro, fuentes locales y metadatos de persona.
- Canonical, hreflang ES/EN/x-default, OG y sitemap en el build.
- Skip link, foco visible, HTML semántico y etiquetas de idioma.
- Cambio de idioma que conserva el hash y scroll-spy funcional en la prueba.
- `prefers-reduced-motion`: se observó el indicador sin animación y todas las
  secciones visibles, con `animation: none`.

Mejoras con evidencia de archivo:

- `src/components/Portfolio.astro:322`: `aria-label` sobre un `div` sin rol
  semántico adecuado; el auditor lo dejó como revisión incompleta. Usar un
  grupo etiquetado apropiado o lista descriptiva para las métricas.
- `src/styles/global.css:913–930`: el selector de idioma mide aproximadamente
  38 × 30px en móvil. Ampliar el objetivo táctil hacia 44px sin recargar el header.
- `src/styles/global.css:317–319`: las anclas no tienen `scroll-margin-top`.
  Incorporarlo si el rediseño introduce un header sticky, para que no cubra
  el título o foco de destino.
- `src/components/Portfolio.astro:10–261`: contenido ES/EN extenso dentro del
  componente. Extraer datos tipados y bloques con responsabilidades claras.
- `i18n/translations.ts` y `src/i18n/translations.ts`: dos archivos divergentes;
  los imports revisados usan `src/i18n`. Consolidar la autoridad antes de editar
  copy, y actualizar la referencia histórica de AGENTS cuando corresponda.
- `src/layouts/BaseLayout.astro:5–12`: se importan ocho estilos de fuentes.
  El build emitió 40 WOFF2; el navegador solicitó seis archivos, unos 90KB de
  transferencia en esa lectura. No afirmar que descargó los 40. Revisar pesos,
  subsets y posible fuente variable junto con la nueva tipografía.
- `public/og-image.png` y metadatos: rehacer el arte social con la nueva
  identidad y comprobar que el texto alternativo describa la imagen real.
- `package.json`: incorporar una comprobación de tipos explícita al gate, además
  de build y revisión visual. No sustituir validación móvil por compilar.

Guía consultada: [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
Se aplican los criterios relevantes para un portfolio, sin trasladar reglas de
formularios o tablas a elementos inexistentes.

## Diferencia entre sitio público y checkout

Se observó el apex público por navegador el 21/10. Conserva el orden «About,
Experience, Certifications, Projects…», dos proyectos (Switchboard/Custodia)
y ningún enlace dentro de sus tarjetas. El checkout revisado contiene
Switchboard, SIGEA y Custodia, con enlaces a los sitios de los dos primeros,
proyectos antes de experiencia y dos CTA iniciales.

Por tanto, el sitio público observado y el checkout **no presentan la misma
versión de contenido**. Esto no identifica por sí solo el commit desplegado ni
verifica el proveedor de hosting. No confundir una revisión del build local
con un despliegue ni repetir «ya está publicado» por tener el código.

El rediseño y la salida prevista de Cloudflare Pages son trabajos distintos.
Preparar contenido, assets y aceptación antes del corte de hosting. No cambiar
DNS ni publicar sólo para revisar la nueva UI. Mantener la distinción entre
sitio informativo de un proyecto y demo pública, conforme a `CROSS-009`.

## Plan para una próxima implementación

| Entrega | Resultado revisable | Aceptación |
|---|---|---|
| Dirección visual y contenido | Hero desktop/móvil, tokens y mapa de mensajes para los tres públicos. | El dueño reconoce su perfil, entiende el estilo y puede elegir qué ajustar antes de extender la página. La referencia generada es punto de partida, no diseño congelado. |
| Presentación base | Header, hero y proyectos seleccionados en Astro. | Rutas y anclas conservadas; título, CTA y primer proyecto bien jerarquizados a 390, 768, 1024 y 1440px, también en ES/EN. |
| Casos y contacto | Evidencia real por proyecto, experiencia breve, colaboración y credenciales. | Ninguna captura expone datos privados; enlaces reales; estados actuales; sin métricas o demos inventadas. CV sólo si existe y fue revisado. |
| Movimiento | Coreografía con Motion JS o islas justificadas y estados CSS. | JS desactivado conserva contenido; movimiento reducido funciona; teclado/foco y scroll siguen utilizables; animaciones responden sin bloquear. |
| Calidad y entrega | Build, tipos, navegación, auditoría, assets y arte social. | Enlaces y metadatos correctos, sin overflow a 320px, legible con zoom 200%, foco no cubierto. Medir rendimiento sobre build servido y luego entorno real; no prometer métricas de producción con una prueba local. |
| Publicación separada | Artefacto aceptado y plan de despliegue/rollback. | Pedido explícito del dueño y comprobación posterior en el sitio público. La migración de hosting no se da por aprobada con la aprobación estética. |

Primer corte recomendado para retomar: **construir hero y un proyecto completo,
en móvil y escritorio**, antes de rehacer todas las secciones o animar la página
entera. Ese corte permite validar estilo, legibilidad y esfuerzo con algo real.

## Verificación realizada y límites

- `npm run build`: **OK**, dos páginas estáticas y sitemap.
- `npm exec astro check`: **0 errores, 0 advertencias, 0 hints** en 11 archivos.
- Navegador aislado sobre build estático en loopback efímero, después de una
  lectura inicial del servidor dev ya existente. No se modificó ese servicio.
- Capturas y geometría en ES a 1440 × 900, 1024 × 768 y 390 × 844; comprobación
  EN a 320 × 740. Sin overflow horizontal en las mediciones locales indicadas.
- Cambio real ES→EN desde `#proyectos`: conservó hash y mostró `lang="en"`.
  Primer Tab en ES enfocó «Saltar al contenido» con contorno visible.
- axe-core 4.12.1 en escritorio ES: **0 infracciones detectadas, 35 reglas
  aprobadas y 2 revisiones incompletas**. Una por ARIA de métricas; otra por
  contraste no resuelto sobre gradientes y contenido dividido en letras. Esto
  **no certifica contraste completo ni accesibilidad integral**.
- Paleta propuesta: cálculo de contraste de pares sólidos, no medición de
  todas las composiciones del concepto raster.
- No se midieron Core Web Vitals reales, tasa de conversión ni comportamiento
  de visitantes; tampoco se validaron individualmente credenciales externas.
- La revisión y el concepto no cambiaron `src/`, `public/`, dependencias,
  servicios, DNS ni el sitio publicado. Archivos de documentación locales,
  sin commit ni push.

## Para revisar después

El dueño puede revisar primero la imagen de concepto, después composición y
movimiento. Quedan abiertos el copy final del hero, la selección y tratamiento
de evidencias, el alcance de colaboración que quiere ofrecer y la decisión de
adoptar o ajustar esta paleta. No se necesita resolver esas elecciones para
conservar este diagnóstico; no se inicia el rediseño por haberlo documentado.
