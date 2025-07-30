import { Router, Request, Response } from 'express';
import BLOCK_ROUTES from '../routes/block.routes';
import Block from '../classes/block';
import LANG from '../lang';
import { IBlockModel } from '../models/block.models';

const blockRouter = Router();

/**
 * Block Controller Routes
 */

// Hello World
blockRouter.get(BLOCK_ROUTES.root, (req: Request<{}, {}, undefined>, res: Response) => {
    res.json('Hello world from Block controller');
});

// Validates a Block
blockRouter.post(BLOCK_ROUTES.validate, async (req: Request<{}, {}, IBlockModel>, res: Response) => {
    try {
        const rebuildedBlock = Block.rebuildBlock(req.body);
        const isValid = await rebuildedBlock.validate(req.body.prevBlockHash);
        res.json({ isValid });
    } catch (error) {
        throw new Error(
            `${LANG.english.errors.apiError}: ${req.originalUrl}, ${LANG.english.errors.description}: ${error}`
        );
    }
});

export default blockRouter;
