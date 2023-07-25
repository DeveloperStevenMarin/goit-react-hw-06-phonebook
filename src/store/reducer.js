// reducers.js
import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
            const { id, name, number } = action.payload;
            const existingContact = state.find(
              contact => contact.name.toLowerCase() === name.toLowerCase()
            );
      
            if (existingContact) {
              alert('Ya existe este contacto')
              return state;
            }
      
            state.push({ id, name, number });
          },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});

export default rootReducer

