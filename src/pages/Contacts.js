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
import { Wrapper } from './Contacts.styled';
// import { Wrapper } from './App.styled';
// import { RestrictedRoute } from 'components/RestrictedRoute';
// import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'components/PrivateRoute';
// import LoginPage from 'pages/Login';
// import HomePage from 'pages/Home';
// import RegisterPage from 'pages/Register';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import { Layout } from 'components/Layout';

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
      {/* <Title as="h1">Phonebook</Title> */}
      <Wrapper>
        <ContactForm />
        <Title mb="30px">Contacts</Title>
        {isLoading && !error ? (
          <b>Request in progress...</b>
        ) : (
          <>
            <Filter />
            <ContactList />
            <Toaster />
          </>
        )}
      </Wrapper>
    </>
  );
}
