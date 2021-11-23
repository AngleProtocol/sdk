import { ChainId } from '../types';
import LOCAL_ADDRESSES from './local.json';
import MAINNET_CONTRACTS from './mainnet.json';
import RINKEBY_ADDRESSES from './rinkeby.json';

const ContractsNames = [
  'FeeManager',
  'GenericLender',
  'Oracle',
  'PerpetualManager',
  'PoolManager',
  'SanToken',
  'Strategy',
  'Staking',
  'GenericCompound',
  'GenericAave',
] as const;

export const StableTokens = ['agCHF', 'agEUR', 'agGBP', 'agJPY', 'agUSD'] as const;

const GlobalContracts = ['ANGLE', 'BondingCurve', 'Core', 'Governor', 'RewardsDistributor', 'Timelock', 'ProxyAdmin'] as const;

export type AngleContractsStableType = {
  AgToken: string;
  StableMaster: string;
  Staking: string;
  collaterals: {
    [collateralName: string]: {
      [contractName in typeof ContractsNames[number]]?: string;
    };
  };
};

export type AngleContractsType = {
  [key: string]: Partial<AngleContractsStableType>;
} & {
  [key in typeof GlobalContracts[number]]?: string;
} & { ExternalStakings?: { tokenName: string; stakingContractAddress: string }[] };

type TCONTRACTS_ADDRESSES = Readonly<{ [chainId in ChainId]: Readonly<AngleContractsType> }>;
export const CONTRACTS_ADDRESSES: TCONTRACTS_ADDRESSES = {
  [ChainId.MAINNET]: MAINNET_CONTRACTS as AngleContractsType,
  [ChainId.RINKEBY]: RINKEBY_ADDRESSES as AngleContractsType,
  [ChainId.LOCAL]: LOCAL_ADDRESSES as AngleContractsType,
};
