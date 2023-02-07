FROM node

WORKDIR /app/deletetask

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9001

CMD ["npm", "start"]