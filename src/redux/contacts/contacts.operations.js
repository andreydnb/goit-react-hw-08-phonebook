
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as actions from './contacts-actions';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);
    return id;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number: phone }) => {
    const contact = { name, phone };

    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);