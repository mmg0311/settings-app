FROM mhart/alpine-node:11 as build

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn build

FROM nginx:1.15.2-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
