FROM node:20.15-alpine

WORKDIR /app-backend

COPY package* .

RUN npm install 

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]