import { markRaw } from "vue";

export enum NodeTypes {
  TEXT = "text",
  ELEMENT = "element",
  COMMENT = "comment",
}

export enum NodeOpTypes {
  CREATE = "create",
  INSERT = "insert",
  REMOVE = "remove",
  SET_TEXT = "setText",
  SET_ELEMENT_TEXT = "setElementText",
  PATCH = "patch",
}

export interface Element {
  id: number;
  type: NodeTypes.ELEMENT;
  parentNode: Element | null;
  tag: string;
  children: Node[];
  props: Record<string, any>;
  // eslint-disable-next-line ts/no-unsafe-function-type
  eventListeners: Record<string, Function | Function[]> | null;
}

export interface Text {
  id: number;
  type: NodeTypes.TEXT;
  parentNode: Element | null;
  text: string;
}

export interface Comment {
  id: number;
  type: NodeTypes.COMMENT;
  parentNode: Element | null;
  text: string;
}

export type Node = Element | Text | Comment;

export interface NodeOp {
  type: NodeOpTypes;
  nodeType?: NodeTypes;
  tag?: string;
  text?: string;
  targetNode?: Node;
  parentNode?: Element;
  refNode?: Node | null;
  propKey?: string;
  propPrevValue?: any;
  propNextValue?: any;
}

let nodeId: number = 0;
let recordedNodeOps: NodeOp[] = [];

export function logNodeOp(op: NodeOp): void {
  recordedNodeOps.push(op);
}

export function resetOps(): void {
  recordedNodeOps = [];
}

export function dumpOps(): NodeOp[] {
  const ops = recordedNodeOps.slice();
  resetOps();
  return ops;
}

function createElement(tag: string): Element {
  const node: Element = {
    id: nodeId++,
    type: NodeTypes.ELEMENT,
    tag,
    children: [],
    props: {},
    parentNode: null,
    eventListeners: null,
  };
  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NodeTypes.ELEMENT,
    targetNode: node,
    tag,
  });
  // avoid test nodes from being observed
  markRaw(node);
  return node;
}

function createText(text: string): Text {
  const node: Text = {
    id: nodeId++,
    type: NodeTypes.TEXT,
    text,
    parentNode: null,
  };
  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NodeTypes.TEXT,
    targetNode: node,
    text,
  });
  // avoid test nodes from being observed
  markRaw(node);
  return node;
}

function createComment(text: string): Comment {
  const node: Comment = {
    id: nodeId++,
    type: NodeTypes.COMMENT,
    text,
    parentNode: null,
  };
  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NodeTypes.COMMENT,
    targetNode: node,
    text,
  });
  // avoid test nodes from being observed
  markRaw(node);
  return node;
}

function setText(node: Text, text: string): void {
  logNodeOp({
    type: NodeOpTypes.SET_TEXT,
    targetNode: node,
    text,
  });
  node.text = text;
}

function insert(
  child: Node,
  parent: Element,
  ref?: Node | null,
): void {
  let refIndex;
  if (ref) {
    refIndex = parent.children.indexOf(ref);
    if (refIndex === -1) {
      console.error("ref: ", ref);
      console.error("parent: ", parent);
      throw new Error("ref is not a child of parent");
    }
  }
  logNodeOp({
    type: NodeOpTypes.INSERT,
    targetNode: child,
    parentNode: parent,
    refNode: ref,
  });
  // remove the node first, but don't log it as a REMOVE op
  remove(child, false);
  // re-calculate the ref index because the child's removal may have affected it
  refIndex = ref ? parent.children.indexOf(ref) : -1;
  if (refIndex === -1) {
    parent.children.push(child);
    child.parentNode = parent;
  }
  else {
    parent.children.splice(refIndex, 0, child);
    child.parentNode = parent;
  }
}

function remove(child: Node, logOp = true): void {
  const parent = child.parentNode;
  if (parent) {
    if (logOp) {
      logNodeOp({
        type: NodeOpTypes.REMOVE,
        targetNode: child,
        parentNode: parent,
      });
    }
    const i = parent.children.indexOf(child);
    if (i > -1) {
      parent.children.splice(i, 1);
    }
    else {
      console.error("target: ", child);
      console.error("parent: ", parent);
      throw new Error("target is not a childNode of parent");
    }
    child.parentNode = null;
  }
}

function setElementText(el: Element, text: string): void {
  logNodeOp({
    type: NodeOpTypes.SET_ELEMENT_TEXT,
    targetNode: el,
    text,
  });
  el.children.forEach((c) => {
    c.parentNode = null;
  });
  if (!text) {
    el.children = [];
  }
  else {
    el.children = [
      {
        id: nodeId++,
        type: NodeTypes.TEXT,
        text,
        parentNode: el,
      },
    ];
  }
}

function parentNode(node: Node): Element | null {
  return node.parentNode;
}

function nextSibling(node: Node): Node | null {
  const parent = node.parentNode;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
}

function querySelector(): never {
  throw new Error("querySelector not supported in test renderer.");
}

function setScopeId(el: Element, id: string): void {
  el.props[id] = "";
}

export const nodeOps: {
  insert: typeof insert;
  remove: typeof remove;
  createElement: typeof createElement;
  createText: typeof createText;
  createComment: typeof createComment;
  setText: typeof setText;
  setElementText: typeof setElementText;
  parentNode: typeof parentNode;
  nextSibling: typeof nextSibling;
  querySelector: typeof querySelector;
  setScopeId: typeof setScopeId;
} = {
  insert,
  remove,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
  querySelector,
  setScopeId,
};
