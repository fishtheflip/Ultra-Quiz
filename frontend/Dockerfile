FROM node:14.17.6

WORKDIR /frontend

COPY package*.json ./

RUN npm install --only=prod

COPY . .

RUN npm run build

