import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import {
  IconDelete,
  IconEdit,
  Button,
  Wrapper,
  ContactText,
  ContactInfoWrapper,
} from './ContactItem.styled';
import { useState } from 'react';
import BasicModal from 'components/Modal/Modal';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const [idContact, setIdContact] = useState(null);

  const onCloseModal = () => {
    setIdContact(null);
    console.log('setIdContact(null)');
  };

  return (
    <Wrapper>
      <ContactInfoWrapper>
        {' '}
        <ContactText>{name}</ContactText>
        <ContactText>{number}</ContactText>
      </ContactInfoWrapper>
      <Button type="button" onClick={() => setIdContact(id)}>
        <IconEdit />
      </Button>

      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <IconDelete />
      </Button>

      {idContact && (
        <BasicModal isOpen onClose={onCloseModal} user={{ name, number, id }} />
      )}
    </Wrapper>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
