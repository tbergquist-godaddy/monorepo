FROM node:12

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 30051

CMD ["node", "apps/auth/src/application.js"]