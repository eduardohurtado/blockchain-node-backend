import express from 'express';
import BLOCK_ROUTES from '../routes/block.routes.mjs';

const blockRouter = express.Router();

/**
 * Block Controller Routes
 */

// Hello World
blockRouter.get(BLOCK_ROUTES.root, (req, res) => {
    res.json('Hello world from Block controller');
});

export default blockRouter;
