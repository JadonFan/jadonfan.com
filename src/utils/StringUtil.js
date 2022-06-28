export function capitalize(str) {
  if (!str) {
    return str;
  } else if (str.length === 1) {
    return str.charAt(0).toUpperCase();
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
