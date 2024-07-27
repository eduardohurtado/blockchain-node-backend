import express from 'express';
import morgan from 'morgan';

// Controllers
import blockController from './src/controllers/block.controller.mjs/index.js';
import blockchainController from './src/controllers/blockchain.controller.mjs/index.js';

// Server
const app = express();

// Server Settings
app.set('port', process.env.PORT || 8080);

// Server Middlewares
app.use(morgan('dev')); // 'dev' Is the bash window text format.
app.use(express.json()); // To understand Json format.

// Controllers API Routes
app.use('/api/block', blockController);
app.use('/api/blockchain', blockchainController);

//Server Start
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});
