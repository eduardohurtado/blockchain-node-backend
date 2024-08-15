# Blockchain Full Stack App React + Node

This project was created as an incursion to the Blockchain world and technologies.

![React Node Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--Qhu3PUis--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y63ie8bmktwik5w3mhlg.png)

## Yeah but, what is a Blockchain?

A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it.

![Blockchain Banner](https://st4.depositphotos.com/16552764/20957/v/450/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg)

Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.

## App requirements

You need to have installed [Node Js](https://nodejs.org/en/) on your system to run the development server, the minimun supported version is the `V18.20.4`.

For a better debuggin is recommended to have installed [Nodemon](https://www.npmjs.com/package/nodemon) globally and launch the local Node server in the directory "src/api" with the command `nodemon index.mjs`.

## Install and configure the project

Run `npm install` to download all the app dependencies.

Run `npm run gulp` to run the gulp pipeline to prepare the app for server launch.

## Test the Blockchain Node API yourself

To test the Blockchain Node API functionality, please go to the project's path `blockchain-react-node\src\api\src\tests` and execute the following script `node tests.mjs` and you should see a just generated Blockchain in the command prompt.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
