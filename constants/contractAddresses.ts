export const nftDropContractAddress = "0xDB8da239036f32cFE491863E0dDf4A0499Ab0E94";
export const tokenContractAddress = "0x7eA07b326b0CA184897679F6C9322462EA35eC65";
export const stakingContractAddress = "0xc80BB8d5451FB035508880d795a4d8d8DcdA55a7";
//0x7eA07b326b0CA184897679F6C9322462EA35eC65
export const NFT_STAKING_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nftCollection",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardsToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRewardsPerHour",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRewardTokenPerTime",
        type: "uint256",
      },
    ],
    name: "RewardsPerHourUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "availableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getStakeInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_tokensStaked",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_rewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getStakedTokens",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct GreateDaneStaking.StakedToken[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftCollection",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "uint256",
        name: "amountStaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeOfLastUpdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unclaimedRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRewardTokenPerTime",
        type: "uint256",
      },
    ],
    name: "updateRewardTokenPerTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRewardsPerHour",
        type: "uint256",
      },
    ],
    name: "updateRewardsPerHour",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newRewardsPerHour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newRewardTokenPerTime",
        type: "uint256",
      },
    ],
    name: "updateRewardsPerHour",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const NFT_DROP_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
  { inputs: [], name: "ApproveToCaller", type: "error" },
  { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
  { inputs: [], name: "MintToZeroAddress", type: "error" },
  { inputs: [], name: "MintZeroQuantity", type: "error" },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "OperatorNotAllowed",
    type: "error",
  },
  { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
  { inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
  { inputs: [], name: "TransferToZeroAddress", type: "error" },
  { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "maxClaimableSupply",
            type: "uint256",
          },
          { internalType: "uint256", name: "supplyClaimed", type: "uint256" },
          {
            internalType: "uint256",
            name: "quantityLimitPerWallet",
            type: "uint256",
          },
          { internalType: "bytes32", name: "merkleRoot", type: "bytes32" },
          { internalType: "uint256", name: "pricePerToken", type: "uint256" },
          { internalType: "address", name: "currency", type: "address" },
          { internalType: "string", name: "metadata", type: "string" },
        ],
        indexed: false,
        internalType: "struct IClaimCondition.ClaimCondition[]",
        name: "claimConditions",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "resetEligibility",
        type: "bool",
      },
    ],
    name: "ClaimConditionsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRoyaltyRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRoyaltyBps",
        type: "uint256",
      },
    ],
    name: "DefaultRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxTotalSupply",
        type: "uint256",
      },
    ],
    name: "MaxTotalSupplyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "restriction",
        type: "bool",
      },
    ],
    name: "OperatorRestriction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "platformFeeRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFeeBps",
        type: "uint256",
      },
    ],
    name: "PlatformFeeInfoUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "PrimarySaleRecipientUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "royaltyRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royaltyBps",
        type: "uint256",
      },
    ],
    name: "RoyaltyForToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "revealedURI",
        type: "string",
      },
    ],
    name: "TokenURIRevealed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "claimConditionIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantityClaimed",
        type: "uint256",
      },
    ],
    name: "TokensClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedBaseURI",
        type: "bytes",
      },
    ],
    name: "TokensLazyMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_quantity", type: "uint256" },
      { internalType: "address", name: "_currency", type: "address" },
      { internalType: "uint256", name: "_pricePerToken", type: "uint256" },
      {
        components: [
          { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
          {
            internalType: "uint256",
            name: "quantityLimitPerWallet",
            type: "uint256",
          },
          { internalType: "uint256", name: "pricePerToken", type: "uint256" },
          { internalType: "address", name: "currency", type: "address" },
        ],
        internalType: "struct IDrop.AllowlistProof",
        name: "_allowlistProof",
        type: "tuple",
      },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimCondition",
    outputs: [
      { internalType: "uint256", name: "currentStartId", type: "uint256" },
      { internalType: "uint256", name: "count", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractType",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractVersion",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "data", type: "bytes" },
      { internalType: "bytes", name: "key", type: "bytes" },
    ],
    name: "encryptDecrypt",
    outputs: [{ internalType: "bytes", name: "result", type: "bytes" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "encryptedData",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveClaimConditionId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseURICount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }],
    name: "getBatchIdAtIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_conditionId", type: "uint256" },
    ],
    name: "getClaimConditionById",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "maxClaimableSupply",
            type: "uint256",
          },
          { internalType: "uint256", name: "supplyClaimed", type: "uint256" },
          {
            internalType: "uint256",
            name: "quantityLimitPerWallet",
            type: "uint256",
          },
          { internalType: "bytes32", name: "merkleRoot", type: "bytes32" },
          { internalType: "uint256", name: "pricePerToken", type: "uint256" },
          { internalType: "address", name: "currency", type: "address" },
          { internalType: "string", name: "metadata", type: "string" },
        ],
        internalType: "struct IClaimCondition.ClaimCondition",
        name: "condition",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultRoyaltyInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint16", name: "", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlatformFeeInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint16", name: "", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_batchId", type: "uint256" },
      { internalType: "bytes", name: "_key", type: "bytes" },
    ],
    name: "getRevealURI",
    outputs: [{ internalType: "string", name: "revealedURI", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "member", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getRoyaltyInfoForToken",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint16", name: "", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_conditionId", type: "uint256" },
      { internalType: "address", name: "_claimer", type: "address" },
    ],
    name: "getSupplyClaimedByWallet",
    outputs: [
      {
        internalType: "uint256",
        name: "supplyClaimedByWallet",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRoleWithSwitch",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_defaultAdmin", type: "address" },
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      { internalType: "string", name: "_contractURI", type: "string" },
      {
        internalType: "address[]",
        name: "_trustedForwarders",
        type: "address[]",
      },
      { internalType: "address", name: "_saleRecipient", type: "address" },
      { internalType: "address", name: "_royaltyRecipient", type: "address" },
      { internalType: "uint128", name: "_royaltyBps", type: "uint128" },
      { internalType: "uint128", name: "_platformFeeBps", type: "uint128" },
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_batchId", type: "uint256" }],
    name: "isEncryptedBatch",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "forwarder", type: "address" }],
    name: "isTrustedForwarder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "string", name: "_baseURIForTokens", type: "string" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "lazyMint",
    outputs: [{ internalType: "uint256", name: "batchId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenIdToClaim",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenIdToMint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorRestriction",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primarySaleRecipient",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_index", type: "uint256" },
      { internalType: "bytes", name: "_key", type: "bytes" },
    ],
    name: "reveal",
    outputs: [{ internalType: "string", name: "revealedURI", type: "string" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "salePrice", type: "uint256" },
    ],
    name: "royaltyInfo",
    outputs: [
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint256", name: "royaltyAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "maxClaimableSupply",
            type: "uint256",
          },
          { internalType: "uint256", name: "supplyClaimed", type: "uint256" },
          {
            internalType: "uint256",
            name: "quantityLimitPerWallet",
            type: "uint256",
          },
          { internalType: "bytes32", name: "merkleRoot", type: "bytes32" },
          { internalType: "uint256", name: "pricePerToken", type: "uint256" },
          { internalType: "address", name: "currency", type: "address" },
          { internalType: "string", name: "metadata", type: "string" },
        ],
        internalType: "struct IClaimCondition.ClaimCondition[]",
        name: "_conditions",
        type: "tuple[]",
      },
      { internalType: "bool", name: "_resetClaimEligibility", type: "bool" },
    ],
    name: "setClaimConditions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_uri", type: "string" }],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_royaltyRecipient", type: "address" },
      { internalType: "uint256", name: "_royaltyBps", type: "uint256" },
    ],
    name: "setDefaultRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_maxTotalSupply", type: "uint256" },
    ],
    name: "setMaxTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_restriction", type: "bool" }],
    name: "setOperatorRestriction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
      { internalType: "uint256", name: "_platformFeeBps", type: "uint256" },
    ],
    name: "setPlatformFeeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_saleRecipient", type: "address" },
    ],
    name: "setPrimarySaleRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "address", name: "_recipient", type: "address" },
      { internalType: "uint256", name: "_bps", type: "uint256" },
    ],
    name: "setRoyaltyInfoForToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_conditionId", type: "uint256" },
      { internalType: "address", name: "_claimer", type: "address" },
      { internalType: "uint256", name: "_quantity", type: "uint256" },
      { internalType: "address", name: "_currency", type: "address" },
      { internalType: "uint256", name: "_pricePerToken", type: "uint256" },
      {
        components: [
          { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
          {
            internalType: "uint256",
            name: "quantityLimitPerWallet",
            type: "uint256",
          },
          { internalType: "uint256", name: "pricePerToken", type: "uint256" },
          { internalType: "address", name: "currency", type: "address" },
        ],
        internalType: "struct IDrop.AllowlistProof",
        name: "_allowlistProof",
        type: "tuple",
      },
    ],
    name: "verifyClaim",
    outputs: [{ internalType: "bool", name: "isOverride", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

//   chainId: 137, //Fuji testnet : 43113, mainnet : 43114.  bsctestnet : 97, Rikeby: 4
// mainNetUrl: "https://rpc-mainnet.matic.quiknode.pro	",

// StakingAddress: "0xdD3901bB32B7C4E2e53DB6ec59E676bD83908832",
// StakingAbi: stakingNFT_abi,
// nftAddress: "0x23E4081CD2b218B18be74cC903bbd6579A863495",
// nftAbi: nft_abi,
// INFURA_ID: "e6943dcb5b0f495eb96a1c34e0d1493e",

// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.11;

// import "@thirdweb-dev/contracts/base/Staking721Base.sol";
// import "@thirdweb-dev/contracts/extension/Ownable.sol";

// contract Contract is Ownable, Staking721Base {
//     // address public owner;

//     constructor(
//         uint256 _timeUnit,
//         uint256 _rewardsPerUnitTime,
//         address _stakingToken,
//         address _rewardToken,
//         address _nativeTokenWrapper
//     )
//         Staking721Base(
//             _timeUnit,
//             _rewardsPerUnitTime,
//             _stakingToken,
//             _rewardToken,
//             _nativeTokenWrapper
//         )
//     {
//         // transferOwnership(msg.sender);
//     }

//     // function transferOwnership(address newOwner) external {
//     //     require(msg.sender == owner(), "Only the owner can transfer ownership");
//     //     transferOwnership(newOwner);
//     // }

//     // function transferOwnershipTo(address newOwner) external onlyOwner {
//     //     require(newOwner != address(0), "Invalid address");
//     //     owner = newOwner;
//     //     transferOwnership(msg.sender);
//     // }

//     //     function transferOwnershipTo(address newOwner) external onlyOwner {
//     //     require(newOwner != address(0), "Invalid address");
//     //     owner = newOwner;
//     //     transferOwnershipTo(msg.sender);
//     // }

//     function _canSetOwner()
//         internal
//         view
//         virtual
//         override(Ownable, Staking721Base)
//         returns (bool)
//     {
//         return msg.sender == owner();
//     }
// }

//////

// import {
//   ConnectWallet,
//   ThirdwebNftMedia,
//   useAddress,
//   useContract,
//   useContractRead,
//   useOwnedNFTs,
//   useTokenBalance,
//   Web3Button,
// } from "@thirdweb-dev/react";
// import { BigNumber, ethers } from "ethers";
// import type { NextPage } from "next";
// import { useEffect, useState } from "react";
// import NFTCard from "../components/NFTCard";
// import {
//   nftDropContractAddress,
//   stakingContractAddress,
//   tokenContractAddress,
// } from "../constants/contractAddresses";
// import { useMetamask, useNFTDrop, useToken } from "@thirdweb-dev/react";
// import styles from "../styles/Home.module.css";
// const Stake: NextPage = () => {
//   const address = useAddress();
//   const connectWithMetamask = useMetamask();

//   const { contract: nftDropContract } = useContract(
//     nftDropContractAddress,
//     "nft-drop"
//   );
//   const { contract: tokenContract } = useContract(
//     tokenContractAddress,
//     "token"
//   );

//   // Contract Hooks
//   // const tokenContract = useToken(tokenContractAddress);
//   const { contract, isLoading } = useContract(stakingContractAddress);
//   const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
//   const { data: tokenBalance } = useTokenBalance(tokenContract, address);
//   const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
//   const { data: stakedTokens } = useContractRead(
//     contract,
//     "getStakeInfo",
//     address
//   );

//   // useEffect(() => {
//   //   if (!contract || !address) return;

//   //   async function loadClaimableRewards() {
//   //     const stakeInfo = await contract?.call("getStakeInfo", address);
//   //     setClaimableRewards(stakeInfo[1]);
//   //   }

//   //   loadClaimableRewards();
//   // }, [address, contract]);

//   const [stakedNfts, setStakedNfts] = useState<any[]>([]);

//   useEffect(() => {
//     if (!contract) return;

//     async function loadStakedNfts() {
//       const stakedTokens = await contract?.call("getStakedTokens", address);

//       // For each staked token, fetch metadata for the NFT
//       const stakedNfts = await Promise.all(
//         stakedTokens?.map(
//           async (stakedToken: { staker: string; tokenId: BigNumber }) => {
//             const nft = await nftDropContract?.get(stakedToken.tokenId);
//             return nft;
//           }
//         )
//       );

//       setStakedNfts(stakedNfts);
//       console.log("setStakedNfts", stakedNfts);
//     }

//     if (address) {
//       loadStakedNfts();
//     }
//   }, [address, contract, nftDropContract]);

//   useEffect(() => {
//     if (!contract || !address) return;

//     async function loadClaimableRewards() {
//       const cr = await contract?.call("availableRewards", address);
//       setClaimableRewards(cr);
//     }

//     loadClaimableRewards();
//   }, [address, contract]);

//   async function stakeNft(id: BigNumber) {
//     if (!address) return;

//     const isApproved = await nftDropContract?.isApproved(
//       address,
//       stakingContractAddress
//     );
//     // If not approved, request approval
//     if (!isApproved) {
//       await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
//     }
//     const stake = await contract?.call("stake", id);
//   }
//   async function withdraw(id: BigNumber) {
//     const withdraw = await contract?.call("withdraw", id);
//   }

//   // async function withdraw(id: BigNumber) {
//   //   const withdraw = await contract?.call("withdraw", id);
//   // }

//   // async function stakeNft(id: string) {
//   //   if (!address) return;

//   //   const isApproved = await nftDropContract?.isApproved(
//   //     address,
//   //     stakingContractAddress
//   //   );
//   //   if (!isApproved) {
//   //     await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
//   //   }
//   //   await contract?.call("stake", [id]);
//   // }
//   async function claimRewards() {
//     const claim = await contract?.call("claimRewards");
//   }

//   if (isLoading) {
//     return <div>Loading</div>;
//   }
//   ////////////

//   return (
//     <div className="container mx-auto stake">
//       <h1 className=""> Stake Your NFTs</h1>
//       <hr className="" />
//       <div>
//         <h1>Stake Your NFTs</h1>

//         <hr />

//         {!address ? (
//           <button onClick={connectWithMetamask}>Connect Wallet</button>
//         ) : (
//           <>// ... next code blocks go here</>
//         )}

//         <h2>Your Tokens</h2>

//         <div className={styles.tokenGrid}>
//           <div className={styles.tokenItem}>
//             <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
//             <p className={styles.tokenValue}>
//               <b>
//                 {!claimableRewards
//                   ? "Loading..."
//                   : ethers.utils.formatUnits(claimableRewards, 18)}
//               </b>{" "}
//               {tokenBalance?.symbol}
//             </p>
//           </div>
//           <div className={styles.tokenItem}>
//             <h3 className={styles.tokenLabel}>Current Balance</h3>
//             <p className={styles.tokenValue}>
//               <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
//             </p>
//           </div>
//         </div>
//         <button
//           className={`${styles.mainButton} ${styles.spacerTop}`}
//           onClick={() => claimRewards()}
//         >
//           Claim Rewards
//         </button>

//         <h2>Your Staked NFTs</h2>
//         <div className={styles.nftBoxGrid}>
//           {stakedNfts?.map((nft) => (
//             <div className={styles.nftBox} key={nft.metadata.id.toString()}>
//               <ThirdwebNftMedia
//                 metadata={nft.metadata}
//                 className={styles.nftMedia}
//               />
//               <h3>{nft.metadata.name}</h3>
//               <button
//                 className={`${styles.mainButton} ${styles.spacerBottom}`}
//                 onClick={() => withdraw(nft.metadata.id)}
//               >
//                 Withdraw
//               </button>
//             </div>
//           ))}
//         </div>
//         <h2>Your Unstaked NFTs</h2>

//         <div className={styles.nftBoxGrid}>
//           {ownedNfts?.map((nft) => (
//             <div className={styles.nftBox} key={nft.metadata.id.toString()}>
//               <ThirdwebNftMedia
//                 metadata={nft.metadata}
//                 className={styles.nftMedia}
//               />
//               <h3>{nft.metadata.id}</h3>
//               <button
//                 className={`${styles.mainButton} ${styles.spacerBottom}`}
//                 onClick={() => stakeNft(nft.metadata.id)}
//               >
//                 Stake
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ///////////////////////////////////////////// */}
//       {!address ? (
//         <ConnectWallet />
//       ) : (
//         <>
//           <h1>Your Tokens</h1>
//           <div className="rowx rewards">
//             <div className="effect col50 Claimable_Rewards">
//               <h3 className="">Claimable Rewards</h3>
//               <p className="">
//                 <b className="">
//                   {!claimableRewards ? (
//                     <span className="center"> Loading...</span>
//                   ) : (
//                     ethers.utils.formatUnits(claimableRewards, 18)
//                   )}
//                   <span> {tokenBalance?.symbol}</span>{" "}
//                 </b>
//               </p>
//             </div>
//             <div className="effect col50 Current_Balance">
//               <h3 className="">Current Balance</h3>
//               <p className="">
//                 <b>
//                   {tokenBalance?.displayValue}{" "}
//                   <span>{tokenBalance?.symbol}</span>{" "}
//                 </b>
//               </p>
//             </div>
//           </div>

//           <Web3Button
//             action={(contract) => contract.call("claimRewards")}
//             contractAddress={stakingContractAddress}
//           >
//             Claim Rewards
//           </Web3Button>

//           <hr className="" />
//           <div className="your_stake_nfts_div">
//             <h2 className="your_stake_nfts">Your Staked NFTs</h2>
//             <div className="">
//               {stakedTokens &&
//                 stakedTokens[0]?.map((stakedToken: BigNumber) => (
//                   <NFTCard
//                     tokenId={stakedToken.toNumber()}
//                     key={stakedToken.toString()}
//                   />
//                 ))}
//             </div>
//           </div>

//           <hr className="" />
//           <h1>Your Unstaked NFTs</h1>
//           <div className="rowx">
//             {/* {ownedNfts?.map((nft) => (
//               <div
//                 className="col30 nftBoxGrid"
//                 key={nft.metadata.id.toString()}
//               >
//                 <ThirdwebNftMedia metadata={nft.metadata} className="" />

//                 <h4>#{nft.metadata.id}</h4>
//                 <h3>{nft.metadata.name}</h3>
//                 <p>{nft.metadata.description}</p>
//                 <Web3Button
//                   contractAddress={stakingContractAddress}
//                   action={() => stakeNft(nft.metadata.id)}
//                   className="Web3Button_stake"
//                 >
//                   Stake
//                 </Web3Button>
//               </div>
//             ))} */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Stake;
