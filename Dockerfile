FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css script.js /usr/share/nginx/html/

EXPOSE 80

# 127.0.0.1 y no localhost: en Alpine localhost resuelve a ::1 y nginx solo escucha en IPv4,
# el chequeo fallaria siempre y Swarm nunca mandaria trafico al contenedor.
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
