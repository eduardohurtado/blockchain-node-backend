const Blockchain = require('./src/models/blockchain');
const Block = require('./src/models/block');
const ENUMS = require('./src/enums/enums');

async function run() {
    const blockchain = new Blockchain();

    await blockchain.init();

    const block1 = new Block({ type: ENUMS.blockType.regular, body: 'Block #1' });
    const block2 = new Block({ type: ENUMS.blockType.regular, body: 'Block #2' });
    const block3 = new Block({ type: ENUMS.blockType.regular, body: 'Block #3' });

    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);

    blockchain.printChain();
}

run();
