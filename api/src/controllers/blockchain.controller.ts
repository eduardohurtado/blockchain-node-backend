import { Router, Request, Response } from 'express';
import Blockchain from '../classes/blockchain';
import BLOCKCHAIN_ROUTES from '../routes/blockchain.routes';
import LANG from '../lang';
import { BLOCK_TYPE } from '../enums/enums';

const blockchainRouter = Router();

/**
 * Blockchain Controller Routes
 */

// Hello World
blockchainRouter.get(BLOCKCHAIN_ROUTES.root, async (req: Request<{}, {}, undefined>, res: Response) => {
    res.json('Hello world from Blockchain controller');
});

// Creates a New Blockchain
blockchainRouter.get(BLOCKCHAIN_ROUTES.initBlockchain, async (req, res) => {
    try {
        const blockchain = new Blockchain({ chain: [], height: -1 });
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
        await rebuildedBlockchain.mineBlock({ type: BLOCK_TYPE.regular, body });
        rebuildedBlockchain.decryptBlocksBody();
        res.json(rebuildedBlockchain);
    } catch (error) {
        throw new Error(
            `${LANG.english.errors.apiError}: ${req.originalUrl}, ${LANG.english.errors.description}: ${error}`
        );
    }
});

export default blockchainRouter;
