import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  filter: '', // Додайте фільтр до початкового стану
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Оновлення значення фільтру
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
