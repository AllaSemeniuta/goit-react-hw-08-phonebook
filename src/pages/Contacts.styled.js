import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1200px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[6]};
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: ${p => p.theme.space[4]};
  }
`;

export const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const RequestInfo = styled.p`
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;
