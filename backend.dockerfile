FROM nodered/node-red:latest

ENV SECRET=$SECRET

RUN touch /data/todo.txt

COPY backend/settings.js /data/settings.js
COPY backend/flows.json /data/flows.json
COPY backend/flows_cred.json /data/flows_cred.json

#Install telegrambot
RUN npm install node-red-contrib-telegrambot