# Pagina.Compumac

Landing page de **Compumac** — venta de laptops, computadoras, impresoras y tintas, con servicio técnico especializado en Piura, Perú desde 2004.

- Sitio: [compumacperu.com](https://compumacperu.com)
- Facebook: [Compumac.piura](https://www.facebook.com/Compumac.piura/)
- Instagram: [@compumac.piura](https://www.instagram.com/compumac.piura/)

## Stack

Sitio estático (HTML/CSS/JS, sin frameworks ni build step), servido con Nginx dentro de un contenedor Docker.

```
index.html   # contenido de la página
style.css    # estilos (tema rojo de la marca)
script.js    # menú móvil y pequeñas interacciones
Dockerfile   # imagen nginx:alpine que sirve el sitio
nginx.conf   # configuración del servidor
```

## Desarrollo local

Al ser un sitio estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
```

## Despliegue

Desplegado en un VPS mediante [Dokploy](https://dokploy.com), a partir de este repositorio (build type: Dockerfile). El dominio `compumacperu.com` apunta por DNS al VPS y Dokploy gestiona el certificado SSL (Let's Encrypt).
