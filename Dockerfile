# Estágio de build
FROM node:20-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copiar os arquivos de build do estágio anterior
COPY --from=build /app/dist/bigbasket-eccomerce/browser /usr/share/nginx/html

# Configuração para SPA (Single Page Application)
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]