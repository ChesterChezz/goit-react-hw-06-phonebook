import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MyStyles from './MyStyles';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { addContact, removeContact, setFilter } from '../JSXs/ContactsSlice';
class App extends Component {
  changeFilter = event => {
    this.props.setFilter(event.target.value);
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.props;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  addContact = contact => {
    const isInContacts = this.props.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.props.addContact({ id: nanoid(), ...contact });
  };

  removeContact = contactId => {
    this.props.removeContact(contactId);
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.props;

    return (
      <>
        <MyStyles.Container>
          <MyStyles.Header>PhoneBook</MyStyles.Header>
          <Form onSubmit={this.addContact}></Form>
          <MyStyles.Header>Contacts</MyStyles.Header>
          {this.props.contacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          ) : (
            <MyStyles.Wrapper>
              Your phonebook is empty. Add first contact!
            </MyStyles.Wrapper>
          )}
          {this.props.contacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onRemoveContact={this.removeContact}
            />
          )}
        </MyStyles.Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  addContact,
  removeContact,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
