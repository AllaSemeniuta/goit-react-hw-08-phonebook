import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';
export const Icon = styled(RxCross2)`
  color: red;
  font-size: ${p => p.theme.fontSizes.sm};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Wrapper = styled.li`
  display: flex;
  /* padding: 0 16px; */
  width: 90vw;
  list-style: none;
  /* margin-bottom: 12px; */
  /* margin: 0 auto 16px auto; */
  flex-grow: 1;
  :hover,
  :focus {
    border-radius: 15px;
    background: rgba(150, 230, 255, 0.65);
    /* border: 1px solid transparent; */
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }

  @media screen and (min-width: 450px) {
    width: 420px;
  }
`;
