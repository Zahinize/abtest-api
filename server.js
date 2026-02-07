import http from "http";
import { POLICIES, EXPERIMENT } from "./constants/constants.mjs";
import { getVariant } from "./utils/utils.js";

// ----- Server -----
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  // Route: /api/ab
  if (parsedUrl.pathname === "/api/ab") {
    const siteId = parsedUrl.searchParams.get("siteId") || "default";
    const sessionId = parsedUrl.searchParams.get("sessionId") || "anon";
    const variant = getVariant({ siteId, sessionId, EXPERIMENT });

    const response = {
      EXPERIMENT,
      variant,
      policy: POLICIES[variant],
    };

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    });

    res.end(JSON.stringify(response));
    return;
  }

  // Fallback route
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

// ----- Start -----
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`A/B Testing API running at http://localhost:${PORT}`);
});
