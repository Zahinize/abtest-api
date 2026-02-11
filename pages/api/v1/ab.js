/***** api/ab.js *****/
import { POLICIES, EXPERIMENT } from "../../../constants/constants.mjs";
import { getVariant } from "../../../utils/utils.js";

export default function handler(req, res) {
  const { siteId = "default", sessionId = "anon" } = req.query;
  const variant = getVariant({ siteId, sessionId, EXPERIMENT });

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    EXPERIMENT,
    variant,
    policy: POLICIES[variant],
  });
}
