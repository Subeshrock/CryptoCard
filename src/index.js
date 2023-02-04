import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClinet}>
    <App />
  </QueryClientProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
