import styled from 'styled-components';
export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: ${p => p.theme.space[6]};
  border-bottom: 1px solid #2a363b;
  max-width: 1200px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[2]};
`;

export const UserName = styled.section`
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: end;
  color: ${p => p.theme.colors.white};
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: ${p => p.theme.space[6]};
  border-bottom: 1px solid #2a363b;
  max-width: 1200px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[2]}; */
`;
