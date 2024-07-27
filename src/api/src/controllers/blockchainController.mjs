import express from 'express';
import Blockchain from '../models/blockchain.mjs';
import ENUMS from '../enums/enums.mjs';

const blockchainRouter = express.Router();

/**
 * Blockchain Controller Routes
 */

// Hello World
blockchainRouter.get('/', async (req, res) => {
    res.json('Hello world from Blockchain controller');
});

// Creates a New Blockchain
blockchainRouter.get('/init', async (req, res) => {
    const blockchain = new Blockchain();
    await blockchain.init();
    blockchain.decryptBlocksBody();
    res.json(blockchain);
});

// Mine a New Block
blockchainRouter.post('/mine', async (req, res) => {
    const { blockChain, body } = req.body;
    const rebuildedBlockchain = Blockchain.rebuild(blockChain);
    await rebuildedBlockchain.mineBlock({ type: ENUMS.block.type.regular, body });
    rebuildedBlockchain.decryptBlocksBody();
    res.json(rebuildedBlockchain);
});

export default blockchainRouter;
