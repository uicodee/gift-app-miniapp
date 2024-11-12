import { init } from "@/init.ts";
import "../mockEnv.ts";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "@/shared/i18n/i18n.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
  // defaultOptions: { queries: { staleTime: 1 * 60 * 1000 } },
});

init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </I18nextProvider>
);
