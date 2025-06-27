const YieldAdvance = {
  address: "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "_addressProvider",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "claimRevenue",
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
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAccountTotalShareValue",
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
      name: "getAccountTotalYield",
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
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAdvance",
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
          name: "_advanceMinusFee",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getCollateralAmount",
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
      name: "getCollateralShares",
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
      name: "getDebt",
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
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getShareValue",
      inputs: [
        {
          name: "_token",
          type: "address",
          internalType: "address",
        },
        {
          name: "_shares",
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
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTotalDebt",
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
      name: "getTotalRevenueShareValue",
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
      name: "getTotalRevenueShares",
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
      name: "getYieldAdvanceContractAddress",
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
      name: "repayAdvanceWithDeposit",
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
      name: "s_accountYield",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_collateral",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_collateralShares",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_debt",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_totalAccountYield",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_totalCollateral",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_totalCollateralShares",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_totalDebt",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "s_totalRevenueShares",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
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
      name: "withdrawCollateral",
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
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Advance_Repayment_Deposit",
      inputs: [
        {
          name: "protocol",
          type: "address",
          indexed: true,
          internalType: "address",
        },
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
          name: "protocol",
          type: "address",
          indexed: true,
          internalType: "address",
        },
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
          name: "advancePlusFee",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Revenue_Claimed",
      inputs: [
        {
          name: "protocol",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "revAmount",
          type: "uint256",
          indexed: false,
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
          name: "protocol",
          type: "address",
          indexed: true,
          internalType: "address",
        },
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
      type: "error",
      name: "INVALID_LIQUIDITY_INDEX",
      inputs: [],
    },
    {
      type: "error",
      name: "NO_REVENUE_TO_CLAIM",
      inputs: [],
    },
    {
      type: "error",
      name: "OVERFLOW",
      inputs: [],
    },
    {
      type: "error",
      name: "REPAY_ADVANCE_TO_WITHDRAW",
      inputs: [],
    },
  ],
};
export { YieldAdvance };
