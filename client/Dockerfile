# Build environment
FROM node:14-alpine as build

WORKDIR /app

COPY package*.json ./

ENV PATH /node_modules/.bin:$PATH

RUN npm install

COPY . ./

RUN npm run build

# Production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]