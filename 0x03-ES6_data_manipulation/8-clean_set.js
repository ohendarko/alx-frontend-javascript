export default function cleanSet(set, startString) {
  let appends = '';
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      appends += `${item.substring(startString.length)}-`;
    }
  });
  if (appends.length > 0) {
    appends = appends.slice(0, -1);
  }
  return appends;
}
