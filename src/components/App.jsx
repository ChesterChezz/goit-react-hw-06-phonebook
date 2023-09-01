import React from 'react';
import * as MyStyles from './MyStyles';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <>
      <MyStyles.Container>
        <MyStyles.Header>Phonebook</MyStyles.Header>
        <Form />
        <Filter />
        <MyStyles.Wrapper>Contacts</MyStyles.Wrapper>
        <ContactList />
      </MyStyles.Container>
    </>
  );
};
export default App;
