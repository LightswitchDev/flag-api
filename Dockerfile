FROM node:13 as builder
RUN npm install -g --unsafe-perm prisma2

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i --ignore-scripts

COPY prisma ./prisma/
COPY src ./src/
# this needs to be set for the build but it isn't used.
# only necessary at run time / for migrations
ARG POSTGRESQL_URL=''
RUN npm run postinstall

COPY tsconfig.json ./
RUN npm run build

CMD [ "node", "dist/server" ]

# FROM node:13

# COPY --from=builder ./app/dist ./dist
# COPY package* ./
# RUN npm ci

# CMD [ "node", "dist/server" ]