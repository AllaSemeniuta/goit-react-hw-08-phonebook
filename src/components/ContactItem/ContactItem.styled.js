import { FiX, FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
export const IconDelete = styled(FiX)`
  color: red;
  font-size: ${p => p.theme.fontSizes.sm};

  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;
export const IconEdit = styled(FiEdit)`
  color: #000;
  font-size: ${p => p.theme.fontSizes.sm};
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Wrapper = styled.li`
  display: flex;
  padding-bottom: ${p => p.theme.space[2]};
  padding-top: ${p => p.theme.space[2]};
  flex-wrap: wrap;
  width: 90vw;
  list-style: none;
  flex-grow: 1;
  align-items: center;
  :not(:last-child) {
    border-bottom: 2px solid white;
  }
  :hover,
  :focus {
    border-radius: 15px;
    background: rgba(150, 230, 255, 0.65);
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }

  @media screen and (min-width: 450px) {
    width: 420px;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[4]};
`;

export const ContactText = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
