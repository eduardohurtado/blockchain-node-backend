import SHA256 from 'crypto-js/sha256';
import { BLOCK_DIFFICULTY, BLOCK_TYPE } from '../enums/enums';
import { IBlockModel, IBlockBuildModel } from '../models/block.models';
import APP_LANG from '../lang';

class Block {
    hash: string;
    height: number;
    type: BLOCK_TYPE.genesys | BLOCK_TYPE.regular;
    time: string;
    nonce: number;
    body: Buffer<ArrayBuffer>;
    prevBlockHash: string;

    /**
     * Constructor
     * @param {Object} data - Block data
     */
    constructor(data: { isRebuild?: boolean; blockData?: IBlockModel; blockBuildData?: IBlockBuildModel }) {
        if (data?.isRebuild && data?.blockData) {
            this.hash = data.blockData.hash;
            this.height = data.blockData.height;
            this.type = data.blockData.type;
            this.time = data.blockData.time;
            this.nonce = data.blockData.nonce;
            this.body = Buffer.from(JSON.stringify(data.blockData.body).toString());
            this.prevBlockHash = data.blockData.prevBlockHash;
        } else if (data?.blockBuildData) {
            this.hash = '';
            this.height = 0;
            this.type = data.blockBuildData.type;
            this.time = '';
            this.nonce = 0;
            this.body = Buffer.from(JSON.stringify(data.blockBuildData.body).toString());
            this.prevBlockHash = '';
        } else {
            throw new Error(`${APP_LANG.english.errors.invalidBlockConstructorParameters}`);
        }
    }

    /**
     * Static Async Class Methods
     */

    static async mine(
        prevHash: string,
        blockType: BLOCK_TYPE.genesys | BLOCK_TYPE.regular,
        dataToMine: string
    ): Promise<Block> {
        try {
            let hash = '';
            let time = '';
            let nonce = 0;

            do {
                time = new Date().getTime().toString();
                nonce += 1;
                hash = SHA256(prevHash + time + nonce + dataToMine).toString();
            } while (hash.substring(0, BLOCK_DIFFICULTY.value) !== '0'.repeat(BLOCK_DIFFICULTY.value));

            const block = new this({
                isRebuild: false,
                blockBuildData: { type: blockType, body: dataToMine }
            });

            block.hash = hash;
            block.time = time;
            block.nonce = nonce;
            block.prevBlockHash = prevHash;

            return block;
        } catch (error) {
            throw new Error(`${APP_LANG.english.errors.blockMineError}: ${error}`);
        }
    }

    /**
     * Static Class Methods
     */

    static rebuildBlock(blockData: IBlockModel) {
        return new this({ isRebuild: true, blockData });
    }

    /**
     * Async Class Methods
     */

    async validate(prevHash: string): Promise<boolean> {
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

    async getBodyData(): Promise<string> {
        const self = this;

        return new Promise((resolve) => {
            const encodedData = self.body;
            const decodedData = encodedData.toString();
            const bodyData = JSON.parse(decodedData);
            resolve(bodyData);
        });
    }

    /**
     * Class Methods
     */

    decryptBody() {
        const { body } = this;
        const decryptedBody = body.toString();
        this.body = JSON.parse(decryptedBody);
    }

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

export default Block;
