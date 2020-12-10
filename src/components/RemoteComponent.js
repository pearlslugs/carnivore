import {
    createRemoteComponent,
    createRequires
  } from "@paciolan/remote-component";
  import { resolve } from "../../next.config.config.js";
  
  const requires = createRequires(resolve);
  export const RemoteComponent = createRemoteComponent({ requires });