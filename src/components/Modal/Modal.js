import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { CustomerInput, Label, Form, Wrapper, Container } from './Modal.styled';
import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';

export default function BasicModal({ isOpen = false, onClose, user }) {
  console.log(user);
  const [name, setName] = useState(user.name);
  const [number, setNumber] = useState(user.number);
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

  const handelSubmit = e => {
    e.preventDefault();
    const data = {
      contactId: user.id,
      name,
      number,
    };
    dispatch(editContact(data));
    onClose();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Wrapper>
            <Form onSubmit={handelSubmit}>
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
                  required
                  onChange={handleChange}
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
              <Button type="submit" text="Edit contact" />
            </Form>
          </Wrapper>
        </Container>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
