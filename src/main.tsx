import "./main.scss";
import { createRoot } from "react-dom/client";
import App from "./App";

const appNode: HTMLElement = document.getElementById("app");
const root = createRoot(appNode);

root.render(<App />);
