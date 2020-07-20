<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/83290593-7a153300-a204-11ea-8285-e2af1b7bc9ed.png" alt="Logo"/>
</p>

<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/nirmalyaghosh23.svg?style=social" target="_blank" />
  </a>
</p>

This is a clone of Trello application built using Hasura and Next.js. This application has been bootstrapped using [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate) This mono-repo consists of the following packages:

1. [**frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/frontend): Next.js application
2. [**backend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend): Dockerized Hasura application

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Overview](#overview)
- [Requirements](#requirements)
- [Packages](#packages)
  - [1. **Frontend**: Next.js application](#1-frontend-nextjs-application)
  - [2. **Backend**: Dockerized Hasura application](#2-backend-dockerized-hasura-application)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install Lerna globally**](#2-install-lerna-globally)
  - [3. **Bootstrap the packages**](#3-bootstrap-the-packages)
  - [4. **Start the packages**](#4-start-the-packages)
  - [5. **Go inside the directory of the backend package**](#5-go-inside-the-directory-of-the-backend-package)
  - [6. **Create a .env file and copy the contents from .env.example (present in packages/backend directory)**](#6-create-a-env-file-and-copy-the-contents-from-envexample-present-in-packagesbackend-directory)
  - [7. **Generate the RSA keys**](#7-generate-the-rsa-keys)
  - [8. **Print the keys in the escaped format**](#8-print-the-keys-in-the-escaped-format)
  - [9. **Copy the value of the key into the `HASURA_GRAPHQL_JWT_SECRET` key (in the .env file)**](#9-copy-the-value-of-the-key-into-the-hasura_graphql_jwt_secret-key-in-the-env-file)
  - [10. **Start docker-compose**](#10-start-docker-compose)
- [Deployment](#deployment)
- [Other interesting repositories](#other-interesting-repositories)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This boilerplate is built using [Lerna](https://lerna.js.org/) for managing all the packages in a simple manner. Because of Lerna, it becomes very easy to install, develop and maintain a mono-repo structure.

<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/83325828-f81d1c80-a28c-11ea-8601-8410a11a2937.png" alt="Screenshot"/>
</p>

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Lerna](https://lerna.js.org/)
4. [Docker](https://www.docker.com/)

## Packages

### 1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

![Home page before login](https://user-images.githubusercontent.com/6391763/87957803-61bbe900-cace-11ea-9b57-155976e3b3ac.png)

To create a new user, we’ll have to Sign Up using Google. [NextAuth](https://next-auth.js.org/) is being used to help us in authentication.

![Home page after login](https://user-images.githubusercontent.com/6391763/87957968-93cd4b00-cace-11ea-8ce5-c3c9a14d63c8.png)

### 2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend): Dockerized Hasura application

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. All the migrations are set up in the [migrations](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend/migrations) directory.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone
```

### 2. **Install Lerna globally**

```sh
npm install --global lerna
```

### 3. **Bootstrap the packages**

From the project root, we can run the following command to bootstrap the packages and install all their dependencies and linking any cross-dependencies:

```sh
lerna bootstrap
```

### 4. **Start the packages**

From the project root, we can run the following command to start our Node.js packages:

```sh
yarn start
```

The above command will start the frontend package on [http://localhost:3000/](http://localhost:3000).

The backend package doesn’t do anything after we execute the above command.

### 5. **Go inside the directory of the backend package**

```sh
cd packages/backend
```

### 6. **Create a .env file and copy the contents from .env.example (present in packages/backend directory)**

### 7. **Generate the RSA keys**

```sh
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout > public.pem
```

### 8. **Print the keys in the escaped format**

```sh
awk -v ORS='\\n' '1' public.pem
```

### 9. **Copy the value of the key into the `HASURA_GRAPHQL_JWT_SECRET` key (in the .env file)**

### 10. **Start docker-compose**

```sh
docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on http://localhost:8080/v1/graphql.

## Deployment

We’re still working on this feature. The documentation will be updated soon.

## Other interesting repositories

1. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
2. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
3. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
