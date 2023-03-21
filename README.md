# Web3 Authentication


` This is a website built with Next.js, firebase and Thirdweb SDK that allows users to login using their wallet address like metamask wallet address `

### Features
- [x] Loging and Sign in with your cryptocurency wallet 
- [x] Update your profile in realtime



### Getting Started
Prerequisites
Before you get started, make sure you have the following requirements installed on your machine:

- Node.js
- npm
### Installation
Clone this repository to your local machine:
Copy code
   ```sh
git clone https://github.com/theonrex/web3-Authentication

```

### Navigate to the project directory: 

```
 ## Install the dependencies:
Copy code
```sh
npm install

```
Create a file called .env in the root of the project and add the following environment variables:
Copy code
```sh
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
FIREBASE_PRIVATE_KEY= 

FIREBASE_CLIENT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_CLIENT_EMAIL=
```

Start the development server:
Copy code
```sh
npm run dev

```
The website should now be running at http://localhost:3000.

Deployment
To deploy theon-x to a production environment, follow these steps:

Build the production version of the website:
```sh
npm run build

```

## Built With
* [Next.js -](https://nextjs.org/)  A framework for building server-rendered React applications
* [Firebase -](https://console.firebase.google.com/)Firebase is a backend platform that provides a suite of services to help you build and manage web and mobile applications.
* [ Thirdweb -](https://thirdweb.com/) Thirdweb is a software development kit (SDK) that enables developers to create decentralized applications (dApps) on the Ethereum blockchain.




