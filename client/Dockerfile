# Build environment
FROM node as build

WORKDIR /app

COPY package*.json ./

ENV PATH /node_modules/.bin:$PATH

RUN npm install

COPY . ./

RUN npm run build

# Production environment
FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]