FROM node:14-alpine

WORKDIR /build
COPY . .

ENV GRAPHQL_URL https://tbergq-graphql.now.sh/graphql/

RUN yarn install --frozen-lockfile
RUN yarn relay --persist-mode fs
RUN yarn workspace @tbergq/tvhelper persist-queries
RUN yarn workspace @tbergq/tvhelper next build

EXPOSE 3020

CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
