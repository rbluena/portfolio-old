import styled from 'styled-components';

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: grid;
    grid-gap: 10px;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }
`;

export const NavItem = styled.li`
  position: relative;
  height: 20px;
  width: 20px;

  a {
    padding: 5px;
    min-height: 10px;
    display: block;

    & span {
      position: absolute;
      width: max-content;
      /* max-width: 200px; */
      visibility: hidden;
      background: #03071e;
      padding: 2px 4px;
      border-radius: 2px;
      font-size: 0.8em;
      letter-spacing: 1px;
      color: white;
      left: 20px;
      top: 0;
    }
  }

  a:hover {
    transform: scale(1.2);
    transition-property: all;
    transition-duration: 0.3s;

    & > span {
      visibility: visible;
      width: max-width;
      transition: width 0.3s ease-in-out;
    }

    &::before {
      visibility: visible;
    }
  }

  a::before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background-color: #03071e;
    position: absolute;
    visibility: hidden;
    top: 6px;
    left: 6px;
    box-shadow: 12px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  a::after {
    content: '';
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #03071e;
    border-radius: 50%;
    top: 0;
    left: 0;
    box-shadow: 12px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;
