import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CustomerInput = styled(TextField)`
  background-color: #ffff;
  border-radius: 4px;
  width: 220px;

  /* div {
    input {
      font-weight: ${p => p.theme.fontWeights.bold};
    }
  } */

  @media screen and (max-width: 569px) {
  }
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
  /* padding-left: 16px; */
  margin-bottom: ${p => p.theme.space[5]};

  @media screen and (min-width: 360px) {
    /* padding-left: 40px; */
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }

  /* padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[5]}; */
`;
