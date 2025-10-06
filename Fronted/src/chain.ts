import { defineChain } from "viem";

export const EDUchain = defineChain({
    id:656476,
    name:'Open Campus Codex',
    nativeCurrency:{name:'EDU', symbol:'EDU', decimals:18},
    rpcUrls:{
        default:{ http:['https://rpc.open-campus-codex.gelato.digital']},
    },
    blockExplorers:{
        default: {name:'EDU explorer', url: 'https://opencampus-codex.blockscout.com'},
    },
})