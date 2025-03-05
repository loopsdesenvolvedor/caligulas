"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/BreakpointsSizes";

export const Header = styled.header`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Root = styled.div`
  width: 100%;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  ${breakAt("sm")} {
    width: 100%;
    max-width: 1440px;
    height: 8rem;
    margin: 0 auto;

    a {
      margin-right: auto;
      margin-left: 1.6rem;
    }
  }
`;

export const Button = styled.button`
  width: 10.1;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  gap: 2rem;

  span {
    font-size: 1.4rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
  }

  ${breakAt("sm")} {
    padding: 0 1rem;
    .logo {
      margin-right: auto;
      margin-left: 2rem;
    }
  }
`;

export const NavigationRight = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & button {
    width: 5.1rem;

    ${breakAt("sm")} {
      width: auto;
      justify-content: space-between;
    }

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      span {
        display: none;
        text-transform: capitalize;
        font-size: 1.4rem;
      }

      ${breakAt("sm")} {
        span {
          display: flex;
        }
      }
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      span {
        display: none;
        text-transform: capitalize;
        font-size: 1.4rem;
      }

      ${breakAt("sm")} {
        span {
          display: flex;
        }
      }
    }
  }
`;
