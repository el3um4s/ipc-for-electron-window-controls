# IPC for Electron: Window Controls

Allow the renderer to close, minimize and maximize the window (for desktop Electron)

NPM link: [@el3um4s/ipc-for-electron-window-controls](https://www.npmjs.com/package/@el3um4s/ipc-for-electron-window-controls)

Use [@el3um4s/ipc-for-electron](https://www.npmjs.com/package/@el3um4s/ipc-for-electron) and [@el3um4s/renderer-for-electron-window-controls](https://www.npmjs.com/package/@el3um4s/renderer-for-electron-window-controls) to allow communication between Electron and a web page

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/ipc-for-electron @el3um4s/ipc-for-electron-window-controls @el3um4s/renderer-for-electron-window-controls
```

Then the `preload.ts` file:

```ts
import { generateContextBridge } from "@el3um4s/ipc-for-electron";
import windowControls from "@el3um4s/ipc-for-electron-window-controls";

const listAPI = [windowControls];

generateContextBridge(windowControls);
```

In the renderer file:

```ts
import windowControls from "@el3um4s/renderer-for-electron-window-controls";
let isWindows = false;

windowControls.minimize();
windowControls.maximize();
windowControls.unmaximize();
windowControls.close();
```

In the renderer you can use:

```ts
globalThis.ipc.windowControls.send("minimize", null);
globalThis.ipc.windowControls.send("maximize", null);
globalThis.ipc.windowControls.send("unmaximize", null);
globalThis.ipc.windowControls.send("close", null);
```

### API: Electron Side

- `minimize` - Minimize the window
- `maximize` - Maximize the window
- `unmaximize` - Unmaximize the window
- `close` - Close the window

### API: Renderer Side - Request

`minimize = (options: { apiKey?: string }): void`

example:

```ts
import windowControls from "@el3um4s/renderer-for-electron-window-controls";

windowControls.minimize();
```

`maximize = (options: { apiKey?: string }): void`

example:

```ts
import windowControls from "@el3um4s/renderer-for-electron-window-controls";

windowControls.maximize({ apiKey: "my-api-key" });
```

`unmaximize = (options: { apiKey?: string }): void`

example:

```ts
import windowControls from "@el3um4s/renderer-for-electron-window-controls";

windowControls.unmaximize();
```

`close = (options: { apiKey?: string }): void`

example:

```ts
import windowControls from "@el3um4s/renderer-for-electron-window-controls";

windowControls.close();
```

### Types

**DefaultApiKey**

```ts
type DefaultApiKey = "ipc";
```
