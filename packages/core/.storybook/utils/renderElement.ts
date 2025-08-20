// Cache to track constructor mappings to avoid repeated checks
const constructorCache = new Map<string, CustomElementConstructor>();
// Cache for generated unique tag names
const tagCache = new Map<CustomElementConstructor, string>();

/**
 * Renders a custom element specifically for Storybook stories.
 * Handles custom element redefinition by creating unique tag names when needed.
 * Optimized for performance with caching strategies.
 *
 * @param tag - The tag name for the custom element
 * @param customElement - The custom element constructor
 * @param slot - Content to be placed inside the element
 * @param args - Properties and event handlers to be applied to the element
 * @returns The outer HTML of the created element
 */
export const renderElement = (tag: string, customElement: CustomElementConstructor, slot: Node | string | undefined, args: Record<string, any> = {}) => {
  let actualTag = tag;

  // Check cache first for performance
  const cachedConstructor = constructorCache.get(tag);

  if (cachedConstructor) {
    // Use cached result
    if (cachedConstructor !== customElement) {
      // Check if we already have a cached tag for this constructor
      const cachedTag = tagCache.get(customElement);
      if (cachedTag) {
        actualTag = cachedTag;
      }
      else {
        // Generate new unique tag and cache it
        actualTag = `${tag}-${Math.random().toString(36).substr(2, 9)}`;
        customElements.define(actualTag, customElement);
        tagCache.set(customElement, actualTag);
        constructorCache.set(actualTag, customElement);
      }
    }
    // If same constructor, reuse existing tag
  }
  else {
    // First time check - check actual customElements registry
    const existingConstructor = customElements.get(tag);

    if (existingConstructor) {
      constructorCache.set(tag, existingConstructor);

      if (existingConstructor !== customElement) {
        // Check if we already have a cached tag for this constructor
        const cachedTag = tagCache.get(customElement);
        if (cachedTag) {
          actualTag = cachedTag;
        }
        else {
          // Generate new unique tag and cache it
          actualTag = `${tag}-${Math.random().toString(36).substr(2, 9)}`;
          customElements.define(actualTag, customElement);
          tagCache.set(customElement, actualTag);
          constructorCache.set(actualTag, customElement);
        }
      }
    }
    else {
      // Define the custom element for the first time
      customElements.define(actualTag, customElement);
      constructorCache.set(actualTag, customElement);
    }
  }

  // Create a new element instance
  const element = document.createElement(actualTag);

  // Optimize property and event handler application
  if (Object.keys(args).length > 0) {
    const entries = Object.entries(args);
    const eventHandlers: Array<[string, any]> = [];
    const attributes: Array<[string, any]> = [];

    // Separate event handlers from attributes for batch processing
    for (const [key, value] of entries) {
      if (key.startsWith("on")) {
        eventHandlers.push([key.slice(2).toLowerCase(), value]);
      }
      else {
        attributes.push([key, value]);
      }
    }

    // Batch apply attributes
    for (const [key, value] of attributes) {
      if (value === null || value === undefined) {
        element.removeAttribute(key);
      }
      else if (typeof value === "boolean") {
        value ? element.setAttribute(key, "true") : element.removeAttribute(key);
      }
      else {
        element.setAttribute(key, String(value));
      }
    }

    // Batch apply event handlers
    for (const [eventName, handler] of eventHandlers) {
      element.addEventListener(eventName, handler);
    }
  }

  // Optimize content setting
  if (slot !== undefined) {
    if (typeof slot === "string") {
      element.innerHTML = slot;
    }
    else if (slot instanceof Node) {
      element.appendChild(slot);
    }
  }
  else {
    element.innerHTML = "";
  }

  return element.outerHTML;
};
