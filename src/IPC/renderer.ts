import { NameAPI, DefaultApiKey } from "./interfaces";

const nameAPI: NameAPI = "windowControls";
const defaultApiKey: DefaultApiKey = "ipc";

const minimize = (options: { apiKey?: string }): void => {
  const apiKey = options?.apiKey || defaultApiKey;
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("minimize", null);
};

const maximize = (options: { apiKey?: string }): void => {
  const apiKey = options?.apiKey || defaultApiKey;
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("maximize", null);
};

const close = (options: { apiKey?: string }): void => {
  const apiKey = options?.apiKey || defaultApiKey;
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("close", null);
};

const unmaximize = (options: { apiKey?: string }): void => {
  const apiKey = options?.apiKey || defaultApiKey;
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("unmaximize", null);
};

const renderer = {
  minimize,
  maximize,
  close,
  unmaximize,
};

export default renderer;
