FROM node:18 as base
WORKDIR /app

COPY package.json workspace.json nx.json yarn.lock .yarnrc.yml ./
COPY packages packages
COPY apps apps
COPY .yarn ./.yarn
RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf
RUN find apps \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf
ENTRYPOINT echo "copier Dockerfile stage"

FROM base as installer
RUN yarn install
ENTRYPOINT echo "installer Dockerfile stage"

FROM installer as builder
ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/
COPY . .
RUN yarn nx run @tbergq/tvhelper:build
ENTRYPOINT echo "builder Dockerfile stage"

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder app .
ENV NODE_ENV=production
ENV GRAPHQL_URL=https://tbergq-graphql.vercel.app/graphql/

EXPOSE 8080
ENV PORT=8080
CMD ["yarn", "workspace", "@tbergq/tvhelper", "start"]
