import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button } from 'components/Button/Button';
import { Form, Label, CustomerInput, Wrapper } from './ContactForm.styled';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error(`No case fo Form input name ${name}.`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    if (contacts.find(item => item.name === name)) {
      toast.error(`Name ${name} is alredy in contacts!`, {
        position: 'top-right',
      });
      resetState();
      return;
    }

    if (contacts.find(item => item.number === number)) {
      toast.error(`Number ${number} is alredy in contacts!`, {
        position: 'top-right',
      });
      resetState();
      return;
    }

    dispatch(addContact(contact));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <CustomerInput
            id="filled-basic"
            label="Name"
            variant="filled"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <CustomerInput
            id="filled-basic"
            label="Phone"
            variant="filled"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />{' '}
        </Label>
        <Button type="submit" text="Add contact" />
      </Form>
    </Wrapper>
  );
};
