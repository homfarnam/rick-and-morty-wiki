
FROM node:16
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN npx next telemetry disable
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]