import { getBindings } from "@/utils/binding";
import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";

export const ServerRoute = createServerFileRoute("/api/heartbeat").methods({
  GET: async () => {
    const time = new Date().toISOString();

    const env = await getBindings();

    await env.KV_NAMESPACES.put("heartbeat", time);

    const data = await env.KV_NAMESPACES.get("heartbeat");

    return json({
      time,
      heartbeat: data,
    });
  },
});
