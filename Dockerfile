FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run build
CMD node dist/server.js
EXPOSE 3000