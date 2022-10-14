import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { QueryClientProvider, QueryClient } from "react-query";

import { RecoilRoot } from "recoil";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById("root")
);

reportWebVitals();
