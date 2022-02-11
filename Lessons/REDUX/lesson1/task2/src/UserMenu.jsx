import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    const { name, avatar_url } = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{name}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
