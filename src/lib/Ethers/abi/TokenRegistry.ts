const TokenRegistry = {
  address: "0x5fc8d32690cc91d4c39d9d3abcbd16989f875707",
  abi: [
    {
      type: "function",
      name: "addTokenToRegistry",
      inputs: [{ name: "_tokenAddress", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "checkIfTokenIsApproved",
      inputs: [{ name: "_tokenAddress", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTokenRegistryAddress",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isApproved",
      inputs: [
        { name: "protocol", type: "address", internalType: "address" },
        { name: "token", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "approved", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "removeTokenFromRegistry",
      inputs: [{ name: "_tokenAddress", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Token_Added_To_Registry",
      inputs: [
        { name: "protocol", type: "address", indexed: true, internalType: "address" },
        { name: "tokenAddress", type: "address", indexed: true, internalType: "address" },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Token_Removed_From_Registry",
      inputs: [
        { name: "protocol", type: "address", indexed: true, internalType: "address" },
        { name: "tokenAddress", type: "address", indexed: true, internalType: "address" },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "TOKEN_ALREADY_APPROVED",
      inputs: [
        { name: "protocol", type: "address", internalType: "address" },
        { name: "tokenAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "TOKEN_NOT_APPROVED",
      inputs: [
        { name: "protocol", type: "address", internalType: "address" },
        { name: "tokenAddress", type: "address", internalType: "address" },
      ],
    },
  ],
};

export { TokenRegistry };
