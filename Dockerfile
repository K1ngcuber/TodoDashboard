#---------------------FRONTEND---------------------
FROM node:16

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

#--------------------NODE-RED--------------------
#TODO - Add node-red to docker-compose
