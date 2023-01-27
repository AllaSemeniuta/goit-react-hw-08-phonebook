import { Box } from 'components/Box/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { Item } from './ContactList.styled';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterArr = getFilteredContacts();

  return (
    <Box as="ul">
      {filterArr.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </Box>
  );
};
