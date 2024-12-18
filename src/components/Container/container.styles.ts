"use client";

import styled from "styled-components";
import { breakAt } from "@/styles/Breakpoints";

export const Root = styled.div`
  width: 100%;
  height: auto;
  padding: 0 ${({ theme }) => theme.spacings.small};

  ${breakAt("md")} {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
