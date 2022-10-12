#---------------------FRONTEND---------------------
FROM node:16

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

ENV APP_IP=$BACKEND

CMD [ "npm", "start" ]

#--------------------NODE-RED--------------------
