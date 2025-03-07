"use client";

import styled from "styled-components";

export const Root = styled.input`
  width: 100%;
  height: 3.2rem;
  display: block;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 1rem;
  outline: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.red};
    position: absolute;
    margin-right: 2rem;
  }
`;
