FROM node:14.18.1

WORKDIR /src/app/

COPY ./package*.json ./ 

RUN npm install

COPY . .

RUN npm i --save-dev @prisma/client@3.4.2

RUN npx prisma generate

CMD npm start