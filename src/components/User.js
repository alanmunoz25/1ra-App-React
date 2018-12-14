import React, { Component } from 'react';

class User extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}


export default User;
