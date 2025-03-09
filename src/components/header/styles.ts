"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/BreakpointsSizes";

export const Header = styled.header`
  width: 100%;
  height: 12.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  ${breakAt("sm")} {
    height: 8rem;
  }
`;

export const Root = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const FormSearch = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;

  .form-content {
    width: 100%;
    height: 3.2rem;
    display: flex;
    position: relative;

    .submit {
      border: 0;
      background-color: transparent;
      position: absolute;
      right: 1rem;
    }
  }

  ${breakAt("sm")} {
    max-width: 38.8rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  ${breakAt("md")} {
    max-width: 48.8rem;
  }
`;

export const DropdownGender = styled.div`
  width: 100%;
  max-width: 9.5rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.red};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin: 0;

  cursor: pointer;
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
