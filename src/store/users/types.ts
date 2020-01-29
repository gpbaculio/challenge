export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export interface FetchUsersRequestActionType {
  type: typeof FETCH_USERS_REQUEST;
  payload: {
    page: number;
  };
}

export interface UsersStateType {
  loading: boolean;
  users: { [id: string]: UserData };
  error: string;
  userIds: string[];
  totalUsers: number;
  hasMore: boolean;
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface FetchUsersSuccessActionType {
  type: typeof FETCH_USERS_SUCCESS;
  payload: {
    page: number;
    per_page: number;
    total: number;
    users: {
      [id: string]: UserData;
    };
    userIds: string[];
    totalUsers: number;
  };
}

export interface FetchUsersFailureActionType {
  type: typeof FETCH_USERS_FAILURE;
  payload: {
    error: string;
  };
}

export type UsersActionTypes =
  | FetchUsersRequestActionType
  | FetchUsersSuccessActionType
  | FetchUsersFailureActionType;
