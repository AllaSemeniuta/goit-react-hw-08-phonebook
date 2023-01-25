// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Toaster } from 'react-hot-toast';
// import GlobalStyle from 'components/GlobalStyle';
// import Title from '../Title/Title';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
// import { Wrapper } from './App.styled';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import LoginPage from 'pages/Login';
import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from 'components/Layout';
import ContactsPage from 'pages/Contacts';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <GlobalStyle />
//       {/* <Title as="h1">Phonebook</Title> */}
//       <ContactForm />
//       <Title mb="30px">Contacts</Title>
//       {isLoading && !error ? (
//         <b>Request in progress...</b>
//       ) : (
//         <>
//           <Filter />
//           <ContactList />
//           <Toaster />
//         </>
//       )}
//     </>
//   );
// };

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
