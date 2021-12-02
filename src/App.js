import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/ContactList';
import ContactListItem from './components/ContactList/ContactListItem';
import Container from './components/Container';
import Filter from './components/Filter/Filter';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList>
            <ContactListItem />
          </ContactList>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});


export default connect(null, mapDispatchToProps)(App);