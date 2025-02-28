/// <reference types="vinxi/types/server" />

import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";

import { createRouter } from "./router";

const startHandler = createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);

export default startHandler;
