FROM node:14-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

# Copying source files
COPY . /usr/src/app

EXPOSE 3000

# Running the app
CMD "yarn" "dev"
