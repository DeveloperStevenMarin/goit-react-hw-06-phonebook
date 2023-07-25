import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store/store';
import { addContact, deleteContact, setFilter } from '../store/reducer';

export const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = newFilter => {
    dispatch(setFilter(newFilter));
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onAddContact={handleAddContact} />

        <h4>Contacts</h4>
        <Filter onFilterChange={handleFilterChange} />
        <ContactList onDeleteContact={handleDeleteContact} />
      </div>
    </PersistGate>
  );
};
