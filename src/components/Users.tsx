import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { normalize, schema } from 'normalizr';
import * as api from '../api';
import { RootState } from '../store/index';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../store/users/types';

import User from './User';
import Loading from './Loading';

const Users = () => {
  const [page, setPage] = useState(1);
  const { users, loading, hasMore } = useSelector(
    ({ users }: RootState) => users
  );
  const dispatch = useDispatch();

  const fetchUsers = useCallback(
    async (page: number) => {
      try {
        const { data, ...result } = await api.fetchUsers(page);
        const user = new schema.Entity('users');
        const {
          entities,
          result: { users: userIds }
        } = normalize({ users: data }, { users: [user] });
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: {
            ...result,
            users: entities.users,
            userIds
          }
        });
      } catch (error) {
        dispatch({ type: FETCH_USERS_FAILURE, payload: { error } });
      }
    },
    [dispatch]
  );

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const atBottomScroll =
      e.currentTarget.scrollHeight - Math.ceil(e.currentTarget.scrollTop) ===
      e.currentTarget.clientHeight;
    if (atBottomScroll && hasMore && !loading) setPage(page + 1);
  };

  //fetch on page change and didmount since page = 1
  useEffect(() => {
    dispatch({
      type: FETCH_USERS_REQUEST,
      payload: { page }
    });
    const timer = setTimeout(() => {
      fetchUsers(page);
    }, 3000);
    return () => clearTimeout(timer);
  }, [fetchUsers, page, dispatch]);

  return (
    <ul
      style={{ overflowY: 'scroll' }}
      className="position-relative mb-0 flex-grow-1 flex-column list-unstyled d-flex"
      onScroll={handleScroll}
    >
      {Object.keys(users).map((userId, idx) => {
        const user = users[userId];
        return <User key={`${idx}:${user.first_name}`} {...{ user }} />;
      })}
      {loading && hasMore && <Loading />}
      {!hasMore && (
        <div
          style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.9)' }}
          className="mx-auto my-3 p-2"
        >
          No more users
        </div>
      )}
    </ul>
  );
};

export default Users;
