# Blockchain App Node + Express

This project was created as an incursion to the Blockchain world and technologies.

![TS Express Node Banner](https://live.staticflickr.com/65535/52702210344_fe78a142e7_o.png)

## Yeah but, what is a Blockchain?

A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it.

![Blockchain Banner](https://www.advancedsecure.co.uk/app/uploads/2021/03/Blockchain-Paper-Secure-Content-Image.jpg)

Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.

## App requirements

You need to have installed [Node Js](https://nodejs.org/en/) on your system to run the development server, the minimun supported version is the `V18.20.4`.

For a better debuggin is recommended to have installed [Nodemon](https://www.npmjs.com/package/nodemon) globally and launch the local Node server in the directory "/api" with the command `nodemon server.ts`.

## Install and configure the project

Run `npm install` to download all the app dependencies.

## Test the Blockchain Node API yourself

To test the Blockchain Node API functionality, please execute the following script `npm run test` and you should see a just generated Blockchain in the command prompt.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080/api/blockchain/](http://localhost:8080/api/blockchain/) to see the greet response in the browser.

### `npm run build`

Builds the app for production to the `/api/dist` folder.\
It correctly bundles Express in production mode and optimizes the build for the best performance.
Your app is ready to be deployed!

## Learn More

You can learn more in the [Node JS documentation](https://nodejs.org/docs/latest/api/).

To learn Express, check out the [Express documentation](https://expressjs.com/en/starter/installing.html).
