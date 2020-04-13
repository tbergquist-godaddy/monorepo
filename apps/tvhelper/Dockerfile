FROM node:13-alpine

WORKDIR /build
COPY . .

ARG GRAPHQL_URL
ENV GRAPHQL_URL $GRAPHQL_URL

RUN yarn install --frozen-lockfile
RUN yarn relay --persist-mode fs
RUN yarn workspace @tbergq/tvhelper persist-queries
RUN yarn workspace @tbergq/tvhelper next build

EXPOSE 3020
EXPOSE $PORT

CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
