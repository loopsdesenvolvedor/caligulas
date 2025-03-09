"use client";

import styled from "styled-components";

export const Heading = styled.h1`
  margin: 3rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  position: relative;
  padding-left: 1rem;

  strong {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow};
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    content: "";
    width: 0.2rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
