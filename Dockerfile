FROM node:16

COPY package.json /frontend/
COPY yarn.lock /frontend/
WORKDIR /frontend

COPY .  /frontend/   

# RUN npm rebuild bcrypt --build-from-source

# CMD yarn start -p 3001