import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CustomerInput = styled(TextField)`
  background-color: #ffff;
  border-radius: 4px;

  @media screen and (max-width: 350px) {
    width: 220px;
  }
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[5]};
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: flex-start;
  max-width: 310px;
  background: rgba(150, 230, 255, 0.65);
  border-radius: 8px;
  padding-bottom: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[4]};
  padding-left: 16px;
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};
  box-shadow: ${p => p.theme.shadows.primary};
`;

export const Wrapper = styled.section`
  flex-basis: 44%;
`;
