FROM node:21-slim as build
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build
RUN npm install express
CMD ["node","serve.js"]

