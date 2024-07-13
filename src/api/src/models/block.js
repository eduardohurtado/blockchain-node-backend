const SHA256 = require('crypto-js/sha256');
const ENUMS = require('../enums/enums');
const LANG = require('../lang');

class Block {
    constructor(data) {
        this.hash = '';
        this.height = 0;
        this.type = data.type;
        this.time = '';
        this.nonce = 0;
        this.body = Buffer.from(JSON.stringify(data.body).toString());
        this.prevBlockHash = '';
    }

    /**
     * Static Async Class Methods
     */

    static async mine(prevHash, data) {
        let hash = '';
        let time = '';
        let nonce = 0;

        do {
            time = new Date().getTime().toString();
            nonce += 1;
            hash = SHA256(prevHash + time + nonce + data.body).toString();
        } while (
            hash.substring(0, ENUMS.block.mine.difficulty.value) !== '0'.repeat(ENUMS.block.mine.difficulty.value)
        );

        const block = new this({ type: data.type, body: data.body });

        block.hash = hash;
        block.time = time;
        block.nonce = nonce;
        block.prevBlockHash = prevHash;

        return block;
    }

    /**
     * Async Class Methods
     */

    async validate(prevHash) {
        const self = this;

        return new Promise(async (resolve) => {
            let currentHash = self.hash;

            const bodyData = await this.getBodyData();

            const comprobationHash = SHA256(prevHash + self.time + self.nonce + bodyData).toString();

            if (currentHash !== comprobationHash) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    }

    async getBodyData() {
        const self = this;

        return new Promise((resolve) => {
            try {
                const encodedData = self.body;
                const decodedData = encodedData.toString();
                const bodyData = JSON.parse(decodedData);
                resolve(bodyData);
            } catch (error) {
                throw new Error(`${LANG.english.errors.errorOnGetBlockData}, Hash: ${self.hash}, Error: ${error}`);
            }
        });
    }

    /**
     * Class Methods
     */

    toString() {
        const { hash, height, type, time, nonce, body, prevBlockHash } = this;

        return `🗿 Block -
            hash: ${hash}
            height: ${height}
            type: ${type}
            time: ${time}
            nonce: ${nonce}
            body: ${body}
            prevBlockHash: ${prevBlockHash}
            --------------------------------`;
    }
}

module.exports = Block;
