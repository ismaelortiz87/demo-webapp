FROM node:12.13.1 AS install-deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

FROM node:12.13.1 AS build-src

WORKDIR /app

COPY --from=install-deps /app/node_modules ./node_modules
COPY . ./

RUN npm run build

FROM nginx:1.15

COPY --from=build-src /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
