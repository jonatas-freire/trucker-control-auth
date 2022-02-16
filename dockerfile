FROM node:14.18.1

WORKDIR /app

COPY ./package*.json ./ 
COPY ./yarn*. ./ 

RUN yarn 

COPY . .

RUN npx prisma generate

CMD npm start