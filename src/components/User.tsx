import React from 'react';
import styled from 'styled-components';

import { UserData } from '../store/users/types';

interface UserProps {
  user: UserData;
}

const UserContainer = styled.li`
  display: flex;
  padding: 1.5rem;
  border-bottom: solid #f9f9f9 2px;
  align-items: center;
`;

const UserImg = styled.img`
  border-radius: 50%;
`;

const UserFullname = styled.div`
  margin-left: 1.5rem;
  font-size: 1.5rem;
`;

const User: React.FC<UserProps> = ({ user }) => (
  <UserContainer>
    <UserImg width="100" src={user.avatar} alt="" />
    <UserFullname>{`${user.first_name} ${user.last_name}`}</UserFullname>
  </UserContainer>
);

export default User;
