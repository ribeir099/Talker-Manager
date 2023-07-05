FROM node:16.14.2

# Diretório padrão de execução
WORKDIR /app

# Instala as dependências Node
COPY package*.json ./ 
RUN npm install

# Usuário linux padrão do container, não é recomendado usar root
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# Substitui o comando padrão da imagem do node
CMD [ "/bin/bash" ]
