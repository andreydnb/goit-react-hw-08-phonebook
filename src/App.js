import React from 'react';

import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container/Container';

import './App.css';

const App = () => {
	return (
		<React.StrictMode>
			<Container>
				<h1>Phonebook</h1>
				<Form />
				<Filter />
				<ContactList />
			</Container>
		</React.StrictMode>
	);
};

export default App;

