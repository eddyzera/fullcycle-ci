FROM node:latest

WORKDIR /app

COPY . .

RUN npm i && node src/index.js

CMD [ "./src/index.js" ]