import { Wrapper, Form, Label, CustomerInput } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';

import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <CustomerInput
            id="filled-basic"
            label="Email"
            variant="filled"
            type="email"
            name="email"
            required
          />
        </Label>
        <Label>
          <CustomerInput
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            name="password"
            required
          />
        </Label>
        <Button type="submit" text="Log In" />
      </Form>
    </Wrapper>
  );
};
