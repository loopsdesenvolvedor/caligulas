"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;

  ${breakAt("sm")} {
    max-width: 1440px;
    padding: 0 1rem;
  }
`;
