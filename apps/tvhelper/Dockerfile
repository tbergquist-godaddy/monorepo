FROM node:14-alpine

WORKDIR /build
COPY . .

ENV GRAPHQL_URL https://tbergq-graphql.vercel.app/graphql/
ENV NODE_ENV production

RUN apk add --no-cache bash curl
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

RUN yarn install
RUN node-prune

EXPOSE 3020

CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
