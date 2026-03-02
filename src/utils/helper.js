export default function toUpperCaseObj(obj, ignore = []) {
  const result = {};

  for (let key in obj) {
    if (!ignore.includes(key) && typeof obj[key] === "string") {
      result[key] = obj[key].toUpperCase();
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
