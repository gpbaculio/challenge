import { UsersStateType } from './types';
import {
  UsersActionTypes,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './types';

const usersInitState: UsersStateType = {
  loading: false,
  users: {},
  error: '',
  userIds: [],
  totalUsers: 0,
  hasMore: true
};

const usersReducer = (state = usersInitState, action: UsersActionTypes) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_USERS_SUCCESS: {
      const { totalUsers } = state;
      const users = {
        ...state.users,
        ...action.payload.users
      };
      const hasMore = totalUsers < Object.keys(users).length;
      return {
        ...state,
        loading: false,
        users,
        totalUsers: action.payload.total,
        hasMore
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
