/* Super thanks for https://github.com/vuejs/core/blob/main/packages/runtime-test/src/index.ts */

import { serializeHastInner } from "@/utils/renderToHastSync/serializeHast";
import { extend } from "@vue/shared";
import {
  type CreateAppFunction,
  createRenderer,
  type RootRenderFunction,
  type VNode,
} from "vue";
import { type Element, nodeOps } from "./nodeOps";
import { patchProp } from "./patchProp";

const { render: baseRender, createApp: baseCreateApp } = createRenderer(
  extend({ patchProp }, nodeOps),
);

export const render = baseRender as RootRenderFunction<Element>;
export const createApp = baseCreateApp as CreateAppFunction<Element>;

export const renderToHastSync = (vNode: VNode) => {
  const root = nodeOps.createElement("nuco");
  render(vNode, root);
  return serializeHastInner(root);
};
