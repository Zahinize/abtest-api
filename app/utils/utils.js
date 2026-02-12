// ----- Hash -----
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// ----- Variant Allocation -----
function getVariant({ siteId, sessionId, experimentId }) {
  const key = `${siteId}:${sessionId}:${experimentId}`;
  const bucket = hashString(key) % 100;
  return bucket < 50 ? "A" : "B";
}

export { hashString, getVariant };
