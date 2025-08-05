import process from "node:process";

let cachedEnv: Env | null = null;

// This gets called once at startup when running locally
const initDevEnv = async () => {
  const { getPlatformProxy } = await import("wrangler");
  const proxy = await getPlatformProxy();
  cachedEnv = proxy.env as unknown as Env;
};

if (import.meta.env.DEV) {
  // eslint-disable-next-line antfu/no-top-level-await
  await initDevEnv();
}

/**
 * Will only work when being accessed on the server. Obviously, CF bindings are not available in the browser.
 */
export async function getBindings(): Promise<Env> {
  if (import.meta.env.DEV) {
    if (!cachedEnv) {
      throw new Error(
        "Dev bindings not initialized yet. Call initDevEnv() first.",
      );
    }
    return cachedEnv;
  }

  // Use import statement to access process.env in ESM

  return process.env as unknown as Env;
}
