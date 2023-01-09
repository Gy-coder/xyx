export default function omit<T = any>(obj: Record<string, T>, paths: string[]) {
  const res: Record<string, T> = { ...obj },
    set = new Set(paths);
  for (let key in obj) {
    if (set.has(key)) delete res[key];
  }
  return res;
}
