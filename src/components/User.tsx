import React from 'react';
import { UserData } from '../store/users/types';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

interface UserProps {
  user: UserData;
}
const User: React.FC<UserProps> = ({ user }) => (
  <li className="mt-4">
    <Card className="w-25 mx-auto">
      <CardImg top width="100%" src={user.avatar} alt="" />
      <CardBody className="p-2 text-center">
        <CardTitle>{`${user.first_name} ${user.last_name}`}</CardTitle>
        <CardText>
          <span className="small">{`${user.email}`}</span>
        </CardText>
      </CardBody>
    </Card>
  </li>
);

export default User;
