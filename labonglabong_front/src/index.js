import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);

reportWebVitals();
