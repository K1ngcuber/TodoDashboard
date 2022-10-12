#---------------------FRONTEND---------------------
FROM node:16

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

ENV APP_IP=BAUM1234

CMD [ "npm", "start" ]

#--------------------NODE-RED--------------------
