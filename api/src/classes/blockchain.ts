import Block from './block';
import APP_LANG from '../lang';
import { BLOCK_TYPE } from '../enums/enums';
import { IBlockchainBuildModel } from '../models/blockchain.models';

class Blockchain {
    chain: Block[];
    height: number;

    /**
     * Constructor
     * @param {Object} data - Blockchain data
     */
    constructor(data: { chain: Block[]; height: number }) {
        if (data.chain === undefined || data.height === undefined) {
            throw new Error(APP_LANG.english.errors.invalidBlockchainConstructorParameters);
        } else {
            this.chain = data.chain ?? [];
            this.height = data.height ?? -1;
        }
    }

    /**
     * Async Private Class methods
     */

    async #addBlock(block: Block): Promise<boolean> {
        const self = this;

        return new Promise(async (resolve) => {
            let chainErrors: Error[] = [];

            console.log('on #addBlock');

            if (self.chain.length > 0) {
                chainErrors = await self.validateChain();
            }

            if (chainErrors.length > 0) {
                throw new Error(`${APP_LANG.english.errors.invalidChain}: ${chainErrors}`);
            } else {
                block.height = self.chain.length + 1;
                self.chain.push(block);
                self.height = self.chain.length;
                resolve(true);
            }
        });
    }

    /**
     * Async class methods
     */

    async init() {
        if (this.height === -1) {
            const genesysBlock = await Block.mine('', BLOCK_TYPE.genesys, BLOCK_TYPE.genesys);
            await this.#addBlock(genesysBlock);
        } else {
            throw new Error(
                `${APP_LANG.english.errors.chainInitialized}, ${APP_LANG.english.chain.props.height}: ${this.height}`
            );
        }
    }

    async mineBlock(dataToMine: { type: BLOCK_TYPE.regular | BLOCK_TYPE.genesys; body: string }) {
        if (this.height === -1) {
            throw new Error(`${APP_LANG.english.errors.chainIsNotInitialized}`);
        } else if (dataToMine.type === BLOCK_TYPE.genesys) {
            throw new Error(`${APP_LANG.english.errors.genesysBlockAlreadyCreated}`);
        } else {
            const prevBlock = this.chain[this.chain.length - 1];

            const newBlock = await Block.mine(prevBlock.hash, dataToMine.type, dataToMine.body);

            await this.#addBlock(newBlock);
        }
    }

    async validateChain(): Promise<Error[]> {
        const self = this;
        const errors: Error[] = [];

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
                                `${APP_LANG.english.errors.invalidBlock}, ${APP_LANG.english.block.props.height}: ${block.height}`
                            )
                        );
                    }
                } catch (error) {
                    errors.push(new Error(error as string));
                }
            }

            resolve(errors);
        });
    }

    /**
     * Static Class methods
     */

    static rebuild(data: IBlockchainBuildModel): Blockchain {
        const blockchain = new this({ chain: [], height: -1 });
        const rebuildedChain: Block[] = [];

        for (const block of data.chain) {
            const rebuildedBlock = Block.rebuildBlock(block);
            rebuildedChain.push(rebuildedBlock);
        }

        blockchain.chain = rebuildedChain;
        blockchain.height = data.height;

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

        console.log(
            `${APP_LANG.english.process.finalizedPrint}, ${APP_LANG.english.chain.props.height}: ${self.height}`
        );
    }
}

export default Blockchain;
