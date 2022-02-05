import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import { toast } from 'react-toastify';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Button from '@material-ui/core/Button';
import LoaderComponent from '../LoaderComponent';

function Form() {
   const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      return toast(`${name} is already in contacts!`);
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }


    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          className={s.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      {!isLoading && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Add contact
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default Form;
