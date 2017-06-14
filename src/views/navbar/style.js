import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Transition, FlexRow, hexa } from '../../components/globals';
import { Avatar } from '../../components/avatar';

export const UserProfileAvatar = styled(Avatar)`
  flex: 0 0 24px;
  margin-top: 0;

  @media (max-width: 768px) {
    position: relative;
    top: 3px;
    margin-bottom: 8px;
    height: 24px;
    width: 24px;
    border: none;
    box-shadow: none;
  }
`;

export const Container = styled(FlexRow)`
  width: 100%;
  flex: 0 0 48px;
`;

export const Nav = styled(FlexRow)`
  width: 100%;
  background: ${({ theme }) => (process.env.NODE_ENV === 'production' ? theme.text.default : theme.warn.alt)};
  display: flex;
  align-items: stretch;
  color: ${({ theme }) => theme.text.reverse};
  justify-content: space-between;
  flex: 0 0 48px;
  padding: 0 16px;
  line-height: 1;
  box-shadow: 0 4px 8px ${({ theme }) => hexa(theme.bg.reverse, 0.15)};
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 8px;
    order: 3;
    box-shadow: 0 -4px 8px ${({ theme }) => hexa(theme.bg.reverse, 0.15)};
  }
`;

export const Section = styled(FlexRow)`
  align-items: stretch;

  @media (max-width: 768px) {
    flex: 1 1 ${props => (props.left ? '75%' : '25%')};
    justify-content: space-around;
    display: ${props => (props.hideOnMobile ? 'none' : 'flex')};
  }
`;

export const LogoLink = styled(Link)`
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  ${() => process.env.NODE_ENV !== 'production' && css`
    &:after {
      content: "Dev";
      margin-top: 4px;
      font-size: 0.75em;
    }
  `}
`;

export const SigninLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  position: relative;
  top: 1px;
  left: 1px;
`;

export const UnseenCount = styled.span`
  position: absolute;
  right: ${props => (props.size === 'large' ? '-12px' : '4px')};
  top: 4px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.bg.default};
  color: ${({ theme }) => (process.env.NODE_ENV === 'production' ? theme.text.default : theme.warn.alt)};;
  border-radius: 8px;
  padding: 2px 4px;
  border: 2px solid ${({ theme }) => (process.env.NODE_ENV === 'production' ? theme.text.default : theme.warn.alt)};

  @media (max-width: 768px) {
    width: ${props => (props.size === 'large' ? '36px' : '20px')};
    height: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
    border-radius: 40px;
    right: ${props => (props.size === 'large' ? '8px' : '24px')};
  }
`;

export const DmUnseenCount = styled(UnseenCount)`
  right: ${props => (props.size === 'large' ? '80px' : '84px')};

  @media (max-width: 768px) {
    right: ${props => (props.size === 'large' ? '-8px' : '8px')};
  }
`;

export const IconDrop = styled(FlexRow)`
  align-items: stretch;
  align-self: stretch;
  position: relative;
  flex: 0 0 auto;

  &:hover {
    opacity: 1;
  }

  .dropdown {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    right: 0;
    padding: 8px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover .dropdown,
  .dropdown:hover {
    opacity: 1;
    pointer-events: auto;
    transition: ${Transition.hover.on};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const IconLink = styled(Link)`
  display: flex;
  flex: 0 0 40px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin: 0 8px;
  padding: 0 8px;
  opacity: 0.8;
  position: relative;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  &[data-active~="true"] {
    box-shadow: inset 0 -4px 0 ${({ theme }) => theme.bg.default};
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    opacity: 0.7;
    margin: 0;

    &[data-active~="true"] {
      box-shadow: inset 0 0 0 ${({ theme }) => theme.bg.default};
      opacity: 1;
    }

    svg {
      width: 24px;
      height: 24px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%)!important;
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 9px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 2px;
    margin-left: 0;
  }
`;

export const LabelForTab = styled(Label)`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export const DropdownHeader = styled(FlexRow)`
  border-bottom: 2px solid ${({ theme }) => theme.bg.wash};
  flex: 0 0 auto;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  font-weight: 800;
  font-size: 14px;
  color: ${({ theme }) => theme.text.alt};
`;

export const DropdownFooter = styled(FlexRow)`
  border-top: 2px solid ${({ theme }) => theme.bg.wash};
  flex: 0 0 32px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 8px;

  button {
    display: flex;
    flex: 1;

    &:first-of-type:not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;

export const Notification = styled.div`
  color: ${props => props.theme.text.default};
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.border.default};
`;
