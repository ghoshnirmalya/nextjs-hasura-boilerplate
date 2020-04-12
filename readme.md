<h1 align="center">Hasura Next.js Boilerplate</h1>

<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/nirmalyaghosh23.svg?style=social" target="_blank" />
  </a>
</p>

This is a boilerplate for building applications using Hasura and Next.js. This mon-orepo consists of the following packages:

1. [**frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/frontend): Next.js application
2. [**backend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/backend): Dockerized Hasura application
3. [**authentication**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/authentication): Node.js application for handling authentication
4. [**components**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/components): Sample React.js application for creating a Design System

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Overview](#overview)
- [Requirements](#requirements)
- [Packages](#packages)
  - [1. **Frontend**: Next.js application](#1-frontend-nextjs-application)
  - [2. **Backend**: Dockerized Hasura application](#2-backend-dockerized-hasura-application)
  - [3. **Authentication**: Node.js application for handling authentication](#3-authentication-nodejs-application-for-handling-authentication)
  - [4. **Components**: Sample React.js application for creating a Design System](#4-components-sample-reactjs-application-for-creating-a-design-system)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install Lerna globally**](#2-install-lerna-globally)
  - [3. **Bootstrap the packages**](#3-bootstrap-the-packages)
  - [4. **Start the packages**](#4-start-the-packages)
  - [5. **Start the backend package**](#5-start-the-backend-package)
- [Deployment](#deployment)
- [Inspiration](#inspiration)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This boilerplate is built using [Lerna](https://lerna.js.org/) for managing all the packages in a simple manner. Because of Lerna, it becomes very easy to install, develop and maintain a mono-repo structure.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Lerna](https://lerna.js.org/)
4. [Docker](https://www.docker.com/)

## Packages

### 1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

If we’re already signed into the application, we should be able to view [that page](http://localhost:3000/). Otherwise, we be redirected to the [Sign Up page](http://localhost:3000/sign-up). If we want to redirect our users to a different route (eg: [the Sign In page](http://localhost:3000/sign-in)), we can modify [this line](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/blob/master/packages/frontend/lib/with-authentication.tsx#L53):

```js
...
if (typeof window !== "undefined") {
    // Router.push("/sign-up");
    Router.push("/sign-in");
} else {
...
```

Once we’re signed in to the application, we should be able to view the following screen on http://localhost:3000/:

![Home page](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688232078_screely-1586688152150.png)

To create a new user, we’ll have to Sign Up [here](http://localhost:3000/sign-up):

![Sign Up page](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688511505_screely-1586688498119.png)

If the user was successfully created, we’ll be redirected to the [home page](http://localhost:3000/). If there’re any errors while creating the new user, an alert box will be shown above the form:

![Sign Up page with an error message](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688697018_screely-1586688615902.png)

To create an admin, we’ll need to visit the http://localhost:3000/admin/sign-up route. The creation of the new admin is similar to the creation of a user. The only difference is that for the admin, the role is **admin** and for users, its **user**.

![Response for fetching user role of a user](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586689146386_carbon+1.png)

![Response for fetching user role of a admin](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586689215270_carbon+2.png)

An admin can visit the [users page](http://localhost:3000/users) which is useful for fetching all the users who signed up in our application. This page and its components could be useful for managing the users. The user link [will be hidden in the Navbar if the current user isn’t an](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/blob/master/packages/frontend/components/navbar/authenticated.tsx#L76-L82) [**admin**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/blob/master/packages/frontend/components/navbar/authenticated.tsx#L76-L82).

### 2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/backend): Dockerized Hasura application

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. All the migrations are set up in the [migrations](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/backend/migrations) directory.

### 3. [**Authentication**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/authentication): Node.js application for handling authentication

This application is responsible for authenticating new and existing users. For more information regarding this application, we can follow [this readme file](https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/auth-servers/passportjs-jwt-roles#authentication-with-jwt-hasura-claims-and-multiple-roles).

### 4. [**Components**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/components): Sample React.js application for creating a Design System

This application is responsible for helping we creating a Design System. We can set up [Storybook](https://storybook.js.org/) for demoing components. There is an example [Button component](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/packages/components/src/Button). We can simply import the Button component like the following:

```sh
import { Button } from "@hasura-next/components";
```

Then, it can be used like the following:

```js
<Button onClick={(e) => console.log(e)}>Click</Button>
```

In our frontend package, we’re using components from [Chakra UI](https://chakra-ui.com/). However, in actual applications, we might need to use custom-designed components or override the default design of the components provided by a Components Library.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate
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

The above command will do the following:

    a. Start the frontend package on [http://localhost:3000/](http://localhost:3000).
    b. Start the authentication package on [http://localhost:3030/](http://localhost:3030/).

The components and backend packages don’t do anything after we execute the above command. There is no need to run the components package separately. However, if we need, we can [add additional commands using Lerna](https://lerna.js.org/#command-run).

### 5. **Start the backend package**

```sh
cd packages/backend && docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on http://localhost:8080/v1/graphql.

## Deployment

We’re still working on this feature. The documentation will be updated soon.

## Inspiration

1. [Monorepo starter project for Kotlin, Python, TypeScript x React](https://github.com/palmerhq/monorepo-starter)
2. [Passport JWT roles for Hasura](https://github.com/hasura/graphql-engine/tree/master/community/boilerplates/auth-servers/passportjs-jwt-roles)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
