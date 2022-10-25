FROM darkfidis/node-npm:16.15.0-8.5.5

WORKDIR /usr/src/app

COPY ./package*.json ./.npmrc ./

RUN npm config set -g production false

RUN npm ci --prefer-offline --no-audit --no-optional

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 5000

HEALTHCHECK CMD curl --fail http://localhost:5000/ping || exit 1

CMD ["node", "-r", "source-map-support/register", "dist/built/src/main"]
