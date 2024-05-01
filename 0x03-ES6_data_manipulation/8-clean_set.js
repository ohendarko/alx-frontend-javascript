export default function cleanSet(set, startString) {
  const appends = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      appends.push(element.slice(startString.length));
    }
  });
  return appends.join('-');
}
