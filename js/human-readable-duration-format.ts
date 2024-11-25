export const formatDuration = (s: number): string => {
  const t = [
    [86400 * 365, "year"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];
  if (s === 0) return "now";
  return t
    .reduce((p, [d, u]) => {
      const v = Math.floor(s / d);
      s -= v * d;
      if (v > 0) {
        p.push(`${v} ${u}${v > 1 ? "s" : ""}`);
      }
      return p;
    }, [])
    .join(", ")
    .replace(/,([^,]*)$/, " and$1");
};
