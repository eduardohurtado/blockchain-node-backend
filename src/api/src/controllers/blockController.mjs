import express from 'express';

const blockRouter = express.Router();

/**
 * Block Controller Routes
 */

// Hello World
blockRouter.get('/', (req, res) => {
    res.json('Hello world from Block controller');
});

export default blockRouter;
