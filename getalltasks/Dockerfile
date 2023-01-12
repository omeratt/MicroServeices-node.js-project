FROM node

WORKDIR /app/getalltasks

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8006

CMD ["npm", "start"]