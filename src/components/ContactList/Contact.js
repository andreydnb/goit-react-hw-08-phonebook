import PropTypes from 'prop-types';
import s from './contactList.module.css';

const Contact = ({ name, number, phone, onClick }) => (
  <li className={s.item}>
    <p>
      {name}: &nbsp;{number || phone}
    </p>
    <button type="button" className={s.btn} onClick={onClick}>
    </button>
  </li>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  phone: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Contact;