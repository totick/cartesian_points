export function cartesianPointsDistance(cp1, cp2) {
  try {
    const x = Math.pow(cp2[0] - cp1[0], 2);
    const y = Math.pow(cp2[1] - cp1[1], 2);
    const result = Math.sqrt(x + y);
    return result;
  } catch (error) {
    return undefined;
  }
}
