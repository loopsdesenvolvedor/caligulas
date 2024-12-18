"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { ReactNode } from "react";

type ProviderStoreType = {
  children: ReactNode;
};

const ProviderStore = ({ children }: ProviderStoreType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderStore;
