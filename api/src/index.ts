import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// API Routes
import API_ROUTES from './routes/api.routes';

// Controllers
import blockController from './controllers/block.controller';
import blockchainController from './controllers/blockchain.controller';

// Environment variables
import dotenv from 'dotenv';

dotenv.config();

/**
 * Server
 */
const app = express();

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

/**
 * Controllers
 */
app.use(API_ROUTES.block, blockController);
app.use(API_ROUTES.blockchain, blockchainController);

/**
 * Export app
 */
export default app;
