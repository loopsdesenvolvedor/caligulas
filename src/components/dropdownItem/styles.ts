"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/BreakpointsSizes";

export const Button = styled.div`
  button {
    width: 10.1;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    gap: 1rem;
    cursor: pointer;

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
  }

  .favorite {
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

  .user {
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
`;
