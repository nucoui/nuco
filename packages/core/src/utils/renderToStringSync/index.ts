/* Super thanks for https://github.com/vuejs/core/blob/main/packages/runtime-test/src/index.ts */

import { extend } from "@vue/shared";
import {
  type CreateAppFunction,
  createRenderer,
  type RootRenderFunction,
  type VNode,
} from "vue";
import { nodeOps, type TestElement } from "./nodeOps";
import { patchProp } from "./patchProp";
import { serializeInner } from "./serialize";

const { render: baseRender, createApp: baseCreateApp } = createRenderer(
  extend({ patchProp }, nodeOps),
);

export const render = baseRender as RootRenderFunction<TestElement>;
export const createApp = baseCreateApp as CreateAppFunction<TestElement>;

// convenience for one-off render validations
export function renderToStringSync(vnode: VNode): string {
  const root = nodeOps.createElement("div");
  render(vnode, root);
  return serializeInner(root);
}
