# 1) Compilar el sitio (Next.js exporta HTML/CSS/JS estatico a /app/out)
FROM node:24-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# 2) Servir los archivos estaticos con nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

# 127.0.0.1 y no localhost: en Alpine localhost resuelve a ::1 y nginx solo escucha en IPv4,
# el chequeo fallaria siempre y Swarm nunca mandaria trafico al contenedor.
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
