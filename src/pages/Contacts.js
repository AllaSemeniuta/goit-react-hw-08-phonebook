import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from 'components/GlobalStyle';
import Title from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { Wrapper, ContactInfo, RequestInfo } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContactForm />
        <ContactInfo>
          <Title mb="30px">Contacts</Title>
          {isLoading && !error ? (
            <RequestInfo>Request in progress...</RequestInfo>
          ) : (
            <>
              <Filter />
              <ContactList />
              <Toaster />
            </>
          )}
        </ContactInfo>
      </Wrapper>
    </>
  );
}
