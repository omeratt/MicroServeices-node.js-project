FROM node

WORKDIR /app/randomColorJs

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]