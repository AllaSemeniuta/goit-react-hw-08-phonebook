import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CustomerInput = styled(TextField)`
  background-color: #ffff;
  border-radius: 4px;
  width: 220px;
`;

export const Input = styled.input`
  outline: transparent;
  border-radius: ${p => p.theme.radii.normal};
  border-color: #fff;
  font-size: ${p => p.theme.fontSizes.sm};
  box-shadow: ${p => p.theme.shadows.primary};
  width: 250px;
  font-size: 16px;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[5]};
  font-size: ${p => p.theme.fontSizes.s};
  width: inherit;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 270px;
  margin-bottom: ${p => p.theme.space[5]};
`;
