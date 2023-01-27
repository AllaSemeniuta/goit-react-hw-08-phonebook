import styled from 'styled-components';

export const WelcomeText = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  @media screen and (max-width: 599px) {
    font-size: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    font-size: 12px;
    gap: ${p => p.theme.space[2]};
  }
`;
