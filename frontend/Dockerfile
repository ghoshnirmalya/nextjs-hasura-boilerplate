FROM mhart/alpine-node:11.1.0

RUN mkdir /frontend-app

WORKDIR /frontend-app

RUN apk update && apk upgrade && apk add --no-cache bash git

COPY . /frontend-app/

RUN yarn global add ts-node typescript

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]
