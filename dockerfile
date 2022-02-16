FROM node:14.18.1

WORKDIR /src/app/

COPY ./package*.json ./ 

RUN npm install

COPY . .

RUN npx prisma generate

CMD npm start