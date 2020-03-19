FROM mhart/alpine-node:11.1.0

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install necessary packages for debugging
RUN apk update && apk upgrade && apk add --no-cache bash git

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN yarn install
RUN yarn global add typescript

EXPOSE 3000

# Start app
CMD ["yarn", "dev"]
