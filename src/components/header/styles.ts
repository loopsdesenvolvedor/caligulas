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

export const NavigationRight = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  ${breakAt("sm")} {
    gap: 0;
  }
`;
