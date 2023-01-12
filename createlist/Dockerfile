FROM node

WORKDIR /app/createlist

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8005

CMD ["npm", "start"]