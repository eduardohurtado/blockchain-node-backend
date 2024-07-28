import express from 'express';
import Blockchain from '../models/blockchain.mjs';
import ENUMS from '../enums/enums.mjs';
import BLOCKCHAIN_ROUTES from '../routes/blockchain.routes.mjs';
import LANG from '../lang/index.mjs';

const blockchainRouter = express.Router();

/**
 * Blockchain Controller Routes
 */

// Hello World
blockchainRouter.get(BLOCKCHAIN_ROUTES.root, async (req, res) => {
    res.json('Hello world from Blockchain controller');
});

// Creates a New Blockchain
blockchainRouter.get(BLOCKCHAIN_ROUTES.initBlockchain, async (req, res) => {
    try {
        const blockchain = new Blockchain();
        await blockchain.init();
        blockchain.decryptBlocksBody();
        res.json(blockchain);
    } catch (error) {
        throw new Error(
            `${LANG.english.errors.apiError}: ${req.originalUrl}, ${LANG.english.errors.description}: ${error}`
        );
    }
});

// Mine a New Block
blockchainRouter.post(BLOCKCHAIN_ROUTES.mineNewBlock, async (req, res) => {
    try {
        const { blockChain, body } = req.body;
        const rebuildedBlockchain = Blockchain.rebuild(blockChain);
        await rebuildedBlockchain.mineBlock({ type: ENUMS.block.type.regular, body });
        rebuildedBlockchain.decryptBlocksBody();
        res.json(rebuildedBlockchain);
    } catch (error) {
        throw new Error(
            `${LANG.english.errors.apiError}: ${req.originalUrl}, ${LANG.english.errors.description}: ${error}`
        );
    }
});

export default blockchainRouter;
