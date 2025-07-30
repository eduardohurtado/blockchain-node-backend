import Blockchain from '../classes/blockchain';
import { BLOCK_TYPE } from '../enums/enums';

/**
 * Use the function below to test the Blockchain functionality
 */
async function run() {
    const blockchain = new Blockchain({ chain: [], height: -1 });

    await blockchain.init();

    await blockchain.mineBlock({ type: BLOCK_TYPE.regular, body: 'Block #1' });
    await blockchain.mineBlock({ type: BLOCK_TYPE.regular, body: 'Block #2' });
    await blockchain.mineBlock({ type: BLOCK_TYPE.regular, body: 'Block #3' });
    await blockchain.mineBlock({ type: BLOCK_TYPE.regular, body: 'Block #4' });
    await blockchain.mineBlock({ type: BLOCK_TYPE.regular, body: 'Block #5' });

    blockchain.printChain();
}

run();
