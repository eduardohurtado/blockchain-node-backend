import { BLOCK_TYPE } from '../enums/enums';

export interface IBlockModel {
    hash: string;
    height: number;
    type: BLOCK_TYPE.genesys | BLOCK_TYPE.regular;
    time: string;
    nonce: number;
    body: string;
    prevBlockHash: string;
}

export interface IBlockBuildModel {
    type: BLOCK_TYPE.genesys | BLOCK_TYPE.regular;
    body: string;
}
