FROM --platform=linux/amd64 node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . ./

CMD ["yarn", "dev"]