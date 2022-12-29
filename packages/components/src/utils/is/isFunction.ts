export default function (fn: any): fn is Function {
  return typeof fn === "function";
}
