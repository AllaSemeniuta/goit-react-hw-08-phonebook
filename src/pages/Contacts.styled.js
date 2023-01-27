import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1200px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 570px) {
    display: flex;
    align-items: flex-start;
    gap: ${p => p.theme.space[4]};
  }
`;

export const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
