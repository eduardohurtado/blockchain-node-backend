import Block from './block.mjs';
import ENUMS from '../enums/enums.mjs';
import LANG from '../lang/index.mjs';

class Blockchain {
    constructor(data) {
        this.chain = data?.chain || [];
        this.height = data?.height || -1;
    }

    /**
     * Async Private Class methods
     */

    async #addBlock(block) {
        const self = this;

        return new Promise(async (resolve) => {
            let chainErrors = [];

            if (self.chain.length > 0) {
                chainErrors = await self.validateChain();
            }

            if (chainErrors.length > 0) {
                throw new Error(`${LANG.english.errors.invalidChain}: ${chainErrors}`);
            } else {
                block.height = self.chain.length + 1;
                self.chain.push(block);
                self.height = self.chain.length;
                resolve();
            }
        });
    }

    /**
     * Async class methods
     */

    async init() {
        if (this.height === -1) {
            const genesysBlock = await Block.mine('', {
                type: ENUMS.block.type.genesys,
                body: ENUMS.block.type.genesys
            });

            await this.#addBlock(genesysBlock);
        } else {
            throw new Error(
                `${LANG.english.errors.chainInitialized}, ${LANG.english.chain.props.height}: ${this.height}`
            );
        }
    }

    async mineBlock(data) {
        if (this.height === -1) {
            throw new Error(`${LANG.english.errors.chainIsNotInitialized}`);
        } else if (data.type === ENUMS.block.type.genesys) {
            throw new Error(`${LANG.english.errors.genesysBlockAlreadyCreated}`);
        } else {
            const prevBlock = this.chain[this.chain.length - 1];

            const newBlock = await Block.mine(prevBlock.hash, {
                type: data.type,
                body: data.body
            });

            await this.#addBlock(newBlock);
        }
    }

    async validateChain() {
        const self = this;
        const errors = [];

        return new Promise(async (resolve) => {
            let index = 0;

            for (const block of self.chain) {
                let prevHash = '';

                if (index > 0) {
                    prevHash = self.chain[index - 1].hash;
                }

                index++;

                try {
                    const isValid = await block.validate(prevHash);

                    if (!isValid) {
                        errors.push(
                            new Error(
                                `${LANG.english.errors.invalidBlock}, ${LANG.english.block.props.height}: ${block.height}`
                            )
                        );
                    }
                } catch (error) {
                    errors.push(error);
                }
            }

            resolve(errors);
        });
    }

    /**
     * Static Class methods
     */

    static rebuild(data) {
        const blockchain = new this(data);
        const rebuildedChain = [];

        for (const block of blockchain.chain) {
            const rebuildedBlock = Block.rebuildBlock(block);
            rebuildedChain.push(rebuildedBlock);
        }

        blockchain.chain = rebuildedChain;

        return blockchain;
    }

    /**
     * Class methods
     */

    decryptBlocksBody() {
        const decryptedBlocks = [];

        for (const block of this.chain) {
            block.decryptBody();
            decryptedBlocks.push(block);
        }

        this.chain = decryptedBlocks;
    }

    printChain() {
        const self = this;

        for (const block of self.chain) {
            console.log(block.toString());
        }

        console.log(`${LANG.english.process.finalizedPrint}, ${LANG.english.chain.props.height}: ${self.height}`);
    }
}

export default Blockchain;
