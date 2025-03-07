"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/BreakpointsSizes";

export const Button = styled.div`
  button {
    width: 3.6rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};

    cursor: pointer;

    span {
      font-size: 1.4rem;
      font-weight: 100;
      color: ${({ theme }) => theme.colors.text};
      text-transform: uppercase;
    }

    ${breakAt("sm")} {
      .logo {
        margin-right: auto;
        margin-left: 2rem;
      }
    }
  }

  .favorite {
    gap: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    span {
      display: none;
      text-transform: capitalize;
      font-size: 1.4rem;
    }

    ${breakAt("sm")} {
      width: 10.1rem;
      span {
        display: flex;
      }
    }
  }

  .user {
    gap: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    span {
      display: none;
      text-transform: capitalize;
      font-size: 1.4rem;
    }

    ${breakAt("sm")} {
      width: 10.1rem;
      span {
        display: flex;
      }
    }
  }
`;
