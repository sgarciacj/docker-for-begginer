## Configuration:

FROM node:14 AS build
WORKDIR /home/src
COPY package.json ./
RUN npm install
COPY . .

FROM node:14
EXPOSE 8080
COPY --from=build /home/src /app
WORKDIR /app
VOLUME /app
CMD ["node", "server.js"]
