import React, { Component } from 'react';
import '../assets/App.css';
import logo from '../assets/logo.svg';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: 'Alan', email: 'Amunoz@altice.do'},
        {id: 2, name: 'Luis', email: 'amunoz@gmail.com'}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
       <div className="App-Header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h2>1ra App con React</h2>
       </div>
       <div>
        <p><strong>Agrega usuarios</strong></p>
        <UserList users={this.state.users} />
        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
      </div>
      </div>
    );
  }
}

export default App;
