FROM mhart/alpine-node:11.1.0

RUN mkdir /authentication-app

WORKDIR /authentication-app

RUN apk upgrade --update-cache --available && \
  apk add openssl && \
  rm -rf /var/cache/apk/*

ENV PATH /authentication-app/node_modules/.bin:$PATH

COPY . /authentication-app

RUN yarn install

CMD ["yarn", "start"]
