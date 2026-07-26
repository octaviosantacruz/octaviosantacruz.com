# octaviosantacruz.com

Portfolio personal de Octavio Santacruz. Sitio estático construido con [Astro](https://astro.build), pensado para desplegarse en Cloudflare Pages.

Esta es la fase de **andamiaje técnico**: estructura, SEO técnico y pipeline de deploy. El diseño y el contenido reales se completan en una fase posterior.

## Stack

- [Astro](https://astro.build) (salida estática, `output: "static"`)
- TypeScript en modo `strict`
- Sin frameworks de UI adicionales (React, Vue, etc.) — HTML/CSS mínimo
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) para generar `sitemap-index.xml`

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg / favicon.ico
│   └── robots.txt
├── src/
│   ├── consts.ts            # datos del sitio y de la persona (título, descripción, redes)
│   ├── layouts/
│   │   └── BaseLayout.astro # <head>: meta tags, Open Graph, Twitter Cards, JSON-LD Person
│   ├── pages/
│   │   └── index.astro      # landing de una sola página con anclas
│   └── styles/
│       └── global.css       # estilos base, responsive
├── astro.config.mjs
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                              |
| :----------------- | :-------------------------------------------------- |
| `npm install`       | Instala las dependencias                            |
| `npm run dev`       | Levanta el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Compila el sitio de producción en `./dist/`         |
| `npm run preview`   | Previsualiza el build localmente antes de desplegar |

## Pendientes para la fase de contenido

- Reemplazar los placeholders de `src/consts.ts` (`PERSON.sameAs`: LinkedIn y GitHub reales).
- Completar el contenido real de cada sección en `src/pages/index.astro` (Sobre mí, Experiencia, Certificaciones, Proyectos, Contacto).
- Agregar una imagen `public/og-image.png` (1200×630) para Open Graph / Twitter Cards, referenciada desde `BaseLayout.astro`.
- Diseño visual definitivo (esto es intencionalmente un esqueleto sin estilos elaborados).

## Deploy a Cloudflare Pages vía GitHub

### 1. Crear el repositorio en GitHub

```sh
gh repo create octaviosantacruz-portfolio --public --source=. --remote=origin
```

O manualmente desde github.com: crear un repo vacío (sin README, sin licencia) y luego:

```sh
git remote add origin git@github.com:<tu-usuario>/octaviosantacruz-portfolio.git
```

### 2. Hacer el primer push

```sh
git add -A
git commit -m "Initial commit: Astro scaffold with technical SEO"
git branch -M main
git push -u origin main
```

### 3. Conectar el repo a Cloudflare Pages

1. Entrar al [dashboard de Cloudflare](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → pestaña **Pages** → **Connect to Git**.
2. Autorizar el acceso a GitHub y seleccionar el repositorio `octaviosantacruz-portfolio`.
3. Configurar el build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (raíz del repo)
4. Variables de entorno: ninguna requerida en esta fase.
5. Guardar y desplegar. Cloudflare Pages construirá y publicará el sitio en un subdominio `*.pages.dev`.

### 4. Configurar el dominio personalizado

1. En el proyecto de Cloudflare Pages → **Custom domains** → **Set up a custom domain**.
2. Agregar `octaviosantacruz.com` (y opcionalmente `www.octaviosantacruz.com`).
3. Si el dominio ya está en Cloudflare DNS, los registros se configuran automáticamente. Si está en otro proveedor, apuntar el DNS según las instrucciones que muestra el dashboard.

### 5. Deploys posteriores

Cada `git push` a `main` dispara un nuevo build y deploy automático en Cloudflare Pages. Los pushes a otras ramas generan *preview deployments* con una URL única.

## SEO técnico implementado

- Meta tags (`title`, `description`, `canonical`) por página, centralizados en `BaseLayout.astro`.
- Open Graph y Twitter Cards.
- JSON-LD tipo [`Person`](https://schema.org/Person) con nombre, rol y ubicación.
- `sitemap-index.xml` autogenerado por `@astrojs/sitemap` en cada build.
- `robots.txt` permitiendo indexación y referenciando el sitemap.
