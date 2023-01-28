import styled from 'styled-components';

export const TitleStyled = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  text-shadow: ${p => p.theme.shadows.primary};
  margin-bottom: ${p => p.mb};
  color: ${p => p.theme.colors.white};
  text-align: center;
`;
