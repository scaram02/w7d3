import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

const ContactList = props => {
  return (
    <table
      style={{
        marginLeft: "50%",
        transform: "translate(-50%)"
      }}
    >
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  height="100px"
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => props.filterContacts(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

class App extends Component {
  // initial state
  state = {
    contacts: contacts.slice(0, 5)
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== contactId;
      })
    });
  };

  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    // checking if in this.state.contacts we already have the random contact
    if (
      this.state.contacts.find(contact => {
        return contact.id === random.id;
      })
    ) {
      if (this.state.contacts.length < contacts.length) {
        this.addContact();
      }
      return;
    }

    //   create a shallow copy
    const newContacts = [...this.state.contacts];
    newContacts.unshift(random);

    this.setState({
      contacts: newContacts
    });
  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPop = () => {
    const sorted = this.state.contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: sorted
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>
        <ContactList
          contacts={this.state.contacts}
          filterContacts={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
