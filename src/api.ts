import axios from 'axios';
import { USERS_API } from './constants';

export const fetchUsers = async (page: number) => {
  try {
    const { data } = await axios.get(USERS_API, {
      params: {
        page
      }
    });
    return data;
  } catch (error) {
    return error;
  }
};
