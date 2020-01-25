FROM node:13 as builder

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i --ignore-scripts

COPY server ./server/
COPY build.ts ./
COPY tsconfig.json ./
RUN npm run build

FROM node:13

COPY package* ./
RUN npm ci
COPY --from=builder ./app/dist ./dist

CMD [ "node", "dist" ]