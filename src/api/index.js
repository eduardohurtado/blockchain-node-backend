const Blockchain = require('./src/models/blockchain');
const ENUMS = require('./src/enums/enums');

async function run() {
    const blockchain = new Blockchain();

    await blockchain.init();

    await blockchain.mineBlock({ type: ENUMS.block.type.regular, body: 'Block #1' });
    await blockchain.mineBlock({ type: ENUMS.block.type.regular, body: 'Block #2' });
    await blockchain.mineBlock({ type: ENUMS.block.type.regular, body: 'Block #3' });
    await blockchain.mineBlock({ type: ENUMS.block.type.regular, body: 'Block #4' });
    await blockchain.mineBlock({ type: ENUMS.block.type.regular, body: 'Block #5' });

    blockchain.printChain();
}

run();
