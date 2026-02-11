export const config = {
  runtime: "edge",
};

import { POLICIES, EXPERIMENT } from "../../constants/constants.mjs";
import { getVariant } from "../../utils/utils.js";

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const siteId = searchParams.get("siteId") || "default";
  const sessionId = searchParams.get("sessionId") || "anon";

  const variant = getVariant({ siteId, sessionId, EXPERIMENT });

  return new Response(
    JSON.stringify({
      EXPERIMENT,
      variant,
      policy: POLICIES[variant],
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
