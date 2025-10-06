import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify"
import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable } from "hardhat/config";
import * as dotenv from "dotenv";
dotenv.config();

const { EDUCHAIN_RPC_URL_TESNET, EDUCHAIN_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    "edu-chain-testnet": {
        type:"http",
        url: EDUCHAIN_RPC_URL_TESNET,
        accounts: EDUCHAIN_PRIVATE_KEY ? [EDUCHAIN_PRIVATE_KEY] : [],
        chainId: 656476,
      },
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      'edu-chain-testnet': "empty"
    },
    customChains: [
      {
        network: "edu-chain-testnet",
        chainId: 656476,
        urls: {
          apiURL: "https://edu-chain-testnet.blockscout.com/api",
          browserURL: "https://edu-chain-testnet.blockscout.com"
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  }
};

export default config;
