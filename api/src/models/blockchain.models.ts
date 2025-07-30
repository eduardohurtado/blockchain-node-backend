import { IBlockModel } from './block.models';

export interface IBlockchainBuildModel {
    chain: IBlockModel[];
    height: number;
}
