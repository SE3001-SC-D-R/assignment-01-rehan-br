FROM node
RUN mkdir -p /usr/src/app
WORKDIR /backend

COPY package*.json ./
RUN npm install --force

COPY . .
EXPOSE 3001

CMD [ "npm","start" ]