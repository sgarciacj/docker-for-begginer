## OLD Configuration:
# FROM node:14
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# EXPOSE 8080
# CMD ["node", "server.js"]

## FINAL PROJECT: 
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