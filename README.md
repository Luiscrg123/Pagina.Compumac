# Pagina.Compumac

Web de **Compumac E.I.R.L.**: servicio técnico de laptops, computadoras e impresoras en Piura, Perú, desde 2004.

- Sitio: [compumacperu.com](https://compumacperu.com)
- Facebook: [Compumac.piura](https://www.facebook.com/Compumac.piura/) · Instagram: [@compumac.piura](https://www.instagram.com/compumac.piura/)

## Stack

- [Next.js](https://nextjs.org) (App Router) con exportación estática: `next build` genera HTML/CSS/JS en `out/`.
- [Tailwind CSS](https://tailwindcss.com) y componentes de [shadcn/ui](https://ui.shadcn.com) (acordeón).
- [Motion](https://motion.dev) para animaciones y efectos de [Magic UI](https://magicui.design) (borde animado, carrusel, contador, aparición al hacer scroll).
- Íconos [Lucide](https://lucide.dev).

## Estructura

```
app/                 layout (metadata, fuentes) y página principal
components/site/     secciones de la web (hero, cotizador, reparaciones, etc.)
components/ui/       componentes de shadcn/ui y Magic UI
lib/site.ts          datos del negocio: teléfono, horario, servicios, marcas, preguntas
lib/hours.ts         estado abierto/cerrado con la hora de Lima
public/img/          logo, favicon, imagen para compartir y fotos
```

Para cambiar el teléfono, el horario, las fallas que se reparan o las preguntas frecuentes, basta con editar `lib/site.ts`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera out/
npm run lint
```

## Despliegue

En un VPS con [Dokploy](https://dokploy.com), a partir de este repositorio (build type: Dockerfile). El `Dockerfile` compila el sitio con Node y lo sirve con nginx. Cada `push` a `main` despliega automáticamente mediante un webhook de GitHub. Dokploy gestiona el certificado SSL (Let's Encrypt) de `compumacperu.com`.

## Fotos

Fotos de [Unsplash](https://unsplash.com) (licencia de Unsplash, uso comercial gratuito), optimizadas en `public/img/fotos/` en anchos de 320 a 1600 px:

| Archivo | Autor |
|---|---|
| `impresora` | [Jakub Żerdzicki](https://unsplash.com/photos/Da9qsu-0a00) |
| `laptop` | [Samsung Memory](https://unsplash.com/photos/6RcDLyy0s1I) |
| `computadora` | [Nathan Anderson](https://unsplash.com/photos/KHSPGJ3zP0M) |
| `diagnostico` | [Andrey Matveev](https://unsplash.com/photos/V_ESJ2MM2Us) |
| `empresas` | [Stanislav Staritsyn](https://unsplash.com/photos/j7cOdWrbKUI) |
| `placa-roja` | [Michael Dziedzic](https://unsplash.com/photos/aQYgUYwnCsM) |
