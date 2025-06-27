const Sayv = {
  address: "0x0165878a594ca255338adfa4d48449f69242eb8f",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "_addressProviderAddress",
          type: "address",
          internalType: "address",
        },
        {
          name: "_yieldAdvanceAddress",
          type: "address",
          internalType: "address",
        },
        {
          name: "_tokenRegistryAddress",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "RAY",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "depositToVault",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
        {
          name: "_amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAccountNumOfShares",
      inputs: [
        {
          name: "_account",
          type: "address",
          internalType: "address",
        },
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getAccountShareValue",
      inputs: [
        {
          name: "_account",
          type: "address",
          internalType: "address",
        },
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getActivePoolAddress",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getValueOfTotalRevenueShares",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getVaultAddress",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getYieldAdvance",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
        {
          name: "_collateral",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "_advanceAmount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "i_aavePool",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IPool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "i_addressesProvider",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IPoolAddressesProvider",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "i_owner",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "i_tokenRegistry",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract ITokenRegistry",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "i_yieldAdvance",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IYieldAdvance",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "managePermittedTokens",
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
          internalType: "address",
        },
        {
          name: "_isApproved",
          type: "bool",
          internalType: "bool",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "repayYieldAdvanceWithDeposit",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
        {
          name: "_amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "s_totalRevenueShares",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "s_totalYieldShares",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "s_yieldShares",
      inputs: [
        {
          name: "account",
          type: "address",
          internalType: "address",
        },
        {
          name: "token",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "withdrawFromVault",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
        {
          name: "_amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawYieldAdvanceCollateral",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Advance_Repayment_Deposit",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "token",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "repaidAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "currentDebt",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Advance_Taken",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "token",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "collateral",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "advanceMinusFee",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Deposit_To_Pool",
      inputs: [
        {
          name: "token",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Withdraw_Collateral",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "token",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "collateralWithdrawn",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Withdraw_From_Pool",
      inputs: [
        {
          name: "token",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "ACCOUNT_HAS_NO_DEBT",
      inputs: [],
    },
    {
      type: "error",
      name: "ADVANCES_AT_MAX_CAPACITY",
      inputs: [],
    },
    {
      type: "error",
      name: "ALLOWANCE_NOT_ENOUGH",
      inputs: [],
    },
    {
      type: "error",
      name: "AMOUNT_IS_GREATER_THAN_TOTAL_DEBT",
      inputs: [],
    },
    {
      type: "error",
      name: "DEPOSIT_FAILED",
      inputs: [],
    },
    {
      type: "error",
      name: "INSUFFICIENT_AVAILABLE_FUNDS",
      inputs: [],
    },
    {
      type: "error",
      name: "INVALID_LIQUIDITY_INDEX",
      inputs: [],
    },
    {
      type: "error",
      name: "NOT_OWNER",
      inputs: [],
    },
    {
      type: "error",
      name: "ReentrancyGuardReentrantCall",
      inputs: [],
    },
    {
      type: "error",
      name: "TOKEN_NOT_PERMITTED",
      inputs: [],
    },
    {
      type: "error",
      name: "UNDERFLOW",
      inputs: [],
    },
  ],
};

export { Sayv };
