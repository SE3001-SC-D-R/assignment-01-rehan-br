#Dockerfile for React Client

#Build react client

FROM node
WORKDIR /src/app
COPY package*.json ./

RUN npm install --silent

COPY . .
EXPOSE 3001

CMD ["npm","start"]

