import { Box } from 'components/Box/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';

import { InformText } from './ContactList.styled';
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
  console.log(filterArr);
  return (
    <Box as="ul">
      {filterArr.length === 0 ? (
        <InformText>
          No contacts added
          <span role="img" aria-label="Greeting icon">
            😼
          </span>
        </InformText>
      ) : (
        filterArr.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))
      )}
    </Box>
  );
};
