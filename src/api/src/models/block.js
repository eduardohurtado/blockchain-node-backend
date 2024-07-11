const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');
const ENUMS = require('../enums/enums');
const LANG = require('../lang');

class Block {
    constructor(data) {
        this.hash = null;
        this.height = 0;
        this.time = 0;
        this.type = data.type;
        this.body = Buffer.from(JSON.stringify(data.body).toString('hex'));
        this.prevBlockHash = '';
    }

    validate() {
        const self = this;

        return new Promise((resolve) => {
            let currentHash = self.hash;

            self.hash = SHA256(JSON.stringify({ ...self, hash: null })).toString();

            if (currentHash !== self.hash) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    }

    getBlockData() {
        const self = this;

        return new Promise((resolve, reject) => {
            if (self.type === ENUMS.blockType.genesys) {
                reject(new Error(LANG.english.alerts.genesysBlock));
            } else {
                const encodedData = self.body;
                const decodedData = hex2ascii(encodedData);
                const dataObject = JSON.parse(decodedData);

                resolve(dataObject);
            }
        });
    }

    toString() {
        const { hash, height, time, type, body, prevBlockHash } = this;

        return `Block -
            hash: ${hash}
            height: ${height}
            time: ${time}
            type: ${type}
            body: ${body}
            prevBlockHash: ${prevBlockHash}
            --------------------------------`;
    }
}

module.exports = Block;
