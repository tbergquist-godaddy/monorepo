FROM node:16-alpine as deps

WORKDIR /build

COPY package.json lerna.json yarn.lock ./
COPY apps/handball-news/package.json ./apps/handball-news/package.json

RUN yarn install --frozen-lockfile

FROM node:16-alpine as builder

WORKDIR /build
ENV NODE_ENV=production
ENV HANDBALL_PLANET_URL=https://www.handball-planet.com/feed/

COPY --from=deps  /build/node_modules ./node_modules
COPY --from=deps  /build/apps/handball-news/ ./apps/handball-news/

COPY apps/handball-news ./apps/handball-news

COPY package.json lerna.json tsconfig.json ./

RUN yarn lerna run build

FROM node:16-alpine as runner

WORKDIR /build

ENV NODE_ENV=production
ENV HANDBALL_PLANET_URL=https://www.handball-planet.com/feed/
ENV PORT=3000

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/apps/handball-news ./apps/handball-news

EXPOSE 3000

CMD ["yarn", "workspace", "@tbergq/handball-news", "start"]
