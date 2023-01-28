import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CustomerInput = styled(TextField)`
  background-color: #ffff;
  border-radius: 4px;

  @media screen and (max-width: 549px) {
    width: 220px;
  }

  @media screen and (min-width: 550px) {
    min-width: 250px;
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

  @media screen and (min-width: 550px) {
    width: 420px;
  }
`;

export const Wrapper = styled.section`
  flex-basis: 44%;
`;

export const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #07a8db;
  border: 2px solid #9667ff;
  border-radius: 4px;
  box-shadow: 24;
  padding: ${p => p.theme.space[3]};

  @media screen and (min-width: 365px) {
    padding: ${p => p.theme.space[4]};
  }
  @media screen and (min-width: 600px) {
    padding: ${p => p.theme.space[5]};
  } ;
`;
