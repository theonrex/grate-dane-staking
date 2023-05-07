export interface UserData {
  userName: string;
  fullName: string;
  about: string;
}

export interface OwnNft {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  // ... 8 more ...
  possible_spam: boolean;
}

export interface PaginatedJSONResponse<T> {
  total: number;
  page: number;
  perPage: number;
  result: T;
}

