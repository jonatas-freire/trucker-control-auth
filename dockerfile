FROM node:14.18.1

WORKDIR /src/app/

COPY ./package*.json ./ 

RUN npm install

COPY . .

CMD npm start