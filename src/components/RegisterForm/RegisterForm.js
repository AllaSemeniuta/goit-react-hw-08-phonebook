import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';

import { Form, Label, CustomerInput, Wrapper } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            label="Username"
            variant="filled"
            required
            type="text"
            name="name"
          />
        </Label>
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
        <Button type="submit" text="Register" />
      </Form>
    </Wrapper>
  );
};
