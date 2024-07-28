import express from 'express';
import BLOCK_ROUTES from '../routes/block.routes.mjs';
import Block from '../models/block.mjs';
import LANG from '../lang/index.mjs';

const blockRouter = express.Router();

/**
 * Block Controller Routes
 */

// Hello World
blockRouter.get(BLOCK_ROUTES.root, (req, res) => {
    res.json('Hello world from Block controller');
});

// Validates a Block
blockRouter.post(BLOCK_ROUTES.validate, async (req, res) => {
    const { block } = req.body;

    try {
        const rebuildedBlock = Block.rebuildBlock(block);
        const isValid = await rebuildedBlock.validate(block.prevBlockHash);
        res.json({ isValid });
    } catch (error) {
        throw new Error(`${LANG.english.errors.errorOnGetBlockData}, Hash: ${block.hash}, Description: ${error}`);
    }
});

export default blockRouter;
