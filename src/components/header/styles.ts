"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/BreakpointsSizes";

export const Header = styled.header`
  width: 100%;
  height: auto;
`;

export const Root = styled.div`
  width: 100%;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  & button {
    width: 3.8rem;
    height: 3.2rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: transparent;
  }

  ${breakAt("md")} {
    padding: 0 0;
  }
`;

export const Navigation = styled.nav``;
