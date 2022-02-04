import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');


export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');
