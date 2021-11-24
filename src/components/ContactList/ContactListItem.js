import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <button
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

// const findContact = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   if (filter) {
//     return allContacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   }
//   return allContacts;
// };

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContact(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);