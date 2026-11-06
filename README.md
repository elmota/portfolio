# Portafolio

Sitio estático hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

## Desarrollo

Requiere Node 22.23.4 o superior. El gestor de paquetes es **pnpm 10** (fijado en `package.json` y activado con corepack).

```bash
corepack enable
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
```

## Contenido

- Landing: `src/pages/index.astro`
- Casos de estudio: un archivo Markdown por caso en `src/content/casos/`. Los datos pendientes están marcados como `[Completar: ...]` y se resaltan en amarillo; búscalos antes de publicar:

```bash
grep -rn "Completar\|TU_CORREO\|TU_LINKEDIN\|TU_GITHUB\|Tu nombre" src
```

## Seguridad de la cadena de suministro

- `pnpm-workspace.yaml`: `minimumReleaseAge` de 3 días y ningún script de instalación permitido.
- Las versiones de Astro y pnpm están fijadas; el lockfile se versiona y el CI instala con `--frozen-lockfile`.
- Las GitHub Actions del workflow están fijadas por SHA.

## Despliegue en GitHub Pages

1. Crea el repositorio en GitHub y sube la rama `main`.
2. En **Settings → Pages**, elige **Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio.

La URL depende del nombre del repositorio:

| Repositorio | URL |
|---|---|
| `portfolio` | `https://<usuario>.github.io/portfolio/` |
| `<usuario>.github.io` | `https://<usuario>.github.io/` |

El workflow calcula `SITE_URL` y `BASE_PATH` automáticamente; no hay que editar `astro.config.mjs`.

`legacy/` conserva la primera versión en HTML plano y puede borrarse.
