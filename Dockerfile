# Use uma imagem base do Node.js
FROM node:21-alpine

# Diretório de trabalho
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Expõe a porta usada pelo servidor Vite durante o desenvolvimento
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "dev"]