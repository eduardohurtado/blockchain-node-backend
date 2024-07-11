const Block = require('./block');
const SHA256 = require('crypto-js/sha256');
const ENUMS = require('../enums/enums');
const LANG = require('../lang');

class Blockchain {
    constructor() {
        this.chain = [];
        this.height = -1;
    }

    /**
     * Async class methods
     */

    async init() {
        if (this.height === -1) {
            const genesysBlock = new Block({ type: ENUMS.blockType.genesys, body: ENUMS.blockType.genesys });
            await this.addBlock(genesysBlock);
        }
    }

    async validateChain() {
        const self = this;
        const errors = [];

        return new Promise(async (resolve) => {
            self.chain.forEach(async (block) => {
                try {
                    const isValid = await block.validate();
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
            });

            resolve(errors);
        });
    }

    /**
     * Class methods
     */

    addBlock(block) {
        const self = this;

        return new Promise(async (resolve, reject) => {
            block.height = self.chain.length;
            block.time = new Date().getTime().toString();

            if (self.chain.length > 0) {
                block.prevBlockHash = self.chain[self.chain.length - 1].hash;
            }

            const errors = await self.validateChain();
            if (errors.length > 0) {
                reject(new Error(`${LANG.english.errors.invalidChain}: ${errors}`));
            }

            block.hash = SHA256(JSON.stringify(block)).toString();
            self.chain.push(block);
            resolve(block);
        });
    }

    printChain() {
        const self = this;

        for (let block of self.chain) {
            console.log(block.toString());
        }
    }
}

module.exports = Blockchain;
