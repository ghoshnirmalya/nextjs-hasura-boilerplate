FROM mhart/alpine-node:11.1.0

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install necessary packages for debugging
RUN apk upgrade --update-cache --available && \
  apk add openssl && \
  rm -rf /var/cache/apk/*

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN yarn install

# Start app
CMD ["yarn", "dev"]
