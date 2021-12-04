FROM node:16 as base_image
WORKDIR /app

FROM base_image as copier
COPY yarn.lock package.json nx.json workspace.json .yarnrc.yml ./
COPY .yarn .yarn
COPY apps apps
COPY packages packages

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf
RUN find apps \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

FROM copier as deps
COPY --from=copier /app .
RUN yarn install

FROM deps as builder

ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/
ENV NODE_ENV=production

COPY --from=deps  /app .
COPY . .

RUN yarn nx persist-queries @tbergq/tvhelper
RUN yarn nx build @tbergq/tvhelper

FROM node:16-alpine as runner
WORKDIR /app

ENV NODE_ENV=production
ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/
COPY --from=builder /app .


EXPOSE 3020

CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
