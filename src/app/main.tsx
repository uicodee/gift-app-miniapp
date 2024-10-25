import { init } from "@/init.ts";
import "../mockEnv.ts";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
